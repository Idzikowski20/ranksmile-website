import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Item from './item';

/**
 * The item reads the URL fragment through useSyncExternalStore over `hashchange`,
 * rather than through react-use's useLocation, which patched history.replaceState and
 * dispatched a synchronous event from it. Next calls replaceState inside
 * useInsertionEffect, so every mounted item answered with a setState during the
 * insertion phase and React 19 rejected it.
 *
 * These cover the three behaviours that swap had to preserve, so a later change to
 * the subscription cannot quietly lose them.
 */
const setHash = (hash) => {
  window.history.replaceState(null, '', `${window.location.pathname}${hash}`);
};

const renderItem = (props = {}) =>
  render(<Item question="Does it open?" answer="<p>Yes.</p>" id="faq-1" index={0} {...props} />);

const toggle = () => screen.getByRole('button', { name: /Does it open\?/ });

beforeEach(() => {
  vi.useFakeTimers();
  setHash('');
});

afterEach(() => {
  vi.useRealTimers();
});

describe('Faq Item hash behaviour', () => {
  it('opens when the page is loaded on its own fragment', () => {
    setHash('#faq-1');
    renderItem();

    expect(toggle()).toHaveAttribute('aria-expanded', 'false');

    // The open is deliberately delayed so the scroll lands first.
    act(() => vi.advanceTimersByTime(700));

    expect(toggle()).toHaveAttribute('aria-expanded', 'true');
  });

  it('opens a mounted item when the fragment changes to it', () => {
    renderItem();
    expect(toggle()).toHaveAttribute('aria-expanded', 'false');

    act(() => {
      setHash('#faq-1');
      window.dispatchEvent(new Event('hashchange'));
    });
    act(() => vi.advanceTimersByTime(700));

    expect(toggle()).toHaveAttribute('aria-expanded', 'true');
  });

  it('reacts to a plain anchor click, with no history call involved', () => {
    // The distinguishing case. The old implementation learned about the fragment only
    // because react-use patched history.pushState and replaceState and dispatched its
    // own events from them; it never listened to hashchange. Setting location.hash the
    // way an anchor does, and firing the native event, leaves that version closed.
    renderItem();
    expect(toggle()).toHaveAttribute('aria-expanded', 'false');

    act(() => {
      window.location.hash = '#faq-1';
      window.dispatchEvent(new Event('hashchange'));
    });
    act(() => vi.advanceTimersByTime(700));

    expect(toggle()).toHaveAttribute('aria-expanded', 'true');
  });

  it('ignores a fragment that belongs to another item', () => {
    setHash('#faq-2');
    renderItem();

    act(() => vi.advanceTimersByTime(700));

    expect(toggle()).toHaveAttribute('aria-expanded', 'false');
  });

  it('strips its own fragment when it is closed', () => {
    setHash('#faq-1');
    renderItem();
    act(() => vi.advanceTimersByTime(700));
    expect(toggle()).toHaveAttribute('aria-expanded', 'true');

    act(() => fireEvent.click(toggle()));

    expect(toggle()).toHaveAttribute('aria-expanded', 'false');
    expect(window.location.hash).toBe('');
  });

  it('leaves another item’s fragment alone when it is closed', () => {
    setHash('#faq-2');
    renderItem({ initialState: 'open' });
    expect(toggle()).toHaveAttribute('aria-expanded', 'true');

    act(() => fireEvent.click(toggle()));

    expect(window.location.hash).toBe('#faq-2');
  });
});

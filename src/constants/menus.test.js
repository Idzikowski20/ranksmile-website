import { describe, expect, it } from 'vitest';

import MENUS from './menus';

describe('Product navigation', () => {
  it.each([
    ['AI Visibility', '/ai-visibility'],
    ['Content Score', '/content-score'],
    ['Rank Tracking', '/rank-tracking'],
    ['WordPress plugin', '/wordpress'],
    ['Site Audit', '/site-audit'],
  ])('links %s to its product page', (title, path) => {
    const product = MENUS.header.find(({ text }) => text === 'Product');
    const items = product.sections.flatMap(({ items }) => items);

    expect(items.find((item) => item.title === title)?.to).toBe(path);
  });
});

describe('Contact navigation', () => {
  // A header entry labelled "Contact" that opens a mail client is a dead end for
  // anyone without a configured mail app, and the site already has a form page.
  it('sends the header Contact entry to the contact page, not a mailto', () => {
    const resources = MENUS.header.find(({ text }) => text === 'Resources');
    const items = resources.sections.flatMap(({ items }) => items);
    const contact = items.find((item) => item.title === 'Contact');

    expect(contact.to).toBe('/contact-sales');
  });

  it('sends the footer Contact entry to the same page', () => {
    const items = MENUS.footer.flatMap(({ items }) => items);
    const contact = items.find((item) => item.text === 'Contact');

    expect(contact.to).toBe('/contact-sales');
  });
});

import { describe, expect, it } from 'vitest';

import MENUS from './menus';

describe('Product navigation', () => {
  it.each([
    ['AI Visibility', '/ai-visibility'],
    ['Content Score', '/content-score'],
    ['Rank Tracking', '/rank-tracking'],
    ['WordPress plugin', '/wordpress'],
    ['Keyword Research', '/ai-gateway'],
  ])('links %s to its product page', (title, path) => {
    const product = MENUS.header.find(({ text }) => text === 'Product');
    const items = product.sections.flatMap(({ items }) => items);

    expect(items.find((item) => item.title === title)?.to).toBe(path);
  });
});

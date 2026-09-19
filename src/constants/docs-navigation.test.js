import fs from 'fs';
import path from 'path';

import jsYaml from 'js-yaml';
import { describe, it, expect } from 'vitest';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

const navigation = jsYaml.load(fs.readFileSync(path.join(DOCS_DIR, 'navigation.yaml'), 'utf8'));

// Every slug in the file, depth-first. External and site-absolute slugs are
// skipped: only the bare ones resolve to a file under content/docs/.
const collectSlugs = (nodes, found = []) => {
  for (const node of nodes ?? []) {
    if (node.slug && !node.slug.startsWith('http') && !node.slug.startsWith('/')) {
      found.push(node.slug);
    }
    collectSlugs(node.items, found);
    collectSlugs(node.subnav, found);
  }
  return found;
};

describe('navigation.yaml', () => {
  // A slug with no page behind it renders as a link to a 404. The top-level
  // entry is the one that hurts: it is the docs tab in the sub-nav bar, so a
  // bad slug there is a dead link on every docs page.
  it.each(collectSlugs(navigation))('has a page for %s', (slug) => {
    expect(fs.existsSync(path.join(DOCS_DIR, `${slug}.md`))).toBe(true);
  });

  // The nav item component reads `nav` for the label (`const Item = ({ nav:
  // title, ... })`). An entry that sets `title` instead renders an empty link.
  it('labels every top-level entry with nav', () => {
    for (const entry of navigation) {
      expect(
        entry.nav,
        `top-level entry ${JSON.stringify(entry.title)} has no nav label`
      ).toBeTruthy();
    }
  });
});

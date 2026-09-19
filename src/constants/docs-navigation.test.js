import fs from 'fs';
import path from 'path';

import jsYaml from 'js-yaml';
import { describe, it, expect } from 'vitest';

const DOCS_DIR = path.join(process.cwd(), 'content/docs');

const navigation = jsYaml.load(fs.readFileSync(path.join(DOCS_DIR, 'navigation.yaml'), 'utf8'));

// Every slug in the file, depth-first, paired with the file it should resolve
// to. Bare slugs are docs pages; /faqs/... ones point at the FAQ route, which
// shares the docs layout. External slugs are skipped.
const CONTENT_DIR = path.join(process.cwd(), 'content');

const fileForSlug = (slug) => {
  if (slug.startsWith('http')) return null;
  if (slug === '/faqs') return null; // index route, no file of its own
  if (slug.startsWith('/faqs/')) return path.join(CONTENT_DIR, `${slug.slice(1)}.md`);
  if (slug.startsWith('/')) return null;
  return path.join(DOCS_DIR, `${slug}.md`);
};

const collectSlugs = (nodes, found = []) => {
  for (const node of nodes ?? []) {
    if (node.slug && fileForSlug(node.slug)) {
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
    expect(fs.existsSync(fileForSlug(slug))).toBe(true);
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

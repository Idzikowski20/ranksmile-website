import fs from 'fs';
import path from 'path';

import { describe, it, expect } from 'vitest';

import { DOCS_BASE_PATH, DOCS_HOME_SLUG } from './docs';
import LINKS from './links';


// The header's Docs link goes to /docs, which the proxy redirects to the docs
// home. When the home slug names a page that does not exist, that redirect lands
// on a 404 and the entire docs section is unreachable from the nav, which is
// exactly what happened when Neon's top-level introduction.md was replaced by an
// introduction/ directory.
describe('docs home', () => {
  it('points at a page that exists', () => {
    const file = path.join(process.cwd(), 'content/docs', `${DOCS_HOME_SLUG}.md`);

    expect(fs.existsSync(file)).toBe(true);
  });

  it('agrees with the link the site sends people to', () => {
    expect(LINKS.docsHome).toBe(`${DOCS_BASE_PATH}${DOCS_HOME_SLUG}`);
  });
});

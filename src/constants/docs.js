const DOCS_BASE_PATH = '/docs/';
// Keep LINKS.docsHome in step with this: /docs redirects there, and a slug with
// no page behind it makes the whole section unreachable from the nav.
const DOCS_HOME_SLUG = 'introduction/overview';
const CHANGELOG_BASE_PATH = `/docs/changelog/`;
const CHANGELOG_SLUG_REGEX = /\d{4}-\d{2}-\d{2}/;

module.exports = {
  DOCS_BASE_PATH,
  DOCS_HOME_SLUG,
  CHANGELOG_BASE_PATH,
  CHANGELOG_SLUG_REGEX,
};

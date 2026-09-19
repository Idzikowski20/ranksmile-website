/**
 * Configuration for llms.txt index generation.
 *
 * HOW IT WORKS
 * The generator scans every content directory in CONTENT_ROUTES (src/constants/content.js).
 * Any new directory or .md file is automatically included — you never need to register new
 * pages here. This config only shapes the output: ordering, descriptions, exclusions, etc.
 *
 * New subdirectories (e.g. content/docs/foobar/) appear as a new section ("Foobar"),
 * appended alphabetically after explicitly ordered sections. To control placement or add
 * a description, add an entry to `sections` below.
 *
 * Section names here must match the directory names under content/docs/, title-cased by
 * the generator: a section listed with no pages behind it fails the build rather than
 * emitting an empty heading.
 */

module.exports = {
  tagline:
    'Ranksmile is an SEO and AI visibility tool from Globalzone. It tracks search positions, measures whether AI assistants mention and cite you, crawls your site for technical problems and crawler access, scores content against what already ranks, and schedules the work that closes the gaps.',

  intro: [
    'Ranksmile docs are available as markdown.',
    'Append `.md` to any doc URL or set `Accept: text/markdown`.',
    'This is the primary index.',
  ].join(' '),

  // Quick-reference links emitted as "## Common tasks" before the section list.
  // (Kept as `commonQueries` internally; the generator renders the heading.)
  commonQueries: [
    {
      label: 'What Ranksmile is and how the modules fit together',
      url: 'https://ranksmile.pl/docs/introduction/overview.md',
    },
    {
      label: 'Set up a new domain and get a readable picture in a week',
      url: 'https://ranksmile.pl/docs/introduction/first-week.md',
    },
    {
      label: 'Check whether AI assistants mention and cite the site',
      url: 'https://ranksmile.pl/docs/ai-visibility/overview.md',
    },
    {
      label: 'Find out why AI visibility is flat (start with crawler access)',
      url: 'https://ranksmile.pl/docs/site/ai-search-health.md',
    },
    {
      label: 'Understand why a page scores badly',
      url: 'https://ranksmile.pl/docs/content/content-score.md',
    },
    {
      label: 'Connect an assistant over MCP',
      url: 'https://ranksmile.pl/docs/integrations/mcp.md',
    },
    { label: 'Plans and limits', url: 'https://ranksmile.pl/docs/introduction/plans.md' },
  ],

  // Ordering and descriptions for the sections under content/docs/.
  // Directory name -> section name is title-cased by the generator.
  sections: [
    {
      name: 'Introduction',
      description:
        'What Ranksmile is, how Brand Spaces work, what to do in your first week, and what each plan includes.',
    },
    {
      name: 'Ai Visibility',
      description:
        'Whether AI assistants name your brand and cite your domain: choosing prompts, reading sources and competitors, and the fanout queries behind an answer.',
    },
    {
      name: 'Search',
      description:
        'Keyword tracking, the working keyword list, research and competitor gaps, and Search Console performance.',
    },
    {
      name: 'Site',
      description:
        'Crawling the domain for technical problems and speed, checking whether answer-engine crawlers can reach you, and the ordered list of what to fix.',
    },
    {
      name: 'Content',
      description:
        'Scoring a page against what ranks, auditing the whole library, closing the gaps automatically, and scheduling the work.',
    },
    {
      name: 'Integrations',
      description:
        'The WordPress plugin, the MCP server for outside assistants, and Smily AI inside the app.',
    },
    {
      name: 'Reference',
      description: 'Terms used across the product and the distinctions that matter.',
    },
  ],

  // Path prefixes excluded from the index (relative to content dir for the route).
  excludePaths: [],

  // Reclassify specific files into a different subsection. Keys are relative paths.
  reclassify: {},

  reclassifyPrefixes: [],

  // Route keys from CONTENT_ROUTES to collapse instead of scanning.
  // Each becomes a single link in the Additional Resources section.
  collapsedRoutes: {
    'docs/changelog': {
      title: 'Changelog',
      url: 'https://ranksmile.pl/docs/changelog',
      description: 'What shipped recently',
    },
    faqs: {
      title: 'FAQs',
      url: 'https://ranksmile.pl/faqs',
      description: 'Answers to the questions asked before signing up',
    },
  },

  // Extra entries appended to the Additional Resources section.
  // `sourcePath` (optional): excludes that file from its natural section so it only appears here.
  additionalResources: [],

  // Indexes written at build time that are not linked from public/docs/llms.txt.
  // Site search ingest walks these URLs; the official docs catalog walk stays on the parent index.
  unlinkedIndexes: [
    {
      route: 'docs/changelog',
      publicPath: 'docs/changelog',
      outputPath: 'public/docs/changelog/llms.txt',
      title: 'Ranksmile Changelog',
      intro: 'What shipped recently.',
    },
  ],

  // Configuration for llms-full.txt (single file with all doc content).
  // Uses shared excludePaths, EXCLUDED_DIRS, EXCLUDED_FILES from this config.
  // Section `collapse` settings are index-only and do not apply here.
  fullText: {
    // Routes from CONTENT_ROUTES to skip entirely.
    excludeRoutes: ['docs/changelog', 'faqs'],
    // When true, do not exclude additionalResources[].sourcePath files
    // (e.g., glossary.md stays in its natural section instead of being excluded).
    includeAdditionalResourcePaths: true,
  },
};

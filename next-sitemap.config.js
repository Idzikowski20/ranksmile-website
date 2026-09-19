const { guideHasExternalCanonical } = require('./src/utils/guide-has-external-canonical');

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://neon.com',
  transform: async (config, routePath) => {
    if (guideHasExternalCanonical(routePath)) {
      return null;
    }

    return {
      loc: routePath,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: config.alternateRefs ?? [],
      trailingSlash: config.trailingSlash,
    };
  },
  exclude: [
    // API routes
    '/api/*',

    // XML routes (RSS feeds and sitemaps)
    '**/*.xml',

    // Blog pages (handled by blog-sitemap.xml)
    '/blog/*',

    // PostgreSQL Tutorial (handled by sitemap-postgres.xml)
    '/postgresql/*',

    // Home page for logged-in users
    '/home',

    // Legacy docs
    '/docs/auth/legacy/*',

    // Inherited from Neon and not yet rewritten. Kept on disk, kept out of
    // search: see the Disallow list below and the noindex headers in
    // next.config.js. Drop a line here once its section is ours.
    '/docs',
    '/docs/*',
    '/guides',
    '/guides/*',
    '/faqs',
    '/faqs/*',
    '/changelog',
    '/changelog/*',
    '/blog',
  ],
  generateRobotsTxt: true,
  additionalPaths: async (config) => [await config.transform(config, '/')],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // Home page for logged-in users
          '/home$',

          // Legacy docs
          '/docs/auth/legacy/',

          // Inherited from Neon and not yet rewritten.
          '/docs/',
          '/postgresql/',
          '/guides/',
          '/faqs/',
          '/blog/',
          '/changelog/',
        ],
      },
    ],
    // blog-sitemap.xml and sitemap-postgres.xml list inherited Neon content, so
    // they are not announced while that content is out of search.
    additionalSitemaps: [],
    transformRobotsTxt: async (_config, robotsTxt) => {
      return robotsTxt.replace(
        '# Host',
        'Content-Signal: ai-train=no, search=yes, ai-input=yes\n\n# Host'
      );
    },
  },
};

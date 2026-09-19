module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://neon.com',
  transform: async (config, routePath) => {
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

    // Home page for logged-in users
    '/home',
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
        ],
      },
    ],
    additionalSitemaps: [],
    transformRobotsTxt: async (_config, robotsTxt) => {
      return robotsTxt.replace(
        '# Host',
        'Content-Signal: ai-train=yes, search=yes, ai-input=yes\n\n# Host'
      );
    },
  },
};

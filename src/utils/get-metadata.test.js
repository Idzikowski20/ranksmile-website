import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import SEO_DATA from 'constants/seo-data';

import getMetadata from './get-metadata';

describe('getMetadata', () => {
  const originalSiteUrl = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
  const originalVercelEnv = process.env.VERCEL_ENV;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = 'https://neon.com';
    delete process.env.VERCEL_ENV;
  });

  afterEach(() => {
    if (originalSiteUrl === undefined) {
      delete process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = originalSiteUrl;
    }

    if (originalVercelEnv === undefined) {
      delete process.env.VERCEL_ENV;
    } else {
      process.env.VERCEL_ENV = originalVercelEnv;
    }
  });

  it('defaults canonical to the Neon page URL', () => {
    const metadata = getMetadata({ pathname: '/docs/introduction' });

    expect(metadata.alternates.canonical).toBe('https://neon.com/docs/introduction');
    expect(metadata.openGraph.url).toBe('https://neon.com/docs/introduction');
  });

  it.each([
    [SEO_DATA.rankTracking, 'https://neon.com/rank-tracking.md'],
    [SEO_DATA.siteAudit, 'https://neon.com/site-audit.md'],
    [SEO_DATA.wordpress, 'https://neon.com/wordpress.md'],
    [SEO_DATA.contentScore, 'https://neon.com/md/content-score.md'],
    [SEO_DATA.aiVisibility, 'https://neon.com/ai-visibility.md'],
  ])('advertises the generated Markdown alternate', (pageSeo, markdownUrl) => {
    const metadata = getMetadata(pageSeo);

    expect(metadata.alternates.types['text/markdown']).toBe(markdownUrl);
  });

  it('uses an absolute external canonical and keeps og:url on Neon', () => {
    const metadata = getMetadata({
      pathname: '/docs/introduction',
      canonical: 'https://sentry.io/cookbook/monitor-neon-functions-sentry/',
    });

    expect(metadata.alternates.canonical).toBe(
      'https://sentry.io/cookbook/monitor-neon-functions-sentry/'
    );
    expect(metadata.openGraph.url).toBe('https://neon.com/docs/introduction');
  });

  it('rejects a relative canonical', () => {
    expect(() => getMetadata({ pathname: '/docs/introduction', canonical: '/elsewhere' })).toThrow(
      'canonical must be an absolute HTTP(S) URL, got "/elsewhere"'
    );
  });

  it('rejects an empty canonical', () => {
    expect(() => getMetadata({ pathname: '/docs/introduction', canonical: '' })).toThrow(
      'canonical must be an absolute HTTP(S) URL, got ""'
    );
  });

  it('rejects a non-HTTP canonical', () => {
    expect(() =>
      getMetadata({
        pathname: '/docs/introduction',
        canonical: 'ftp://example.com/guide',
      })
    ).toThrow('canonical must be an absolute HTTP(S) URL, got "ftp://example.com/guide"');
  });
});

import { describe, expect, it } from 'vitest';

import nextConfig from './next.config';

describe('backend platform Markdown rewrites', () => {
  it('serves public and direct Markdown mirrors with the same noindex headers', async () => {
    const headers = await nextConfig.headers();
    const functionsHeaders = headers.find(({ source }) => source === '/rank-tracking.md').headers;

    expect(functionsHeaders).toContainEqual({ key: 'X-Robots-Tag', value: 'noindex' });
    for (const path of [
      '/md/rank-tracking.md',
      '/md/site-audit.md',
      '/md/wordpress.md',
      '/md/content-score.md',
    ]) {
      expect(headers.find(({ source }) => source === path)?.headers).toEqual(functionsHeaders);
    }
  });

  it('keeps the legacy product paths redirecting to their new pages', async () => {
    const redirects = await nextConfig.redirects();

    // /ai-gateway.md also matches the global .md proxy matcher, so a routing-order
    // regression would answer it with a Markdown 404 instead of this redirect.
    for (const [source, destination] of [
      ['/ai-gateway', '/site-audit'],
      ['/ai-gateway.md', '/site-audit.md'],
    ]) {
      expect(redirects).toContainEqual(
        expect.objectContaining({ source, destination, permanent: true })
      );
    }
  });

  it('preserves the static Claimable Neon protocol at /auth.md', async () => {
    const rewrites = await nextConfig.rewrites();
    const allRewrites = Object.values(rewrites).flat();

    expect(allRewrites.some(({ source }) => source === '/auth.md')).toBe(false);
    expect(rewrites.beforeFiles).toEqual(
      expect.arrayContaining([
        { source: '/rank-tracking.md', destination: '/md/rank-tracking.md' },
        { source: '/site-audit.md', destination: '/md/site-audit.md' },
        { source: '/wordpress.md', destination: '/md/wordpress.md' },
      ])
    );
  });
});

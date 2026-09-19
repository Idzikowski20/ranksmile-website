import fs from 'fs/promises';
import os from 'os';
import path from 'path';

import { afterEach, describe, expect, it } from 'vitest';

import { aiVisibilityPageContent } from '../constants/backend-platform-page-content';
import LINKS from '../constants/links';

import {
  generateBackendPlatformPageMarkdown,
  htmlToMarkdown,
  renderSiteAuditMarkdown,
  renderContentScoreMarkdown,
  renderRankTrackingMarkdown,
  renderWordpressMarkdown,
  renderAiVisibilityMarkdown,
} from './generate-backend-platform-page-markdown';

const tempDirs = [];

afterEach(async () => {
  await Promise.all(tempDirs.splice(0).map((dir) => fs.rm(dir, { recursive: true, force: true })));
});

describe('backend platform page Markdown', () => {
  it('converts the FAQ HTML subset to readable Markdown', () => {
    expect(
      htmlToMarkdown('<p>Use <strong>Lakebase Postgres</strong> with <code>neon deploy</code>.</p>')
    ).toBe('Use **Lakebase Postgres** with `neon deploy`.');

    expect(
      htmlToMarkdown('<p>Options:</p><ul><li><a href="/docs/one">One</a></li><li>Two</li></ul>')
    ).toBe('Options:\n\n- [One](https://ranksmile.pl/docs/one)\n- Two');

    expect(htmlToMarkdown('<p>Use <code>&lt;T&gt;</code> as the type.</p>')).toBe(
      'Use `<T>` as the type.'
    );

    expect(htmlToMarkdown('<p>Use <code>a`b</code> and &lt;div&gt; literally.</p>')).toBe(
      'Use ``a`b`` and \\<div\\> literally.'
    );

    expect(htmlToMarkdown('<ol><li>First</li><li>Second</li></ol>')).toBe('1. First\n2. Second');

    expect(htmlToMarkdown('<ol start="3"><li>Third</li><li>Fourth</li></ol>')).toBe(
      '3. Third\n4. Fourth'
    );

    expect(htmlToMarkdown('<ul><li>Parent<ul><li>Child</li></ul></li></ul>')).toBe(
      '- Parent\n   - Child'
    );

    expect(htmlToMarkdown('<p>line<br># heading<br>- item</p>')).toBe(
      'line\n\\# heading\n\\- item'
    );

    expect(htmlToMarkdown('<p><strong> bold </strong></p>')).toBe('**bold**');

    expect(htmlToMarkdown('<p><a href="https://example.com/a)b c">Link</a></p>')).toBe(
      '[Link](https://example.com/a%29b%20c)'
    );
  });

  it('renders Rank Tracking unique and shared content from the page data', () => {
    const markdown = renderRankTrackingMarkdown(LINKS);

    expect(markdown).toContain('# See where you rank in Google, every day.');
    expect(markdown).toContain('## What a check records');
    expect(markdown).toContain('### Compare back to `90d`');
    expect(markdown).toContain('## Your questions, answered');
    expect(markdown).toContain('## Built for the teams and the agents behind them.');
    expect(markdown).toContain('[Contact us](https://ranksmile.pl/contact-sales)');
    expect(markdown).not.toMatch(/<\/?(?:p|strong|code)>/);
  });

  it('renders Site Audit page content, the crawlers and the checks', () => {
    const markdown = renderSiteAuditMarkdown(LINKS);

    expect(markdown).toContain('# Find the problems keeping your site out of search.');
    expect(markdown).toContain('### Google-Extended');
    expect(markdown).toContain('### Claude-SearchBot');
    expect(markdown).toContain('## What a crawl gives you');
    expect(markdown).toContain('### AI Search Health.');
    expect(markdown).toContain('## Built for the teams and the agents behind them.');
    expect(markdown).toContain('## Measured, not guessed.');
  });

  it('renders Object Storage config, FAQ, and matching shared content', () => {
    const markdown = renderWordpressMarkdown(LINKS);

    expect(markdown).toContain('# Publish straight to your WordPress site.');
    expect(markdown).toContain('[Start your free trial](https://app.ranksmile.pl/auth/sign-up)');
    expect(markdown).toContain('### publish-options.json');
    expect(markdown).toContain('"status": "draft"');
    expect(markdown).toContain('### Updates, not duplicates');
    expect(markdown).toContain('### Activate and connect');
    expect(markdown).toContain('Everything that feeds the draft.');
    expect(markdown).not.toContain('Your LLM branches');
    expect(markdown).toContain('### What happens if I publish the same article twice?');
    expect(markdown).not.toMatch(/<\/?(?:p|strong|code)>/);
  });

  it('renders Content Score content without confusing it with Claimable Neon', () => {
    const markdown = renderContentScoreMarkdown(LINKS);

    expect(markdown).toContain('# Know what your page needs before you publish it.');
    expect(markdown).toContain('[See plans](https://ranksmile.pl/pricing)');
    expect(markdown).toContain('Two scores, not a vibe');
    expect(markdown).toContain('`target_count`');
    expect(markdown).toContain('From competitors to published, in one panel');
    expect(markdown).toContain('### 4. Review and publish');
    expect(markdown).toContain('Everything the score reads from.');
    expect(markdown).toContain('Where do the targets come from?');
    expect(markdown).not.toContain('Claimable Neon for agents');
    expect(markdown).not.toMatch(/<\/?(?:p|strong|code|a)(?:\s|>)/);
  });

  it('renders AI Visibility unique content and its shared platform footer', () => {
    const markdown = renderAiVisibilityMarkdown(LINKS);

    expect(markdown).toContain('# See whether AI assistants mention your business.');
    expect(markdown).toContain('### Track the prompts buyers ask');
    expect(markdown).toContain('## Every answer is kept whole, with its citations attached.');
    expect(markdown).toContain('### scan-result.json');
    expect(markdown).toContain('"fanOutQueries"');
    expect(markdown).toContain('### Sources');
    expect(markdown.indexOf('### Track the prompts buyers ask')).toBeLessThan(
      markdown.indexOf('### scan-result.json')
    );
    expect(markdown.indexOf('### scan-result.json')).toBeLessThan(
      markdown.indexOf('## From one brand to a full client roster')
    );
    expect(markdown).toContain('### See who is cited instead');
    expect(markdown).toContain('### Turn gaps into work');
    expect(markdown).toContain('## From one brand to a full client roster');
    expect(markdown).toContain('## Your questions, answered.');
    expect(markdown).toContain('## Backend services');
    expect(markdown).toContain('## Measured, not guessed.');
    expect(markdown).not.toContain('## Built for the teams and the agents behind them.');
  });

  it('writes all mirrors without deleting other generated Markdown', async () => {
    const rootDir = await fs.mkdtemp(path.join(os.tmpdir(), 'neon-platform-markdown-'));
    tempDirs.push(rootDir);
    const outputDir = path.join(rootDir, 'public/md');
    const sentinelPath = path.join(outputDir, 'existing.md');
    await fs.mkdir(outputDir, { recursive: true });
    await fs.writeFile(sentinelPath, 'keep me');

    const files = await generateBackendPlatformPageMarkdown(rootDir);

    expect(files.map((file) => path.basename(file))).toEqual([
      'rank-tracking.md',
      'site-audit.md',
      'wordpress.md',
      'content-score.md',
      'ai-visibility.md',
    ]);
    expect(await fs.readFile(path.join(outputDir, 'rank-tracking.md'), 'utf8')).toContain(
      '# See where you rank in Google, every day.'
    );
    expect(await fs.readFile(path.join(outputDir, 'site-audit.md'), 'utf8')).toContain(
      '# Find the problems keeping your site out of search.'
    );
    expect(await fs.readFile(path.join(outputDir, 'wordpress.md'), 'utf8')).toContain(
      '# Publish straight to your WordPress site.'
    );
    expect(await fs.readFile(path.join(outputDir, 'content-score.md'), 'utf8')).toContain(
      '# Know what your page needs before you publish it.'
    );
    expect(await fs.readFile(path.join(outputDir, 'ai-visibility.md'), 'utf8')).toContain(
      '# See whether AI assistants mention your business.'
    );
    expect(await fs.readFile(sentinelPath, 'utf8')).toBe('keep me');
  });

  it('keeps the AI Visibility sections in order and mirrors their visible copy', () => {
    const markdown = renderAiVisibilityMarkdown(LINKS);
    const { architecture, autoscaling, dynamicDatabases } = aiVisibilityPageContent;

    expect(markdown).toContain(`## ${architecture.title} ${architecture.highlightedTitle}`);
    expect(markdown).toContain(`${architecture.description} ${architecture.secondaryDescription}`);
    expect(markdown).toContain(autoscaling.title);
    expect(markdown).toContain(autoscaling.description);
    expect(markdown).toContain(autoscaling.caption);

    for (const { title } of [...architecture.features, ...autoscaling.features]) {
      expect(markdown).toContain(`### ${title}`);
    }

    expect(markdown).toContain('14 days between long-tail re-scans, one day for core');
    expect(markdown).toContain('250 prompt and engine pairs in a single run');
    expect(markdown.indexOf(`## ${architecture.title}`)).toBeLessThan(
      markdown.indexOf(`## ${autoscaling.label}`)
    );
    expect(markdown.indexOf(`## ${autoscaling.label}`)).toBeLessThan(
      markdown.indexOf(`## ${dynamicDatabases.title}`)
    );
    expect(markdown.indexOf('### Per scan')).toBeLessThan(markdown.indexOf(autoscaling.caption));
    expect(markdown.indexOf(autoscaling.caption)).toBeLessThan(
      markdown.indexOf(`### ${autoscaling.features[0].title}`)
    );
  });
});

import fs from 'fs/promises';

import { describe, it, expect, vi } from 'vitest';

import {
  processFile,
  buildNavigationMap,
  buildNavigationFooter,
  buildPageHeader,
  addNavigationContext,
  stripNavigationContext,
} from './process-md-for-llms.js';

// Test actual file conversion - the important stuff
describe('MDX to Markdown Conversion', () => {
  // Test a real file from the repo
  describe('Real file conversion', () => {
    it('converts a docs page without leaving raw MDX behind', async () => {
      const inputPath = 'content/docs/ai-visibility/overview.md';
      const pageUrl = 'https://ranksmile.pl/docs/ai-visibility/overview';

      const { content: result } = await processFile(inputPath, pageUrl, process.cwd());

      // Title comes from frontmatter
      expect(result).toContain('# AI visibility');

      // Components are converted, not passed through
      expect(result).toContain('**Reading a flat line:**');
      expect(result).not.toContain('<Callout');
      expect(result).not.toContain('<DefinitionList');
      expect(result).not.toContain('<DocsList');
      expect(result).not.toContain('<NeedHelp');

      // Links are absolute
      expect(result).toContain('https://ranksmile.pl/docs/');
      expect(result).not.toMatch(/\]\(\/docs\//);
    });

    it('converts Steps and Admonition in a docs page', async () => {
      const inputPath = 'content/docs/introduction/first-week.md';
      const pageUrl = 'https://ranksmile.pl/docs/introduction/first-week';

      const { content: result } = await processFile(inputPath, pageUrl, process.cwd());

      expect(result).toContain('**Note: On the trial**');
      expect(result).not.toContain('<Admonition');
      expect(result).not.toContain('<Steps');
    });
  });

  // Test specific component conversions with inline MDX
  describe('Component conversions', () => {
    // Helper to process inline MDX content
    async function processInlineMdx(mdxContent, pageUrl = 'https://ranksmile.pl/test', rootDir) {
      const tempPath = '/tmp/test-mdx-conversion.md';
      const fullContent = `---
title: Test
---

${mdxContent}`;
      await fs.writeFile(tempPath, fullContent);
      return (await processFile(tempPath, pageUrl, rootDir)).content;
    }

    // Was a real-file test against content/pages/use-cases/dev-test.md. That page is
    // retired, and no surviving content uses QuoteBlocksWrapper, so the same
    // conversion is exercised inline rather than dropped.
    it('should unwrap QuoteBlocksWrapper and preserve all quotes', async () => {
      const result = await processInlineMdx(`
<QuoteBlocksWrapper>
  <QuoteBlock quote="First quote." author="Ada Lovelace" role="Engineer" />
  <QuoteBlock quote="Second quote." author="Grace Hopper" role="Rear Admiral" />
</QuoteBlocksWrapper>
`);

      expect(result).not.toContain('<QuoteBlocksWrapper');
      expect(result).not.toContain('</QuoteBlocksWrapper>');
      expect(result).toContain('Ada Lovelace');
      expect(result).toContain('Grace Hopper');
    });

    it('should convert Admonition to bold label', async () => {
      const result = await processInlineMdx(`
<Admonition type="warning">
Be careful with this setting.
</Admonition>
`);
      expect(result).toContain('**Warning:**');
      expect(result).toContain('Be careful with this setting.');
      expect(result).not.toContain('<Admonition');
    });

    it('should inline the StatBlock value into its sentence', async () => {
      const result = await processInlineMdx(`
<StatBlock value="59%">of companies experienced a critical production failure.</StatBlock>
`);
      expect(result).toContain('**59%** of companies experienced a critical production failure.');
      expect(result).not.toContain('<StatBlock');
    });

    it('should keep StatBlock children when the value prop is missing', async () => {
      const result = await processInlineMdx(`
<StatBlock>of companies experienced a critical production failure.</StatBlock>
`);
      expect(result).toContain('of companies experienced a critical production failure.');
      expect(result).not.toContain('<StatBlock');
    });

    it('should drop image render flags from the markdown mirror', async () => {
      const result = await processInlineMdx(`
![A restored branch](/use-cases/large-databases/restore-branch-diagram.svg 'square priority')

![A real caption survives](/use-cases/large-databases/lakebase-architecture.jpg 'Lakebase architecture')
`);
      expect(result).not.toContain('square priority');
      expect(result).toContain('restore-branch-diagram.svg)');
      expect(result).toContain('"Lakebase architecture"');
    });

    it('should convert DetailIconCards to bullet list with descriptions', async () => {
      const result = await processInlineMdx(`
<DetailIconCards>
<a href="/docs/guides/prisma" description="Connect Prisma to Neon">Prisma Guide</a>
<a href="/docs/guides/nextjs" description="Connect Next.js to Neon">Next.js Guide</a>
</DetailIconCards>
`);
      expect(result).toContain(
        '- [Prisma Guide](https://ranksmile.pl/docs/guides/prisma): Connect Prisma to Neon'
      );
      expect(result).toContain(
        '- [Next.js Guide](https://ranksmile.pl/docs/guides/nextjs): Connect Next.js to Neon'
      );
    });

    it('should remove CopyPrompt and NeedHelp', async () => {
      const result = await processInlineMdx(`
Some content here.

<CopyPrompt src="/prompts/test.md" />

More content.

<NeedHelp/>
`);
      expect(result).toContain('Some content here.');
      expect(result).toContain('More content.');
      expect(result).not.toContain('CopyPrompt');
      expect(result).not.toContain('NeedHelp');
    });

    it('should preserve details/summary as HTML', async () => {
      const result = await processInlineMdx(`
<details>
<summary>**Click to expand**</summary>

Hidden content here.

</details>
`);
      expect(result).toContain('<details>');
      expect(result).toContain('<summary>');
      expect(result).toContain('</details>');
      expect(result).toContain('Hidden content here.');
    });

    it('should convert TechCards using title attribute (not children text)', async () => {
      const result = await processInlineMdx(`
<TechCards>
<a href="/docs/guides/node" title="Node.js" description="Connect a Node.js application to Neon" icon="node-js"></a>
<a href="/docs/guides/django" title="Django" description="Connect a Django application to Neon" icon="django"></a>
</TechCards>
`);
      expect(result).toContain(
        '- [Node.js](https://ranksmile.pl/docs/guides/node): Connect a Node.js application to Neon'
      );
      expect(result).toContain(
        '- [Django](https://ranksmile.pl/docs/guides/django): Connect a Django application to Neon'
      );
      expect(result).not.toContain('<TechCards');
    });

    it('should extract InfoBlock children', async () => {
      const result = await processInlineMdx(`
<InfoBlock>

Some important information.

</InfoBlock>
`);
      expect(result).toContain('Some important information.');
      expect(result).not.toContain('<InfoBlock');
    });

    it('should convert Tag label independently from its theme', async () => {
      const result = await processInlineMdx(`
<Tag label="Public beta" theme="blue" />
`);

      expect(result).toContain('`Public beta`');
      expect(result).not.toContain('<Tag');
    });

    it('should convert DocsList to title and bullet list', async () => {
      const result = await processInlineMdx(`
<DocsList title="What you will learn:">
<a href="/docs/guides/prisma">Prisma integration</a>
</DocsList>
`);
      expect(result).toContain('**What you will learn:**');
      expect(result).toContain('[Prisma integration](https://ranksmile.pl/docs/guides/prisma)');
    });

    it('should convert CheckList and CheckItem', async () => {
      const result = await processInlineMdx(`
<CheckList title="Deployment checklist">

<CheckItem title="Configure SSL" href="#ssl">
Enable SSL for secure connections.
</CheckItem>

</CheckList>
`);
      expect(result).toContain('## Deployment checklist');
      expect(result).toContain('[Configure SSL]');
      expect(result).toContain('Enable SSL for secure connections.');
    });

    it('should remove CTA, Video, UserButton, RequestForm, Suspense', async () => {
      const result = await processInlineMdx(`
Content before.

<CTA title="Get started" href="/signup">Sign up now</CTA>

<Video />

<UserButton />

<RequestForm />

<Suspense>Loading...</Suspense>

Content after.
`);
      expect(result).toContain('Content before.');
      expect(result).toContain('Content after.');
      expect(result).not.toContain('<CTA');
      expect(result).not.toContain('<Video');
      expect(result).not.toContain('<UserButton');
      expect(result).not.toContain('<RequestForm');
      expect(result).not.toContain('<Suspense');
    });

    it('should convert TwoColumnLayout.Item with title and method', async () => {
      const result = await processInlineMdx(`
<TwoColumnLayout>

<TwoColumnLayout.Item title="Installation" method="npm install pkg">

Install the package using npm.

</TwoColumnLayout.Item>

</TwoColumnLayout>
`);
      expect(result).toContain('## Installation');
      expect(result).toContain('Method: `npm install pkg`');
      expect(result).toContain('Install the package using npm.');
    });
  });

  // Test URL conversion
  describe('URL conversion', () => {
    async function processInlineMdx(mdxContent, pageUrl = 'https://ranksmile.pl/docs/test') {
      const tempPath = '/tmp/test-mdx-conversion.md';
      await fs.writeFile(tempPath, `---\ntitle: Test\n---\n${mdxContent}`);
      return (await processFile(tempPath, pageUrl)).content;
    }

    it('should convert relative URLs to absolute', async () => {
      const result = await processInlineMdx(`
See the [Prisma guide](/docs/guides/prisma) for more info.
`);
      expect(result).toContain('[Prisma guide](https://ranksmile.pl/docs/guides/prisma)');
    });

    it('should convert anchor links to full URL with anchor', async () => {
      const result = await processInlineMdx(
        `
See [connection issues](#connection-issues) below.
`,
        'https://ranksmile.pl/docs/guides/django'
      );
      expect(result).toContain(
        '[connection issues](https://ranksmile.pl/docs/guides/django#connection-issues)'
      );
    });

    it('should preserve external URLs', async () => {
      const result = await processInlineMdx(`
See the [Django docs](https://docs.djangoproject.com/en/4.1/).
`);
      expect(result).toContain('[Django docs](https://docs.djangoproject.com/en/4.1/)');
    });

    it('should convert relative URLs (no leading slash) to absolute', async () => {
      const result = await processInlineMdx(
        `
See the [What is PostgreSQL](postgresql-getting-started/what-is-postgresql) page.
`,
        'https://ranksmile.pl/postgresql/postgresql-getting-started'
      );
      expect(result).toContain(
        '[What is PostgreSQL](https://ranksmile.pl/postgresql/postgresql-getting-started/what-is-postgresql)'
      );
    });
  });

  // Test recently added components
  describe('Additional component conversions', () => {
    async function processInlineMdx(mdxContent, pageUrl = 'https://ranksmile.pl/test') {
      const tempPath = '/tmp/test-mdx-conversion.md';
      const fullContent = `---
title: Test
---

${mdxContent}`;
      await fs.writeFile(tempPath, fullContent);
      return (await processFile(tempPath, pageUrl)).content;
    }

    it('should convert MegaLink to descriptive link', async () => {
      const result = await processInlineMdx(`
<MegaLink tag="Fast databases" title="Provision instantly and scale automatically." url="https://ranksmile.pl/features" />
`);
      expect(result).toContain('**Fast databases**');
      expect(result).toContain('Provision instantly and scale automatically.');
      expect(result).toContain('[Learn more](https://ranksmile.pl/features)');
      expect(result).not.toContain('<MegaLink');
    });

    it('should convert QuoteBlock with string slug to blockquote with title-cased name', async () => {
      const result = await processInlineMdx(`
<QuoteBlock quote="Neon is amazing for serverless." author="jane-doe" role="CTO at Startup" />
`);
      expect(result).toContain('> Neon is amazing for serverless.');
      expect(result).toContain('> — Jane Doe, CTO at Startup');
      expect(result).not.toContain('jane-doe');
      expect(result).not.toContain('<QuoteBlock');
    });

    it('should resolve QuoteBlock slug from quote-block.jsx map', async () => {
      const result = await processInlineMdx(
        `
<QuoteBlock quote="Fast provisioning." author="lincoln-bergeson" role="Infrastructure Engineer at Replit" />
`,
        'https://ranksmile.pl/test',
        process.cwd()
      );
      expect(result).toContain('> — Lincoln Bergeson, Infrastructure Engineer at Replit');
      expect(result).not.toContain('lincoln-bergeson');
    });

    it('should convert QuoteBlock with object author', async () => {
      const result = await processInlineMdx(`
<QuoteBlock quote="Branching is great." author={{ name: 'Jane Doe', company: 'Acme Corp' }} />
`);
      expect(result).toContain('> Branching is great.');
      expect(result).toContain('> — Jane Doe, Acme Corp');
      expect(result).not.toContain('name:');
      expect(result).not.toContain('<QuoteBlock');
    });

    it('should include QuoteBlock link prop as case study link', async () => {
      const result = await processInlineMdx(`
<QuoteBlock quote="Scales well." author="some-person" role="Engineer" link="/blog/case-study" />
`);
      expect(result).toContain('[Read case study](https://ranksmile.pl/blog/case-study)');
    });

    it('should handle QuoteBlock with an object author and a link', async () => {
      const result = await processInlineMdx(`
<QuoteBlock
  quote="It held up under load."
  author={{ name: 'Ada Lovelace', role: 'Principal Engineer at Analytical' }}
  link={{ text: 'Read case study', url: 'https://ranksmile.pl/blog/analytical' }}
/>
`);

      expect(result).toContain('Ada Lovelace');
      expect(result).not.toContain("name: 'Ada Lovelace'");
      expect(result).toContain('Read case study');
    });

    it('should convert Testimonial to blockquote', async () => {
      const result = await processInlineMdx(`
<Testimonial
  text="Great database service!"
  author={{
    name: 'John Smith',
    company: 'Tech Corp',
  }}
/>
`);
      expect(result).toContain('> Great database service!');
      expect(result).toContain('> — John Smith, Tech Corp');
      expect(result).not.toContain('<Testimonial');
    });

    it('should extract FeatureList children', async () => {
      const result = await processInlineMdx(`
<FeatureList icons={['database', 'scale']}>

### Feature One

Description of feature one.

### Feature Two

Description of feature two.

</FeatureList>
`);
      expect(result).toContain('### Feature One');
      expect(result).toContain('Description of feature one.');
      expect(result).toContain('### Feature Two');
      expect(result).not.toContain('<FeatureList');
    });

    it('should convert YoutubeIframe to YouTube link', async () => {
      const result = await processInlineMdx(`
<YoutubeIframe embedId="dQw4w9WgXcQ" />
`);
      expect(result).toContain('[Watch on YouTube](https://youtube.com/watch?v=dQw4w9WgXcQ)');
      expect(result).not.toContain('<YoutubeIframe');
    });

    it('should convert CommunityBanner to link', async () => {
      const result = await processInlineMdx(`
<CommunityBanner buttonText="Join Discord" buttonUrl="https://discord.gg/neon">
Join our community!
</CommunityBanner>
`);
      expect(result).toContain('Join our community!');
      expect(result).toContain('[Join Discord](https://discord.gg/neon)');
      expect(result).not.toContain('<CommunityBanner');
    });

    it('should convert CompactCards prompt links to list of links', async () => {
      const result = await processInlineMdx(`
<CompactCards cols={4}>
<a title="Next.js" promptSrc="/prompts/nextjs.md" />
<a title="Django" promptSrc="/prompts/django.md" />
</CompactCards>
`);
      expect(result).toContain('[Next.js prompt](https://ranksmile.pl/prompts/nextjs.md)');
      expect(result).toContain('[Django prompt](https://ranksmile.pl/prompts/django.md)');
      expect(result).not.toContain('<CompactCards');
    });

    it('should convert CompactCards to list of links with descriptions', async () => {
      const result = await processInlineMdx(`
<CompactCards>
<a title="Cursor" description="Connect Neon to Cursor." href="/docs/ai/ai-cursor-plugin" icon="cli-cursor" />
<a title="Claude Code" description="Connect Neon to Claude Code." href="/docs/ai/ai-claude-code-plugin" icon="cli" />
</CompactCards>
`);
      expect(result).toContain(
        '- [Cursor](https://ranksmile.pl/docs/ai/ai-cursor-plugin): Connect Neon to Cursor.'
      );
      expect(result).toContain(
        '- [Claude Code](https://ranksmile.pl/docs/ai/ai-claude-code-plugin): Connect Neon to Claude Code.'
      );
      expect(result).not.toContain('<CompactCards');
    });

    it('should convert Tabs with labels', async () => {
      const result = await processInlineMdx(`
<Tabs labels={["JavaScript", "Python"]}>
<TabItem>

\`\`\`js
console.log('hello');
\`\`\`

</TabItem>
<TabItem>

\`\`\`python
print('hello')
\`\`\`

</TabItem>
</Tabs>
`);
      expect(result).toContain('**JavaScript**');
      expect(result).toContain('**Python**');
      expect(result).toContain("console.log('hello')");
      expect(result).toContain("print('hello')");
      expect(result).not.toContain('<Tabs');
      expect(result).not.toContain('<TabItem');
    });

    it('should remove ignored components', async () => {
      const result = await processInlineMdx(`
Content before.

<LogosSection logos={['company1', 'company2']} />

<ComputeCalculator />

<UseCaseContext />

<SqlToRestConverter />

Content after.
`);
      expect(result).toContain('Content before.');
      expect(result).toContain('Content after.');
      expect(result).not.toContain('<LogosSection');
      expect(result).not.toContain('<ComputeCalculator');
      expect(result).not.toContain('<UseCaseContext');
      expect(result).not.toContain('<SqlToRestConverter');
    });

    it('should handle unknown components with attributes', async () => {
      const spy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const result = await processInlineMdx(`
<UnknownWidget foo="bar" baz="qux" />
`);
      spy.mockRestore();
      // Should show component name and attributes
      expect(result).toContain('[UnknownWidget]');
      expect(result).toContain('foo: bar');
      expect(result).toContain('baz: qux');
    });

    it('should strip Shiki code annotations', async () => {
      const result = await processInlineMdx(`
\`\`\`javascript
import { foo } from 'bar'; // [!code ++]
const x = 1; // [!code --]
const y = 2; // [!code highlight]
\`\`\`
`);
      expect(result).toContain("import { foo } from 'bar';");
      expect(result).not.toContain('[!code');
    });

    it('should preserve br tags for table line breaks', async () => {
      const result = await processInlineMdx(`
| Header |
|--------|
| Line1<br/>Line2 |
`);
      expect(result).toContain('<br/>');
    });

    it('should use --- for horizontal rules', async () => {
      const result = await processInlineMdx(`
Above the line.

---

Below the line.
`);
      expect(result).toContain('---');
      expect(result).not.toContain('***');
    });
  });

  // Test that we don't over-escape
  describe('No over-escaping', () => {
    async function processInlineMdx(mdxContent) {
      const tempPath = '/tmp/test-mdx-conversion.md';
      await fs.writeFile(tempPath, `---\ntitle: Test\n---\n${mdxContent}`);
      return (await processFile(tempPath)).content;
    }

    it('should not escape backticks in text', async () => {
      const result = await processInlineMdx(`
Use the \`CONN_MAX_AGE\` setting.
`);
      expect(result).toContain('`CONN_MAX_AGE`');
      expect(result).not.toContain('\\`');
    });

    it('should not escape underscores in link text', async () => {
      const result = await processInlineMdx(`
See [CONN_MAX_AGE](https://example.com).
`);
      expect(result).toContain('[CONN_MAX_AGE]');
      expect(result).not.toContain('\\_');
    });
  });

  // Test index pointer
  describe('Index pointer', () => {
    it('should not include index pointer in processFile output (moved to page header)', async () => {
      const tempPath = '/tmp/test-mdx-conversion.md';
      await fs.writeFile(tempPath, `---\ntitle: Test Page\n---\nSome content here.`);
      const { content: result } = await processFile(tempPath);

      // Index pointer is no longer in processFile -- it's added by addNavigationContext
      expect(result).not.toContain('llms.txt');
      expect(result).toContain('# Test Page');
      expect(result).toContain('Some content here.');
    });
  });

  // Test navigation map and footer
  describe('Navigation footer', () => {
    it('should build navigation map from real navigation.yaml', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      // Should have entries
      expect(navMap.size).toBeGreaterThan(0);

      // Check a known page from docs navigation
      const overviewEntry = navMap.get('introduction/overview');
      expect(overviewEntry).toBeDefined();
      expect(overviewEntry.sectionName).toBeTruthy();
      expect(overviewEntry.siblings.length).toBeGreaterThan(0);
      expect(overviewEntry.urlPrefix).toBe('docs');
    });

    // The postgresql tutorials are gone, so nothing in the map carries that
    // prefix any more. Asserted so the prefix reappearing fails here.
    it('should not include postgresql pages in navigation map', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      expect(navMap.get('tutorial/select')).toBeUndefined();
      expect([...navMap.values()].some((entry) => entry.urlPrefix === 'postgresql')).toBe(false);
    });

    it('should generate footer with sibling links', () => {
      const navMap = new Map();
      navMap.set('get-started/connect-neon', {
        sectionName: 'Start with Neon',
        urlPrefix: 'docs',
        siblings: [
          { title: '1 - Basics', slug: 'get-started/signing-up' },
          { title: '3 - Branching', slug: 'get-started/workflow-primer' },
        ],
      });

      const footer = buildNavigationFooter('get-started/connect-neon', navMap);

      expect(footer).toContain('## Related docs (Start with Neon)');
      expect(footer).toContain('- [1 - Basics](https://ranksmile.pl/docs/get-started/signing-up)');
      expect(footer).toContain(
        '- [3 - Branching](https://ranksmile.pl/docs/get-started/workflow-primer)'
      );
      expect(footer).toContain('---');
    });

    it('should omit current page from footer', () => {
      const navMap = new Map();
      navMap.set('get-started/connect-neon', {
        sectionName: 'Start with Neon',
        urlPrefix: 'docs',
        siblings: [{ title: '1 - Basics', slug: 'get-started/signing-up' }],
      });

      const footer = buildNavigationFooter('get-started/connect-neon', navMap);

      // Should NOT contain the current page
      expect(footer).not.toContain('connect-neon)');
    });

    it('should return empty string for pages not in map', () => {
      const navMap = new Map();
      const footer = buildNavigationFooter('nonexistent/page', navMap);
      expect(footer).toBe('');
    });

    it('should return empty string for pages with no siblings', () => {
      const navMap = new Map();
      navMap.set('solo/page', {
        sectionName: 'Solo Section',
        urlPrefix: 'docs',
        siblings: [],
      });

      const footer = buildNavigationFooter('solo/page', navMap);
      expect(footer).toBe('');
    });

    it('should handle nested sub-groups correctly', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      // "Read-only access" is in a nested sub-group "Use cases" under "Read replicas"
      const readOnlyEntry = navMap.get('guides/read-only-access-read-replicas');
      if (readOnlyEntry) {
        // Its siblings should be the other "Use cases" items, not all of "Read replicas"
        const siblingsSlugs = readOnlyEntry.siblings.map((s) => s.slug);
        expect(siblingsSlugs).toContain('guides/read-replica-adhoc-queries');
        expect(siblingsSlugs).toContain('guides/read-replica-data-analysis');
        // "Overview" is at the parent level, not a sibling
        expect(siblingsSlugs).not.toContain('introduction/read-replicas');
      }
    });

    it('should store breadcrumbs in navigation map entries', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      const overviewEntry = navMap.get('introduction/overview');
      expect(overviewEntry).toBeDefined();
      expect(overviewEntry.breadcrumbs).toBeDefined();
      expect(Array.isArray(overviewEntry.breadcrumbs)).toBe(true);
      expect(overviewEntry.breadcrumbs.length).toBeGreaterThan(0);
    });

    it('should include section nodes in breadcrumbs for nested pages', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      // ai-visibility/sources is under the AI visibility section
      const entry = navMap.get('ai-visibility/sources');
      expect(entry).toBeDefined();
      expect(entry.breadcrumbs).toContain('AI visibility');
    });
  });

  describe('Navigation context stripping', () => {
    it('should strip the feedback footer when a page has no related docs footer', () => {
      const content = '# Test page\n\nBody text.';
      const withContext = addNavigationContext(content, 'docs/unknown-page.md', new Map());

      // Nothing writes a feedback footer any more, so the round trip only has
      // the header to strip. The stripper still removes footers from mirrors
      // generated before the endpoint was retired.
      const withLegacyFooter = `${withContext}
---

Note for AI assistants: report issues.`;
      const stripped = stripNavigationContext(withLegacyFooter);

      expect(stripped.trim()).toBe(content);
      expect(stripped).not.toContain('Note for AI assistants');
    });

    it('should strip the related docs footer', () => {
      const content = '# Connect to Neon\n\nBody text.';
      const navMap = new Map();
      navMap.set('get-started/connect-neon', {
        sectionName: 'Start with Neon',
        urlPrefix: 'docs',
        siblings: [{ title: 'Sign up', slug: 'get-started/signing-up' }],
      });

      const withContext = addNavigationContext(content, 'docs/get-started/connect-neon.md', navMap);

      expect(withContext).toContain('## Related docs (Start with Neon)');

      const stripped = stripNavigationContext(withContext);

      expect(stripped.trim()).toBe(content);
      expect(stripped).not.toContain('## Related docs');
      expect(stripped).not.toContain('Note for AI assistants');
    });
  });

  describe('Page header', () => {
    it('should include location and index for pages in nav map', () => {
      const navMap = new Map();
      navMap.set('auth/guides/password-reset', {
        sectionName: 'Guides',
        urlPrefix: 'docs',
        siblings: [],
        breadcrumbs: ['Auth', 'Guides'],
        pageTitle: 'Password reset',
      });

      const header = buildPageHeader(
        'auth/guides/password-reset',
        navMap,
        'docs/auth/guides/password-reset.md'
      );
      expect(header).toBe(
        '> This page location: Auth > Guides > Password reset\n' +
          '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should include index line for pages not in map', () => {
      const navMap = new Map();
      const header = buildPageHeader('nonexistent/page', navMap);
      expect(header).toBe(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should include index line for pages with empty breadcrumbs', () => {
      const navMap = new Map();
      navMap.set('top-level/page', {
        sectionName: 'Section',
        urlPrefix: 'docs',
        siblings: [],
        breadcrumbs: [],
      });

      const header = buildPageHeader('top-level/page', navMap);
      expect(header).toBe(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should include index line when navMap is null', () => {
      const header = buildPageHeader('any/page', null);
      expect(header).toBe(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should include index line when slug is null', () => {
      const navMap = new Map();
      const header = buildPageHeader(null, navMap);
      expect(header).toBe(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should not include feedback in header (feedback is added at bottom by addNavigationContext)', () => {
      const navMap = new Map();
      const header = buildPageHeader(null, navMap, 'changelog/2026-01-01.md');
      expect(header).toBe(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n\n'
      );
    });

    it('should deduplicate consecutive identical ancestors', () => {
      const navMap = new Map();
      navMap.set('test/page', {
        sectionName: 'Sub',
        urlPrefix: 'docs',
        siblings: [],
        breadcrumbs: ['Parent', 'Parent', 'Sub'],
        pageTitle: 'My Page',
      });

      const header = buildPageHeader('test/page', navMap);
      expect(header).toContain('> This page location: Parent > Sub > My Page');
      expect(header).toContain('> Full Ranksmile documentation index:');
    });

    it('should not duplicate trailing pageTitle when it matches last breadcrumb', () => {
      const navMap = new Map();
      navMap.set('connect/connect-intro', {
        sectionName: 'Connect to Neon',
        urlPrefix: 'docs',
        siblings: [],
        breadcrumbs: ['Connect to Neon'],
        pageTitle: 'Connect to Neon',
      });

      const header = buildPageHeader('connect/connect-intro', navMap);
      // Should be "Connect to Neon" NOT "Connect to Neon > Connect to Neon"
      expect(header).toContain('> This page location: Connect to Neon\n');
      expect(header).not.toContain('Connect to Neon > Connect to Neon');
    });

    it('should generate correct header for real navigation data', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      const header = buildPageHeader('ai-visibility/sources', navMap);
      expect(header).toContain('> This page location: AI visibility > Sources\n');
      expect(header).toContain(
        '> Full Ranksmile documentation index: https://ranksmile.pl/docs/llms.txt\n'
      );
      expect(header).not.toContain('Note for AI assistants');
    });

    it('should not produce redundant breadcrumbs for real nav entries', () => {
      const rootDir = process.cwd();
      const navMap = buildNavigationMap(rootDir);

      // ai-visibility/overview has "Overview" as its nav title inside the
      // "AI visibility" section, so the two must not stack up.
      const overviewHeader = buildPageHeader('ai-visibility/overview', navMap);
      expect(overviewHeader).not.toContain('Overview > Overview');
      expect(overviewHeader).toContain('> This page location:');
    });
  });

  describe('Component conversion test page (snapshot)', () => {
    // This test renders src/scripts/fixtures/mdx-conversion-test.md through the
    // LLM processor and snapshots the output section by section.
    //
    // If you added, removed, or changed a component and this test fails:
    //   1. Check the diff — the failing snapshot name tells you which section changed.
    //   2. If the change is intentional, update the fixture and run:
    //        npx vitest run src/scripts/process-md-for-llms.test.js -u
    //   3. Commit the updated snapshot file alongside your change.
    it('should convert every component without raw MDX leaks', async () => {
      const fixturePath = 'src/scripts/fixtures/mdx-conversion-test.md';
      const pageUrl = 'https://ranksmile.pl/docs/test/mdx-conversion-test';
      const { content: result } = await processFile(fixturePath, pageUrl, process.cwd());

      // No raw MDX component tags should survive conversion
      const componentNames = [
        'Admonition',
        'CodeTabs',
        'Tabs',
        'TabItem',
        'Steps',
        'DetailIconCards',
        'TechCards',
        'DocsList',
        'InfoBlock',
        'DefinitionList',
        'CheckList',
        'CheckItem',
        'CTA',
        'TwoColumnLayout',
        'LinkPreview',
        'YoutubeIframe',
        'CommunityBanner',
        'CompactCards',
        'MegaLink',
        'QuoteBlock',
        'Testimonial',
        'FeatureList',
        'ProgramForm',
        'FeatureBeta',
        'FeatureBetaProps',
        'EarlyAccessProps',
        'AgentSkillsTip',
        'MCPTools',
        'LinkAPIKey',
        'LRNotice',
        'PrivatePreview',
        'PrivatePreviewEnquire',
        'PublicPreview',
        'LRBeta',
        'MigrationAssistant',
        'NextSteps',
        'NewPricing',
        'AzureRegionsDeprecation',
        'CopyPrompt',
        'NeedHelp',
        'Comment',
        'Video',
        'UserButton',
        'RequestForm',
        'Suspense',
        'SqlToRestConverter',
        'LogosSection',
        'ComputeCalculator',
        'UseCaseContext',
      ];

      for (const name of componentNames) {
        expect(result).not.toContain(`<${name}`);
      }

      // Split by top-level sections (## headings) so each component gets its own
      // named snapshot — changes show as a scoped diff instead of a full-file diff.
      const sections = result.split(/\n(?=## )/);
      for (const section of sections) {
        const heading = section.match(/^## (.+)/)?.[1]?.trim() ?? 'preamble';
        expect(section).toMatchSnapshot(heading);
      }
    });
  });
});

// CLI reference components expand to generated markdown from the neonctl
// schema via the same renderers the web components use.

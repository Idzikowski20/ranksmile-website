/**
 * Generate Markdown mirrors for the backend platform marketing pages.
 *
 * Both the React pages and this generator read from the same content module.
 * That keeps negotiated Markdown responses in sync with the visible pages.
 */

const fs = require('fs/promises');
const path = require('path');

const { htmlToDOM } = require('html-react-parser');

const {
  rankTrackingPageContent,
  siteAuditPageContent,
  aiVisibilityPageContent,
  sharedBackendPlatformContent,
} = require('../constants/backend-platform-page-content');
const { contentScorePageContent } = require('../constants/content-score-page-content');
const { wordpressPageContent } = require('../constants/wordpress-page-content');

const BASE_URL = 'https://ranksmile.pl';

const absoluteUrl = (url) => (url.startsWith('/') ? `${BASE_URL}${url}` : url);

const renderActionLinks = (hero, links) =>
  [hero.primaryAction, hero.secondaryAction]
    .map(({ label, linkKey }) => `- [${label}](${absoluteUrl(links[linkKey])})`)
    .join('\n');

const escapeMarkdownText = (value) =>
  String(value)
    .replace(/([\\`*_[\]<>])/g, '\\$1')
    .replace(/(^|\n)([ \t]{0,3})([#>+-]|\d+[.)])(?=\s)/g, '$1$2\\$3');

const escapeMarkdownUrl = (value) =>
  String(value).replace(/[\s\\()<>]/gu, (character) => {
    if (character === '(') return '%28';
    if (character === ')') return '%29';
    return encodeURIComponent(character);
  });

const wrapInline = (value, delimiter) => {
  const leadingWhitespace = value.match(/^\s*/)?.[0] || '';
  const trailingWhitespace = value.match(/\s*$/)?.[0] || '';
  const content = value.slice(leadingWhitespace.length, value.length - trailingWhitespace.length);

  return content
    ? `${leadingWhitespace}${delimiter}${content}${delimiter}${trailingWhitespace}`
    : value;
};

const renderInlineCode = (value) => {
  const text = String(value).replace(/\r?\n|\r/g, ' ');
  const longestBacktickRun = Math.max(0, ...(text.match(/`+/g) || []).map((run) => run.length));
  const delimiter = '`'.repeat(longestBacktickRun + 1);
  const padding = text.startsWith('`') || text.endsWith('`') ? ' ' : '';

  return `${delimiter}${padding}${text}${padding}${delimiter}`;
};

const renderHtmlNodes = (nodes) =>
  nodes
    .map((node) => {
      if (node.type === 'text') return escapeMarkdownText(node.data);
      if (node.type !== 'tag') return '';

      const children = () => renderHtmlNodes(node.children || []);

      switch (node.name) {
        case 'p':
          return `${children().trim()}\n\n`;
        case 'strong':
        case 'b':
          return wrapInline(children(), '**');
        case 'em':
        case 'i':
          return wrapInline(children(), '_');
        case 'code': {
          const text = (node.children || [])
            .filter((child) => child.type === 'text')
            .map((child) => child.data)
            .join('');
          return renderInlineCode(text);
        }
        case 'a':
          return `[${children()}](${escapeMarkdownUrl(absoluteUrl(node.attribs?.href || ''))})`;
        case 'br':
          return '\n';
        case 'ul':
        case 'ol': {
          const ordered = node.name === 'ol';
          const parsedStart = Number.parseInt(node.attribs?.start, 10);
          const start = ordered && Number.isInteger(parsedStart) ? parsedStart : 1;
          const items = (node.children || []).filter(
            (child) => child.type === 'tag' && child.name === 'li'
          );
          return `\n${items
            .map((item, index) => {
              const marker = ordered ? `${start + index}.` : '-';
              const content = renderHtmlNodes(item.children || [])
                .trim()
                .replace(/\n/g, '\n   ');
              return `${marker} ${content}`;
            })
            .join('\n')}\n\n`;
        }
        case 'li':
          return children();
        default:
          return children();
      }
    })
    .join('');

const htmlToMarkdown = (html) =>
  renderHtmlNodes(htmlToDOM(html))
    .replace(/\n{3,}/g, '\n\n')
    .trim();

const renderFaq = (faqItems, title = sharedBackendPlatformContent.faqTitle) =>
  [`## ${title}`]
    .concat(faqItems.flatMap(({ question, answer }) => [`### ${question}`, htmlToMarkdown(answer)]))
    .join('\n\n');

const renderBackendServices = ({ title, highlightedTitle, itemsByVideo }) =>
  [
    '## Backend services',
    `${title} ${highlightedTitle}`,
    ...Object.values(itemsByVideo).flatMap(({ title: itemTitle, description }) => [
      `### ${itemTitle}`,
      description,
    ]),
  ].join('\n\n');

const renderBuiltForAgents = ({ title, description, items }) =>
  [
    `## ${title}`,
    description,
    ...items.flatMap(({ title: itemTitle, description: itemDescription }) => [
      `### ${itemTitle}`,
      itemDescription,
    ]),
  ].join('\n\n');

const renderBackedBy = ({ label, title, highlightedTitle, trustedByLabel, metrics, quotes }) =>
  [
    `**${label}**`,
    `## ${title}`,
    highlightedTitle,
    ...metrics.map(({ value, description }) => `- **${value}** ${description}`),
    `### ${trustedByLabel}`,
    ...quotes.map(({ text, author, post }) => `#### ${author}\n\n> ${text.join('')}\n> — ${post}`),
  ].join('\n\n');

const renderSharedSections = (links, backendServicesTitle) => {
  const { backendServices, builtForAgents, backedBy, cta } = sharedBackendPlatformContent;

  return [
    renderBackendServices({
      ...backendServices,
      title: backendServicesTitle ?? backendServices.title,
    }),
    renderBuiltForAgents(builtForAgents),
    renderBackedBy(backedBy),
    [
      `**${cta.label}**`,
      `## ${cta.title}`,
      cta.description,
      `[${cta.buttonText}](${absoluteUrl(links[cta.linkKey])})`,
    ].join('\n\n'),
  ].join('\n\n');
};

const renderCta = (cta, links) =>
  [
    `**${cta.label}**`,
    `## ${cta.title}`,
    cta.description,
    `[${cta.buttonText}](${absoluteUrl(links[cta.linkKey])})`,
  ].join('\n\n');

const renderPlatformFooter = (links) => {
  const { backedBy, cta } = sharedBackendPlatformContent;

  return [renderBackedBy(backedBy), renderCta(cta, links)].join('\n\n');
};
const renderPageHeader = ({ pageLabel, hero }) =>
  [
    `> This page location: ${pageLabel}`,
    `> Full Ranksmile documentation index: ${BASE_URL}/docs/llms.txt`,
    '',
    `# ${hero.title}`,
    '',
    hero.label,
    '',
    `**Diagram:** ${hero.illustrationDescription}`,
  ].join('\n');

const renderRankTrackingMarkdown = (links) => {
  const { hero, backendCompute, branching, faqItems } = rankTrackingPageContent;
  const { connectedServices, longRunning } = backendCompute;
  const { backendServices, builtForAgents } = sharedBackendPlatformContent;

  const sections = [
    renderPageHeader(rankTrackingPageContent),
    '## Get started',
    renderActionLinks(hero, links),
    `## ${backendCompute.label}`,
    `${backendCompute.title} ${backendCompute.highlightedTitle}`,
    `### ${connectedServices.title}`,
    `${connectedServices.descriptionBeforeCode} \`${connectedServices.code}\` ${connectedServices.descriptionAfterCode}`,
    `### ${longRunning.title}`,
    longRunning.description,
    `### ${backendCompute.workloadsLabel}`,
    backendCompute.workloads.map(({ label }) => `- ${label}`).join('\n'),
    `## ${branching.title}`,
    branching.description,
    ...branching.items.flatMap((item) => {
      const title = item.titleCode ? `${item.title} \`${item.titleCode}\`` : item.title;
      const description = item.descriptionCode
        ? `${item.descriptionBeforeCode} \`${item.descriptionCode}\`${item.descriptionAfterCode}`
        : item.description;
      return [`### ${title}`, description];
    }),
    renderFaq(faqItems),
    renderBackendServices({ ...backendServices, ...rankTrackingPageContent.backendServices }),
    renderBuiltForAgents(builtForAgents),
    renderPlatformFooter(links),
  ];

  return `${sections.join('\n\n')}\n`;
};

const renderSiteAuditMarkdown = (links) => {
  const { hero, crawlers, checks, faqItems } = siteAuditPageContent;
  const { backendServices, builtForAgents } = sharedBackendPlatformContent;

  const sections = [
    renderPageHeader(siteAuditPageContent),
    '## Get started',
    renderActionLinks(hero, links),
    `## ${crawlers.title} ${crawlers.highlightedTitle}`,
    crawlers.description,
    ...crawlers.items.flatMap(({ name, description }) => [`### ${name}`, description]),
    `## ${checks.label}`,
    checks.title,
    checks.description,
    ...checks.items.flatMap(({ title, description }) => [`### ${title}`, description]),
    renderFaq(faqItems),
    renderBackendServices(backendServices),
    renderBuiltForAgents(builtForAgents),
    renderPlatformFooter(links),
  ];

  return `${sections.join('\n\n')}\n`;
};

const renderWordpressMarkdown = (links) => {
  const { hero, storageBenefits, isolatedEnvironments, configuration, faqItems } =
    wordpressPageContent;

  const sections = [
    renderPageHeader(wordpressPageContent),
    '## Get started',
    renderActionLinks(hero, links),
    `## ${storageBenefits.title}`,
    storageBenefits.highlightedTitle,
    ...storageBenefits.items.flatMap(({ label, title, description }) => [
      `### ${label}: ${title}`,
      description,
    ]),
    `## ${isolatedEnvironments.title}`,
    isolatedEnvironments.highlightedTitle,
    ...isolatedEnvironments.items.flatMap(({ title, description }) => [
      `### ${title}`,
      description,
    ]),
    `## ${configuration.title}`,
    `### ${configuration.filename}`,
    `\`\`\`typescript\n${configuration.code}\n\`\`\``,
    ...configuration.items.flatMap(({ title, description }) => [
      `### ${title}`,
      htmlToMarkdown(description),
    ]),
    renderFaq(faqItems),
    renderSharedSections(links, wordpressPageContent.backendServicesTitle),
  ];

  return `${sections.join('\n\n')}\n`;
};

const renderContentScoreMarkdown = (links) => {
  const { hero, benefits, identity, branching, setupSteps, faqItems } = contentScorePageContent;
  const { inspectAuth, identityData } = identity;

  const sections = [
    renderPageHeader(contentScorePageContent),
    '## Get started',
    renderActionLinks(hero, links),
    `## ${benefits.title}`,
    benefits.highlightedTitle,
    ...benefits.items.flatMap(({ label, title, description, badges }) => [
      `### ${label}: ${title}`,
      description,
      badges.map(({ label: badgeLabel }) => `- ${badgeLabel}`).join('\n'),
    ]),
    `## ${identity.title}`,
    identity.highlightedTitle,
    `### ${inspectAuth.title}`,
    `${inspectAuth.descriptionBeforeCode} ${renderInlineCode(inspectAuth.code)} ${inspectAuth.descriptionAfterCode}`,
    `### ${identityData.title}`,
    identityData.description,
    `## ${branching.title}`,
    branching.description,
    `**Diagram:** ${branching.diagramAlt}`,
    branching.caption,
    branching.capabilities.map(({ label }) => `- ${label}`).join('\n'),
    `## ${setupSteps.title}`,
    setupSteps.highlightedTitle,
    ...setupSteps.items.flatMap(({ title, description }, index) => [
      `### ${index + 1}. ${title}`,
      description,
    ]),
    renderFaq(faqItems),
    renderSharedSections(links, contentScorePageContent.backendServicesTitle),
  ];

  return `${sections.join('\n\n')}\n`;
};

const renderAiVisibilityMarkdown = (links) => {
  const {
    hero,
    architecture,
    autoscaling,
    configuration,
    dynamicDatabases,
    fromFirstLine,
    faqItems,
  } = aiVisibilityPageContent;
  const { backendServices } = sharedBackendPlatformContent;

  const sections = [
    renderPageHeader(aiVisibilityPageContent),
    '## Get started',
    renderActionLinks(hero, links),
    `## ${architecture.title} ${architecture.highlightedTitle} ${architecture.titleAfterHighlight}`,
    `${architecture.description} ${architecture.secondaryDescription}`,
    ...architecture.features.flatMap(({ title, description }) => [
      `### ${title}`,
      escapeMarkdownText(description),
    ]),
    `## ${autoscaling.label}`,
    autoscaling.title,
    autoscaling.description,
    ...autoscaling.tabs.flatMap(({ label, prefix = '', number, text }) => [
      `### ${label}`,
      `${prefix}${number.toLocaleString('en-US')} ${text}`,
    ]),
    autoscaling.caption,
    ...autoscaling.features.flatMap(({ title, description }) => [`### ${title}`, description]),
    `## ${dynamicDatabases.title}`,
    ...dynamicDatabases.capabilities.flatMap(({ label, primary, secondary, benefits = [] }) => [
      `### ${label}`,
      `${primary} ${secondary}`,
      ...benefits.flatMap(({ title, description }) => [`#### ${title}`, description]),
    ]),
    `## ${configuration.title}`,
    `### ${configuration.filename}`,
    `\`\`\`typescript\n${configuration.code}\n\`\`\``,
    ...configuration.items.flatMap(({ title, description }) => [
      `### ${title}`,
      htmlToMarkdown(description),
    ]),
    `## ${fromFirstLine.title}`,
    fromFirstLine.description,
    ...fromFirstLine.slides.flatMap(({ title, description, tags, testimonial }) => [
      `### ${title}`,
      description,
      tags.map(({ label }) => `- ${label}`).join('\n'),
      `> ${testimonial.quote}\n> — ${testimonial.author}, ${testimonial.company}`,
      testimonial.caseStudyUrl
        ? `[${testimonial.caseStudyLabel}](${absoluteUrl(testimonial.caseStudyUrl)})`
        : testimonial.caseStudyLabel,
    ]),
    renderFaq(faqItems, `${sharedBackendPlatformContent.faqTitle}.`),
    renderBackendServices(backendServices),
    renderPlatformFooter(links),
  ];

  return `${sections.join('\n\n')}\n`;
};
async function generateBackendPlatformPageMarkdown(rootDir = path.resolve(__dirname, '../..')) {
  const { default: links } = await import('../constants/links.js');
  const outputDir = path.join(rootDir, 'public/md');
  const pages = [
    { filename: 'rank-tracking.md', content: renderRankTrackingMarkdown(links) },
    { filename: 'site-audit.md', content: renderSiteAuditMarkdown(links) },
    { filename: 'wordpress.md', content: renderWordpressMarkdown(links) },
    // Keep public/auth.md dedicated to the existing Claimable Neon protocol.
    { filename: 'content-score.md', content: renderContentScoreMarkdown(links) },
    { filename: 'ai-visibility.md', content: renderAiVisibilityMarkdown(links) },
  ];

  await fs.mkdir(outputDir, { recursive: true });
  await Promise.all(
    pages.map(({ filename, content }) => fs.writeFile(path.join(outputDir, filename), content))
  );

  return pages.map(({ filename }) => path.join(outputDir, filename));
}

module.exports = {
  escapeMarkdownText,
  renderInlineCode,
  htmlToMarkdown,
  renderFaq,
  renderRankTrackingMarkdown,
  renderSiteAuditMarkdown,
  renderWordpressMarkdown,
  renderContentScoreMarkdown,
  renderAiVisibilityMarkdown,
  generateBackendPlatformPageMarkdown,
};

if (require.main === module) {
  generateBackendPlatformPageMarkdown()
    .then((files) => {
      console.log(`Generated ${files.length} backend platform page Markdown files.`);
    })
    .catch((error) => {
      console.error('Failed to generate backend platform page Markdown:', error);
      process.exit(1);
    });
}

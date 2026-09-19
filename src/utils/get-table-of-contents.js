const slugify = require('slugify');

const parseMDXHeading = require('./parse-mdx-heading');

const TOC_ONLY_PATTERN = /\s*\[toc-only\]\s*$/i;

const extractCustomId = (text) => {
  const match = text.match(/\(#([^)]+)\)$/);
  if (match) {
    return match[1];
  }
  return null;
};

const stripTocOnlyMarker = (text) => text.replace(TOC_ONLY_PATTERN, '').trim();

const buildNestedToc = (headings, currentLevel, currentIndex = 0) => {
  const toc = [];
  let numberedStep = 0;
  let localIndex = currentIndex;
  let currentStepsIndex = -1;

  while (headings.length > 0) {
    const currentHeading = headings[0];

    // Handle object format
    const { isNumbered, stepsIndex } = currentHeading;
    const depthMatch = currentHeading.title.match(/^#+/);
    const depth = (depthMatch ? depthMatch[0].length : 1) - 1;
    const title = stripTocOnlyMarker(currentHeading.title.replace(/(#+)\s/, ''));
    const customId = extractCustomId(title);
    const cleanedTitle = title.replace(/\(#[^)]+\)$/, '').trim();
    // CLI reference pages use full-path headings ("### neon branches
    // restore (#restore)") for unambiguous, copy-pasteable anchors. Keep the
    // right-rail label short: drop the binary and top-level command, leaving
    // "restore" (or "oauth-provider add" on nested pages). Double-gated on a
    // custom ID so ordinary headings that merely mention the CLI (e.g.
    // "### neon init" in prose docs) keep their full text. The legacy
    // `neonctl` binary name is still matched for older/back-compat headings.
    let displayTitle = cleanedTitle;
    if (customId && /^neon(ctl)?\s+\S+/.test(cleanedTitle)) {
      const rest = cleanedTitle.replace(/^neon(ctl)?\s+\S+\s*/, '').trim();
      displayTitle = rest || cleanedTitle.replace(/^neon(ctl)?\s+/, '');
    }
    const titleWithInlineCode = displayTitle.replace(/`([^`]+)`/g, '<code>$1</code>');

    if (depth === currentLevel) {
      if (isNumbered && stepsIndex !== currentStepsIndex) {
        numberedStep = 0;
        currentStepsIndex = stepsIndex;
      }

      const tocItem = {
        title: titleWithInlineCode,
        id:
          customId ||
          slugify(cleanedTitle, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g }),
        level: depth,
        numberedStep: isNumbered ? numberedStep + 1 : null,
        index: localIndex,
      };

      localIndex += 1;

      if (isNumbered) {
        numberedStep += 1;
      }

      headings.shift();

      if (headings.length > 0) {
        const nextDepth =
          typeof headings[0] === 'string'
            ? parseMDXHeading(headings[0])[0]
            : headings[0].title.match(/^#+/)?.[0]?.length - 1 || 1;

        if (nextDepth > currentLevel) {
          tocItem.items = buildNestedToc(headings, currentLevel + 1, localIndex);
          localIndex += tocItem.items.length;
        }
      }

      toc.push(tocItem);
    } else if (depth < currentLevel) {
      return toc;
    } else {
      headings.shift();
    }
  }

  return toc;
};

const getTableOfContents = (content) => {
  const codeBlockRegex = /```[\s\S]*?```/g;
  const headingRegex = /^(#+)\s(.*)$/gm;
  const contentWithoutCodeBlocks = content.replace(codeBlockRegex, '');

  // Get all headings first
  const allHeadings = contentWithoutCodeBlocks.match(headingRegex) || [];

  // Find steps sections
  const stepsRegex = /<Steps>([\s\S]*?)<\/Steps>/g;
  const stepsMatches = [...content.matchAll(stepsRegex)];

  // Convert headings to objects while preserving order
  const arr = allHeadings.map((heading) => {
    // Check if this heading is inside any Steps section and is h2
    let stepsIndex = -1;
    const isInSteps = stepsMatches.some((match, index) => {
      const stepsContent = match[0];
      if (stepsContent.includes(heading) && /^##\s(.*)$/gm.test(heading)) {
        stepsIndex = index;
        return true;
      }
      return false;
    });

    return {
      title: heading,
      isNumbered: isInSteps,
      stepsIndex: isInSteps ? stepsIndex : -1,
    };
  });

  return buildNestedToc(arr, 1);
};

export default getTableOfContents;

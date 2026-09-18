// The Content Score page. Badge ids and capability ids are kept from the page's
// previous life because both are PropTypes.oneOf(Object.keys(ICONS)) in the section
// components — the labels change, the ids cannot.
const contentScorePageContent = {
  slug: 'content-score',
  pageLabel: 'Content Score',
  backendServicesTitle: 'Everything the score reads from.',
  faqItems: [
    {
      question: 'What is Content Score?',
      answer:
        '<p>A live grade on the draft you are writing, shown in the editor as you type. It compares your page with the ones already winning the query: the terms they cover, how long they run, and how they are structured. You get an SEO score and an AI score, not a single vague number.</p>',
      initialState: 'open',
    },
    {
      question: 'Where do the targets come from?',
      answer:
        '<p>From the current results for your keyword, not from a fixed rulebook. Ranksmile pulls the competing pages, extracts the NLP terms they share, and derives target ranges for word count, headings and paragraphs from what is actually ranking. Change the keyword and the targets change with it.</p>',
    },
    {
      question: 'What is the difference between the SEO score and the AI score?',
      answer:
        '<p>The SEO score tracks how well the draft matches what ranks in Google for the query. The AI score tracks how well it reads as something an answer engine would cite. Auto-Optimize works against the live AI score, so a pass is measured, not assumed.</p>',
    },
    {
      question: 'Can Ranksmile write the draft for me?',
      answer:
        '<p>It can go as far as you want it to. Start from the Outline Builder, let Smily draft sections in the side panel, or run Auto-Optimize over a page you already have. Templates and Custom Voices keep the output in your brand voice rather than a generic one.</p>',
    },
    {
      question: 'Does it work in languages other than English?',
      answer:
        '<p>Yes. Terms and targets are derived from the results for your keyword in the country you track, so the language follows the market rather than being fixed to English.</p>',
    },
    {
      question: 'How does this connect to AI visibility?',
      answer:
        '<p>They share a site. A prompt where an engine names a competitor instead of you becomes a task in Recommendations, and that task opens here with the keyword and the competing pages already loaded. See <a href="/pricing">plans and limits</a> for how many documents each tier includes.</p>',
    },
  ],
  hero: {
    label: 'Content Score in the Ranksmile editor',
    title: 'Write against the pages already winning the query',
    titleLines: ['Write against the pages', 'already winning the query'],
    illustrationDescription:
      'A draft open in the Ranksmile editor with its Content Score panel alongside: an SEO ring, an AI score, NLP term coverage, and live counts for words, headings and paragraphs.',
    primaryAction: {
      label: 'Start your free trial',
      linkKey: 'signup',
    },
    secondaryAction: {
      label: 'See plans',
      linkKey: 'pricing',
    },
  },
  benefits: {
    title: 'Stop guessing whether a draft is done.',
    highlightedTitle:
      'The panel recomputes as you type, so the gap between your page and the ones ranking is a number rather than an opinion.',
    items: [
      {
        id: 'scoring',
        label: 'Scoring',
        title: 'Two scores, not a vibe',
        description:
          'An SEO score for how the draft matches what ranks, and an AI score for how it reads to an answer engine. Auto-Optimize measures its own work against the live AI score.',
        badges: [
          {
            id: 'better-auth',
            label: 'SEO score',
          },
          {
            id: 'familiar-apis',
            label: 'AI score',
          },
          {
            id: 'open-source',
            label: 'Live as you type',
          },
        ],
      },
      {
        id: 'terms',
        label: 'Terms',
        title: 'NLP terms from the real competitors',
        description:
          'Every term carries a target count and your current count, with a coverage counter for the whole set. Toggle highlighting to see the missing ones in the draft itself.',
        badges: [
          {
            id: 'no-infrastructure',
            label: 'Competitor terms',
          },
          {
            id: 'built-in-auth',
            label: 'Coverage counter',
          },
        ],
      },
      {
        id: 'structure',
        label: 'Structure',
        title: 'Length, headings, paragraphs',
        description:
          'Each carries a target range taken from the pages that rank, and a live count beside it, so structural gaps show up before you publish rather than after.',
        badges: [
          {
            id: 'client-server',
            label: 'Target ranges',
          },
          {
            id: 'sign-in-sessions',
            label: 'Live counts',
          },
        ],
      },
    ],
  },
  identity: {
    label: 'In the editor',
    title: 'Every target is taken from the current results.',
    highlightedTitle:
      'Nothing here is a fixed rule of thumb: change the keyword or the country and the whole panel is recomputed.',
    inspectAuth: {
      title: 'See the terms you are missing.',
      descriptionBeforeCode: 'Each term carries a',
      code: 'target_count',
      descriptionAfterCode:
        'next to its current count, so coverage is something you can work through rather than a feeling about whether the draft reads thin.',
    },
    identityData: {
      title: 'Keep the brief beside the draft.',
      description:
        'The competing pages, the outline and the term list stay in the panel while you write, so you are not switching tabs to remember what the page was supposed to cover.',
    },
  },
  branching: {
    label: 'The editor workflow',
    title: 'From competitors to published, in one panel',
    description:
      'Five numbered steps down the side of the editor. Work them in order, or jump to the one you need.',
    diagramAlt:
      'The Ranksmile editor workflow: competitors are loaded for the keyword, the draft is written and optimized against them, internal links are added, a pre-publish review runs, and the page is published or exported.',
    caption: 'The five steps, in the order the editor lists them',
    capabilities: [
      {
        id: 'sign-up',
        label: 'Competitors',
      },
      {
        id: 'login',
        label: 'Write & Optimize',
      },
      {
        id: 'oauth',
        label: 'Internal Links',
      },
      {
        id: 'password-reset',
        label: 'Pre-Publish Review',
      },
      {
        id: 'rls',
        label: 'Publish or Export',
      },
    ],
  },
  setupSteps: {
    title: 'Open a document and the panel fills itself in.',
    highlightedTitle: 'Pick the keyword, and the targets follow.',
    items: [
      {
        id: 'pick-keyword',
        title: 'Pick the keyword',
        description:
          'Ranksmile pulls the current results for it and extracts the terms the ranking pages share.',
      },
      {
        id: 'draft-or-paste',
        title: 'Draft or paste',
        description:
          'Start from the Outline Builder, let Smily draft sections, or paste a page you already published.',
      },
      {
        id: 'close-the-gaps',
        title: 'Close the gaps',
        description:
          'Terms, headings and length update on every keystroke. Auto-Optimize can take a pass at the rest.',
      },
      {
        id: 'review-publish',
        title: 'Review and publish',
        description:
          'Run the pre-publish review, then send it to WordPress in one click or export it.',
      },
    ],
  },
};

module.exports = { contentScorePageContent };

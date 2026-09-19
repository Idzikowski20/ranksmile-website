const rankTrackingTitleLines = ['Track the keywords that', 'actually pay the bills.'];
const builtForAgentsTitleLines = ['Built for the teams and', 'the agents behind them.'];
const faqTitleLines = ['Your questions,', 'answered'];
const aiVisibilityFromFirstLineTitleLines = ['From one brand', 'to a full client roster'];

const rankTrackingPageContent = {
  backendServices: {
    title: 'Everything the positions sit next to.',
  },
  slug: 'rank-tracking',
  pageLabel: 'Rank Tracking',
  hero: {
    label: 'Rank Tracking in Ranksmile',
    title: 'Every position, per device and per country',
    illustrationDescription:
      'A tracked keyword checked on desktop and mobile in one location, stored with its position, the URL that ranked and the SERP features around it.',
    primaryAction: { label: 'Start your free trial', linkKey: 'signup' },
    secondaryAction: { label: 'See plans', linkKey: 'pricing' },
  },
  backendCompute: {
    label: 'What a check records',
    title: 'Each run stores the result, not just the number',
    highlightedTitle: '— the URL that ranked, its title, and the SERP features around it.',
    connectedServices: {
      title: 'Per device, per location.',
      descriptionBeforeCode: 'Every tracking config carries a location, a language and a',
      code: 'devices',
      descriptionAfterCode:
        'setting, so desktop and mobile are stored as separate results instead of being averaged into one.',
    },
    longRunning: {
      title: 'Buckets, not just an average.',
      description:
        'Each run summarises how many keywords sit in the top 3, top 10 and top 100, how many moved up, down or held, and how the average position compares with the run before it.',
    },
    workloadsLabel: 'What every snapshot keeps',
    workloads: [
      { id: 'api', label: 'Position' },
      { id: 'ai-agents', label: 'Ranking URL' },
      { id: 'mcp-servers', label: 'Page title' },
      { id: 'websockets', label: 'SERP features' },
      { id: 'sse', label: 'Ranking domain' },
    ],
  },
  branching: {
    title: rankTrackingTitleLines.join(' '),
    titleLines: rankTrackingTitleLines,
    description:
      'Group keywords into configs per site, each with its own location, language, devices and schedule.',
    items: [
      {
        id: 'branches-with-data',
        title: 'Your schedule, not ours',
        description:
          'Check daily, weekly, monthly, every N days, or only when you ask. Weekly is the default, and each config keeps its own cadence.',
      },
      {
        id: 'declared-in',
        title: 'Compare back to',
        titleCode: '90d',
        descriptionBeforeCode:
          'Put the latest run against 1, 2, 7, 30, 60 or 90 days ago, then take the history out as',
        descriptionCode: 'csv',
        descriptionAfterCode: 'or JSON.',
      },
      {
        id: 'agent-friendly',
        title: 'Paused, not lost',
        description:
          'Pause or archive a keyword without losing its history, and failed checks retry on their own with the attempt count kept on the row.',
      },
    ],
  },
  faqItems: [
    {
      question: 'What does Ranksmile rank tracking do?',
      answer:
        '<p>It checks where your site sits in Google for the keywords you track, and stores the whole result. Each snapshot keeps the position, the URL that ranked, its title and description, the ranking domain, and the SERP features present on that result, so a movement can be explained rather than just noticed.</p>',
      initialState: 'open',
    },
    {
      question: 'How often are positions checked?',
      answer:
        '<p>On the schedule you set per config: daily, weekly, monthly, every N days, or manual only. Weekly is the default. The scheduler wakes once a day and runs whichever configs are due, so a daily config is checked every day and a weekly one once a week.</p>',
    },
    {
      question: 'Are desktop and mobile tracked separately?',
      answer:
        '<p>Yes. A config tracks desktop, mobile, or both, and each device is stored as its own snapshot. Nothing is blended into a single average, because the two often diverge for the same keyword.</p>',
    },
    {
      question: 'Can I track more than one country or language?',
      answer:
        '<p>Yes. Location and language live on the config, so a site can carry several configs, one per market, each with its own keyword set, devices and schedule.</p>',
    },
    {
      question: 'What does the summary show after a run?',
      answer:
        '<p>Average position and how it moved against the previous run, how many keywords went up, down or held, and how the set is distributed across the top 3, top 10, top 100 and not ranking. The previous distribution is kept beside it, so the shift is visible and not just the current state.</p>',
    },
    {
      question: 'Can I compare periods and export the data?',
      answer:
        '<p>Yes. Any view can compare the latest run against 1, 2, 7, 30, 60 or 90 days back, and the results export as CSV or JSON.</p>',
    },
    {
      question: 'Where do volume, difficulty and CPC come from?',
      answer:
        '<p>They are fetched per keyword for the location and language of its config and stored alongside the positions, so the list can be sorted by what is worth chasing rather than by rank alone.</p>',
    },
    {
      question: 'What happens if a check fails?',
      answer:
        '<p>The keyword is retried on its own schedule and the failure is recorded with an attempt count and the last error. A run finishes as partial rather than failing outright, so one bad keyword does not throw away the rest of the results.</p>',
    },
    {
      question: 'Can I stop tracking a keyword without losing its history?',
      answer:
        '<p>Yes. Keywords can be paused or archived and their past snapshots stay, so you can bring one back later and still see where it was.</p>',
    },
    {
      question: 'How does this fit with AI Visibility?',
      answer:
        '<p>They answer different questions about the same site. Rank tracking tells you where a page sits in the ten blue links. AI Visibility tells you whether an answer engine names your brand at all. Ranksmile keeps both on one site, so a page that ranks but never gets cited shows up as exactly that.</p>',
    },
    {
      question: 'How many keywords can I track?',
      answer:
        '<p>Tracking is on every plan. What scales with the tier is the surrounding volume: documents, Brand Spaces, keyword research and competitor gap runs. See the <a href="/pricing">pricing page</a> for the limits per plan.</p>',
    },
  ],
};

const siteAuditPageContent = {
  slug: 'site-audit',
  pageLabel: 'Site Audit',
  hero: {
    label: 'Site Audit',
    title: 'Find what is stopping you from being found',
    primaryAction: { label: 'Start your free trial', linkKey: 'signup' },
    secondaryAction: { label: 'See plans', linkKey: 'pricing' },
  },
  crawlers: {
    title: 'The engines answering questions about you',
    highlightedTitle: 'have to read your site first.',
    description:
      'Every crawl checks whether the eight crawlers behind Google, ChatGPT, Perplexity and Claude can actually reach your pages. Each one comes back Healthy, Have issues, or Blocked.',
    items: [
      {
        name: 'Googlebot',
        description:
          'Crawls for Google Search, which is also where the pages behind an AI Overview are chosen from.',
      },
      {
        name: 'Google-Extended',
        description:
          'Controls whether your pages may be used by Gemini. Blocking it does not affect your ranking, and does keep you out of the answers.',
      },
      {
        name: 'OAI-SearchBot',
        description: 'Builds the index ChatGPT searches when it looks something up.',
      },
      {
        name: 'ChatGPT-User',
        description:
          'Fetches a page live, mid-conversation, when a prompt needs what is on it right now.',
      },
      {
        name: 'PerplexityBot',
        description: 'Builds the index Perplexity draws its cited sources from.',
      },
      {
        name: 'Perplexity-User',
        description: 'Fetches a page live while answering one specific question.',
      },
      {
        name: 'Claude-SearchBot',
        description: 'Builds the index Claude searches.',
      },
      {
        name: 'Claude-User',
        description: 'Fetches a page live when a Claude user asks for something on it.',
      },
    ],
  },
  checks: {
    label: 'What a crawl gives you',
    title: 'Three scores, and the list of pages behind each one.',
    description:
      'Nothing is a black box: open any score and you get the pages that produced it, what is wrong with each, and how to fix it.',
    items: [
      {
        title: 'Site Health.',
        description:
          'The technical state of the pages that were crawled, as a share of checks that passed.',
      },
      {
        title: 'AI Search Health.',
        description:
          'Whether the eight AI crawlers can reach you, and which of them are being turned away.',
      },
      {
        title: 'Site Speed Score.',
        description:
          'Measured as part of the crawl rather than on demand, so it moves with the rest of the report.',
      },
      {
        title: 'Issues by severity.',
        description:
          'Errors, warnings and notices, each with the affected pages and a how-to-fix note.',
      },
      {
        title: 'Crawl comparison.',
        description:
          'Every crawl is kept, so you see what a release broke and what a fix actually fixed.',
      },
      {
        title: 'Thematic reports.',
        description: 'The same crawl sliced by subject: crawlability, redirects, links, content.',
      },
    ],
  },
  faqItems: [
    {
      question: 'How many pages does a crawl cover?',
      answer:
        '<p>100 pages per crawl on Growth and Scale, 1,000 on Agency. The limit is per crawl, not per month, so re-crawling after a fix does not cost you anything extra.</p>',
      initialState: 'open',
    },
    {
      question: 'What is AI Search Health?',
      answer:
        '<p>A check on whether the crawlers behind the answer engines can reach your pages: Googlebot, Google-Extended, OAI-SearchBot, ChatGPT-User, PerplexityBot, Perplexity-User, Claude-SearchBot and Claude-User. Each comes back Healthy, Have issues, or Blocked. It is the first thing to look at when <a href="/ai-visibility">AI Visibility</a> is flat, because a blocked crawler cannot cite you no matter what you publish.</p>',
    },
    {
      question: 'Is blocking Google-Extended bad for my rankings?',
      answer:
        '<p>No. Google-Extended governs whether your pages may be used by Gemini; it has no effect on Google Search ranking. Plenty of sites block it without realising, which is why the audit calls it out separately rather than lumping it in with Googlebot.</p>',
    },
    {
      question: 'Can I see what changed between crawls?',
      answer:
        '<p>Yes. Crawls are kept and compared, so a page reads as fixed, unchanged, or newly broken. A crawl that found nothing new says so rather than showing you the same list again.</p>',
    },
    {
      question: 'How is this different from a one-off SEO checker?',
      answer:
        '<p>It runs on the same site as your <a href="/rank-tracking">rank tracking</a> and your <a href="/ai-visibility">AI visibility</a>, so a technical problem, a lost position and a lost citation sit next to each other instead of in three tools. Findings also feed the ranked task list per site, rather than ending as a PDF.</p>',
    },
    {
      question: 'Does it check page speed?',
      answer:
        '<p>Yes, as part of the crawl. Site Speed Score is measured alongside the rest of the campaign rather than as a separate button, so the number is always from the same run as the issues beside it.</p>',
    },
  ],
};

const aiVisibilityPageContent = {
  slug: 'ai-visibility',
  pageLabel: 'AI Visibility',
  hero: {
    label: 'AI Visibility',
    title: 'Find out who the engines name when buyers ask',
    illustrationDescription:
      'A tracked prompt answered by five AI engines, with the brands each answer named and the sources it cited stored alongside it.',
    primaryAction: { label: 'Start your free trial', linkKey: 'signup' },
    secondaryAction: { label: 'See plans', linkKey: 'pricing' },
  },
  architecture: {
    title: 'Built on',
    highlightedTitle: 'stored answers.',
    titleAfterHighlight: 'Not a score we invent, but the words each engine actually returned.',
    description: 'Read the answer, the sources it cited, and the brands it named,',
    secondaryDescription:
      'so a number on the dashboard can always be traced back to the sentence it came from.',
    features: [
      {
        title: 'Five engines',
        description:
          'AI Overviews, AI Mode, ChatGPT, Perplexity and Gemini answer the same prompt in one scan.',
      },
      {
        title: 'The whole answer',
        description:
          'Each run keeps the text, the web citations, and the follow-up questions the engine expanded your prompt into.',
      },
      {
        title: 'Per engine, per prompt',
        description:
          'Nothing is averaged into one number: every engine keeps its own result for every prompt you track.',
      },
    ],
  },
  autoscaling: {
    label: 'Scan scheduler',
    title: 'Prompts re-scan on their own tier. You decide what matters most.',
    description:
      'Mark a prompt core, supporting or long-tail, and the scheduler re-checks it at that pace',
    features: [
      {
        title: 'Core runs daily',
        description:
          'The prompts you cannot afford to lose are re-scanned every day, so a dropped citation shows up the next morning.',
      },
      {
        title: 'Supporting and long-tail',
        description:
          'Supporting prompts re-scan weekly and long-tail every two weeks, which keeps the wide set affordable.',
      },
      {
        title: 'Refresh by hand',
        description:
          'Any prompt can be re-run on demand, subject to a cooldown that follows the same tiers.',
      },
    ],
    tabs: [
      {
        label: 'Scan tiers',
        number: 14,
        text: 'days between long-tail re-scans, one day for core',
      },
      { label: 'Per scan', number: 250, text: 'prompt and engine pairs in a single run' },
    ],
    legend: ['Core, daily', 'Supporting, weekly', 'Long-tail, every two weeks'],
    caption:
      'The scheduler wakes every six hours and runs whichever prompts are due, so the wide set never crowds out the prompts that matter.',
  },
  configuration: {
    label: 'What a scan stores',
    title: 'Every answer is kept whole, with its citations attached.',
    filename: 'scan-result.json',
    code: `{
  "prompt": "best seo tool for agencies",
  "engine": "chat_gpt",
  "brands": [
    { "name": "Ranksmile", "mentioned": true, "sentiment": "positive" },
    { "name": "Competitor", "mentioned": true, "sentiment": "neutral" }
  ],
  "citations": [
    { "url": "https://example.com/guide", "domain": "example.com" }
  ],
  "fanOutQueries": [
    "seo tools for managing multiple clients"
  ]
}`,
    items: [
      {
        title: 'Sources',
        description:
          'The URLs an answer cited, ranked by how often the engines lean on them, with the brands each source mentions.',
      },
      {
        title: 'Competitors',
        description:
          'The brands named beside you or instead of you, prompt by prompt, so a lost answer has a name attached.',
      },
      {
        title: 'Fanout queries',
        description:
          'The follow-up questions an engine expands your prompt into before it answers, which is where the gaps you never tracked show up.',
      },
    ],
  },
  dynamicDatabases: {
    title:
      'AI answers move faster than rankings: a brand can be dropped from an answer without losing a single position.',
    highlightedTitle: '',
    capabilities: [
      {
        id: 'instant-branching',
        label: 'Track the prompts buyers ask',
        primary: 'Track the questions your buyers actually type,',
        secondary:
          'grouped into topics, with Ranksmile suggesting prompts from your site and your competitors.',
        benefits: [
          {
            icon: 'branching',
            title: 'A score per engine',
            description:
              'Your Visibility Score is the share of tracked prompts where an engine names your brand, reported separately for each of the five.',
          },
          {
            icon: 'api',
            title: 'Sentiment, not just presence',
            description:
              'Each mention is stored with its sentiment, so being named badly reads differently from being named well.',
          },
          {
            icon: 'storage',
            title: 'Movement over time',
            description:
              'Every metric keeps its previous value, so you see the delta and the direction, not just today.',
          },
        ],
      },
      {
        id: 'restore-to-any-point',
        label: 'See who is cited instead',
        primary: 'Read the sources the engines trust for your queries,',
        secondary:
          'and the competing brands those sources mention, so outreach has a target list rather than a hunch.',
        benefits: [
          {
            icon: 'branching',
            title: 'Sources, ranked',
            description:
              'The URLs the engines cite most often for your prompts, with how many answers each one shows up in.',
          },
          {
            icon: 'api',
            title: 'Who each source names',
            description:
              'Open a source and see which brands it mentions, so you know whether earning a place there would help you or a rival.',
          },
          {
            icon: 'storage',
            title: 'Competitors per prompt',
            description:
              'The brands named beside you, query by query, so a lost answer has a name attached rather than being a general worry.',
          },
        ],
      },
      {
        id: 'database-built-for-agents',
        label: 'Turn gaps into work',
        primary: 'Every prompt you are missing from becomes a ranked task,',
        secondary: 'opening in the editor with the keyword and the competing pages already loaded.',
        benefits: [
          {
            icon: 'branching',
            title: 'One list per site',
            description:
              'Gaps, drops and opportunities land in Recommendations together, sorted by what will move visibility fastest.',
          },
          {
            icon: 'api',
            title: 'Straight into the editor',
            description:
              'A task opens with the keyword, the competing pages and a live Content Score, so there is no blank page to start from.',
          },
          {
            icon: 'storage',
            title: 'The scan confirms it',
            description:
              'Publish, and the next scheduled scan tells you whether the answer changed. Nothing is marked done on a hunch.',
          },
        ],
      },
    ],
  },
  fromFirstLine: {
    title: aiVisibilityFromFirstLineTitleLines.join(' '),
    titleLines: aiVisibilityFromFirstLineTitleLines,
    description:
      'One brand or fifty, the workflow is the same: pick the prompts, read what came back, and publish against the gap.',
    slides: [
      {
        title: 'Know where you stand',
        description:
          'Add a site, let Ranksmile suggest prompts by topic, and run the first scan. The answers, the sources and the competing brands are stored from run one.',
        tags: [],
        testimonial: {
          quote:
            'Your Visibility Score is the share of tracked prompts where an engine names your brand, reported per engine.',
          highlight: 'the share of tracked prompts',
          author: 'How AI Visibility is measured',
          company: 'Inside Ranksmile',
          logo: {
            src: '/images/ranksmile-wordmark.svg',
            width: 151,
            height: 28,
            alt: 'Ranksmile',
            className: 'h-7 w-[151px]',
          },
          caseStudyLabel: 'How the score is measured',
        },
      },
      {
        title: 'Find out who is taking the answer',
        description:
          'Competitors ranks the brands each engine names beside you. Sources lists the URLs behind those answers and which brands each one mentions.',
        tags: [],
        testimonial: {
          quote: 'Sources lists the URLs each answer cited, and which brands each source mentions.',
          highlight: 'which brands each source mentions',
          author: 'What a scan stores',
          company: 'Inside Ranksmile',
          logo: {
            src: '/images/ranksmile-wordmark.svg',
            width: 151,
            height: 28,
            alt: 'Ranksmile',
            className: 'h-7 w-[151px]',
          },
          caseStudyLabel: 'What a scan stores',
        },
      },
      {
        title: 'Close the gap and hold it',
        description:
          'Missing prompts land in Recommendations as ranked tasks. Fix the page in the editor, publish, and let the scheduler confirm the answer changed.',
        tags: [],
        testimonial: {
          quote:
            'Every gap becomes a ranked task on one list, per site, sorted by what will move visibility fastest.',
          highlight: 'a ranked task on one list',
          author: 'How Recommendations work',
          company: 'Inside Ranksmile',
          logo: {
            src: '/images/ranksmile-wordmark.svg',
            width: 151,
            height: 28,
            alt: 'Ranksmile',
            className: 'h-7 w-[151px]',
          },
          caseStudyLabel: 'How Recommendations work',
        },
      },
    ],
  },
  faqItems: [
    {
      question: 'How is AI visibility measured?',
      answer:
        '<p>Your tracked prompts are sent to each engine on your plan. Ranksmile stores the answer text with the web citations it returned, then works out which brands and URLs were named. Your Visibility Score is the share of tracked prompts where your brand is named, reported per engine rather than blended into one number.</p>',
      initialState: 'open',
    },
    {
      question: 'Which engines are tracked?',
      answer:
        '<p>Five: Google AI Overviews, Google AI Mode, ChatGPT, Perplexity and Gemini. Growth tracks four of them; Scale and Agency track all five. Classic Google positions are tracked separately by <a href="/rank-tracking">rank tracking</a>.</p>',
    },
    {
      question: 'How often does a prompt re-scan?',
      answer:
        '<p>By the priority you give it: core daily, supporting weekly, long-tail every two weeks. The scheduler wakes every six hours and runs whichever prompts are due. You can also refresh by hand, subject to a cooldown on the same tiers.</p>',
    },
    {
      question: 'What exactly is stored for each answer?',
      answer:
        '<p>The answer text, the web citations it came back with, the brands it named and their sentiment, and the fanout queries the engine expanded your prompt into. Because the raw answer is kept, every score can be traced back to the wording behind it.</p>',
    },
    {
      question: 'What are fanout queries?',
      answer:
        '<p>Before answering, an engine often expands your prompt into several narrower questions and answers those instead. Ranksmile records them, which surfaces the questions you were never tracking but are being judged on.</p>',
    },
    {
      question: 'How does this differ from rank tracking?',
      answer:
        '<p>Rank tracking tells you where a page sits in the ten blue links. AI Visibility tells you whether an answer engine names your brand at all. They run on the same site, so a page that ranks well but is never cited shows up as exactly that.</p>',
    },
  ],
};

const sharedBackendPlatformContent = {
  faqTitle: faqTitleLines.join(' '),
  faqTitleLines,
  backendServices: {
    title: 'One workspace, not five subscriptions.',
    highlightedTitle:
      'Visibility, scoring, rankings, research and publishing all read the same site, the same prompts and the same competitors.',
    itemsByVideo: {
      'postgres-database': {
        title: 'AI Visibility',
        description: 'Five engines read every prompt, and the answers are stored.',
      },
      authentication: {
        title: 'Content Score',
        description: 'Your draft graded live against the pages already winning the query.',
      },
      compute: {
        title: 'Rank Tracking',
        description: 'Positions on your own schedule, desktop and mobile, per country.',
      },
      storage: {
        title: 'WordPress publishing',
        description: 'Finished drafts land as Gutenberg blocks with images sideloaded.',
      },
      'ai-gateway': {
        title: 'Keyword Research',
        description: 'Coverage gap and competitor gap decide what to write next.',
      },
    },
  },
  builtForAgents: {
    title: builtForAgentsTitleLines.join(' '),
    titleLines: builtForAgentsTitleLines,
    description:
      'Nothing on the dashboard is an estimate. Every score traces back to an answer we stored, a URL an engine cited, or a position from its last check, and the same data is available to your own agents over MCP and the API.',
    items: [
      {
        id: 'branchable',
        title: 'Traceable',
        description:
          'Each scan keeps the answer text and the citations it came back with, so you can always read the sentence a number came from.',
      },
      {
        id: 'serverless',
        title: 'Scheduled',
        description:
          'Core prompts re-scan daily, supporting weekly, long-tail every two weeks, and rank checks run on the schedule you set. Nothing waits for you to remember.',
      },
      {
        id: 'agent-ready',
        title: 'Agent-ready',
        description:
          'Connect Claude, Codex or your own agent over MCP and let it read your visibility data and drive the editor, using the same interfaces you do.',
      },
    ],
  },
  backedBy: {
    label: 'How it holds up',
    title: 'Measured, not guessed.',
    highlightedTitle:
      'Five AI engines plus Google rankings, on the prompts your buyers actually ask.',
    trustedByLabel: 'What every plan includes',
    metrics: [
      {
        value: '5',
        description:
          'AI engines read on every scan - AI Overviews, AI Mode, ChatGPT, Perplexity, Gemini.',
      },
      {
        value: '90d',
        description: 'Of position history to compare any run against, desktop and mobile',
      },
    ],
    quotes: [
      {
        text: [
          'Your Visibility Score is ',
          'the share of tracked prompts',
          ' where an engine names your brand, reported per engine.',
        ],
        highlight: 'the share of tracked prompts',
        author: 'How AI Visibility is measured',
        post: 'Inside Ranksmile',
      },
      {
        text: [
          'Sources lists ',
          'the URLs each answer cited',
          ', and which brands each source mentions.',
        ],
        highlight: 'the URLs each answer cited',
        author: 'What a scan stores',
        post: 'Inside Ranksmile',
      },
      {
        text: [
          'Fanout queries expose',
          ' the follow-up questions an engine expands your prompt into before it answers.',
        ],
        highlight: 'Fanout queries expose',
        author: 'Beyond the prompt you typed',
        post: 'Inside Ranksmile',
      },
      {
        text: [
          'Every gap becomes ',
          'a ranked task on one list',
          ', per site, sorted by what will move visibility fastest.',
        ],
        highlight: 'a ranked task on one list',
        author: 'How Recommendations work',
        post: 'Inside Ranksmile',
      },
    ],
  },
  cta: {
    title: 'Talk to us.',
    description: 'Tell us what you track and we will get back to you within a few business days.',
    label: 'Get help',
    buttonText: 'Contact us',
    linkKey: 'contact',
  },
};

module.exports = {
  rankTrackingPageContent,
  siteAuditPageContent,
  aiVisibilityPageContent,
  sharedBackendPlatformContent,
};

const rankTrackingTitleLines = ['Track the keywords that', 'actually pay the bills.'];
const aiGatewayHeroTitleLines = ['Call the latest models right', 'from your Neon backend'];
const aiGatewayModelsTitleLines = ['Access a wide catalog of frontier and open', 'weight models.'];
const aiGatewayModelsHighlightedTitleLines = ['Served with optimized performance via Databricks.'];
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

const aiGatewayPageContent = {
  slug: 'ai-gateway',
  pageLabel: 'AI Gateway',
  hero: {
    label: 'AI Gateway, powered by Databricks',
    title: aiGatewayHeroTitleLines.join(' '),
    titleLines: aiGatewayHeroTitleLines,
    illustrationDescription:
      'A Neon backend routing AI Gateway requests to models from multiple providers',
    primaryAction: { label: 'Start building', linkKey: 'signup' },
    secondaryAction: { label: 'Read the docs', linkKey: 'aiGatewayOverview' },
  },
  models: {
    title: aiGatewayModelsTitleLines.join(' '),
    titleLines: aiGatewayModelsTitleLines,
    highlightedTitle: aiGatewayModelsHighlightedTitleLines.join(' '),
    highlightedTitleLines: aiGatewayModelsHighlightedTitleLines,
  },
  gatewayBenefits: {
    title: 'LLMs belong in your backend.',
    highlightedTitle:
      'Call them with the same credential and the same bill as the rest of the Neon platform.',
    items: [
      {
        id: 'unified-access',
        label: 'Unified access',
        title: 'One credential for every provider.',
        description:
          'Authenticate just once with Neon and call AI agents through the same endpoint — no separate provider accounts to wire up.',
      },
      {
        id: 'simplified-billing',
        label: 'Simplified billing',
        title: 'One bill to pay.',
        description:
          'All your model usage lands directly on your Neon invoice, next to Postgres, Storage, and Auth. One vendor, one payment method, one line in your accounting.',
      },
      {
        id: 'fair-pricing',
        label: 'Fair pricing',
        title: 'Zero markup.',
        description:
          'Neon charges the same per-token rate as the model provider — published prices, passed through with nothing added on top.',
      },
    ],
  },
  compatibility: {
    label: 'Compatibility',
    title:
      'Powered by Databricks Foundation Model APIs. OpenAI-compatible, so your SDK already works.',
    description:
      'Pointing a standard client at Neon takes a URL and credential change — the rest of your code stays exactly as it is.',
    items: [
      {
        title: 'Base URL.',
        description:
          "Point your existing client at your branch's gateway endpoint instead of the provider's.",
      },
      {
        title: 'Credential.',
        description:
          'Replace the provider key with your Neon key — nothing else in the environment changes.',
      },
      {
        title: 'Request shape.',
        description: 'Chat completions and streaming follow the format you already write.',
      },
      {
        title: 'Model switching.',
        description: 'Move between providers by changing the model name, not the integration.',
      },
    ],
  },
  faqItems: [
    {
      question: 'What is AI Gateway?',
      answer:
        '<p>AI Gateway is the LLM inference layer built into your Neon project. It runs on Databricks Foundation Model APIs. Use your Neon credential to call models from multiple providers through one endpoint, without setting up separate provider accounts.</p>',
      initialState: 'open',
    },
    {
      question: 'Which models can I call?',
      answer:
        '<p>AI Gateway includes frontier and open-weight models from Anthropic, OpenAI, Google, Meta, Alibaba, Zhipu AI, Moonshot AI, Thinking Machines, and others. The catalog changes as models are added or retired, and availability can vary by region. Check the <a href="/docs/ai-gateway/models#available-models">live model catalog</a> for current models, prices, and supported endpoints.</p>',
    },
    {
      question: 'What is the difference between Neon AI Gateway and Databricks Unity AI Gateway?',
      answer:
        '<p>Both use <a href="https://docs.databricks.com/aws/en/machine-learning/foundation-model-apis/">Databricks Foundation Model APIs</a> for model serving. Neon AI Gateway is built into Neon projects and credentials for developers building applications and agents. Databricks Unity AI Gateway provides centralized governance for AI traffic within the Databricks Platform.</p>',
    },
    {
      question: 'How does AI Gateway relate to the rest of the Neon backend?',
      answer:
        '<p>AI Gateway shares the same project and branch boundaries as Lakebase Postgres, Functions, Object Storage, and Managed Better Auth. A Function receives <code>NEON_AI_GATEWAY_TOKEN</code> and <code>NEON_AI_GATEWAY_BASE_URL</code> alongside <code>DATABASE_URL</code>, so it can call a model and write results to Postgres without separate provider keys.</p>',
    },
    {
      question: 'Do I need to run my application on Neon to use AI Gateway?',
      answer:
        '<p>No. Any application or service that can make an HTTPS request with a bearer token can call AI Gateway. Running model calls in Functions keeps them close to the other services in your Neon backend and lets them follow the same branching workflow.</p>',
    },
    {
      question: 'What happens to AI Gateway when I create a branch?',
      answer:
        '<p>Each Neon branch has its own AI Gateway endpoint. Requests from a development or preview branch stay scoped to that branch, separate from production.</p>',
    },
    {
      question: 'Do I have to change my code to use AI Gateway?',
      answer:
        '<p>For an OpenAI-compatible client, change the base URL and credential. The request and streaming formats stay the same. AI Gateway also provides provider-specific endpoints when you need features from the OpenAI Responses API, Anthropic Messages API, or Gemini API.</p>',
    },
    {
      question: 'Who can use AI Gateway after GA?',
      answer:
        '<p>AI Gateway is available on the Neon Launch and Scale plans. Both plans have the same AI Gateway pricing. You need prepaid AI Gateway credits before you can make inference requests. Model access can also depend on region, availability, and any verification required by provider policies.</p>',
    },
    {
      question: 'How does AI Gateway pricing work?',
      answer:
        '<p>Inference is billed per token at the published rate for each model, with no additional Neon markup. One AI Gateway credit equals $1 USD. The minimum credit purchase is $5, and purchased credits are valid for 12 months. Check the <a href="/docs/ai-gateway/models#available-models">model catalog</a> for current per-model rates.</p>',
    },
    {
      question: 'What are the rate limits?',
      answer:
        '<p>AI Gateway applies a default limit of 200,000 tokens per minute (TPM). These are default limits and can be increased on request. If you hit a limit, requests return HTTP 429 and the error body explains which limit you reached. <a href="/docs/introduction/support">Contact support</a> if you need a higher TPM limit.</p>',
    },
    {
      question: 'How do I buy and manage credits?',
      answer:
        '<p>Buy credits from the Billing page in the Neon Console. Credits are added to your AI Gateway balance after payment and accumulate across purchases. You can see your current balance in the Neon Console. Automatic top-ups can add credits when your balance falls below a threshold.</p>',
    },
    {
      question: 'How are credits deducted?',
      answer:
        '<p>Each inference request deducts credits based on the model&apos;s token price and the final number of tokens reported by the serving system. Balance updates can take about five minutes. A failed request can still be billed if the model consumed tokens before the request failed.</p>',
    },
    {
      question: 'What happens when my credit balance runs out?',
      answer:
        '<p>AI Gateway stops accepting new inference requests when the available balance is too low. Requests already in progress can finish and are charged for the tokens they consume. Because usage reporting is not instantaneous, your balance can fall slightly below zero. Neon applies a $2 minimum balance to account for this delay.</p>',
    },
    {
      question: 'Do credits expire?',
      answer:
        '<p>Purchased credits are valid for 12 months from the purchase date. Promotional credits can have a different expiration date. Check the Billing page or the terms of the promotion for the applicable date.</p>',
    },
    {
      question: "Why can't I access a model in the catalog?",
      answer:
        '<p>Model access can vary by region and account. Proprietary models may require account verification to meet provider requirements. Use the authenticated <code>GET /v1/models</code> endpoint and check for <code>enabled: true</code> to see which models your account can call.</p>',
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
      },
      {
        id: 'database-built-for-agents',
        label: 'Turn gaps into work',
        primary: 'Every prompt you are missing from becomes a ranked task,',
        secondary: 'opening in the editor with the keyword and the competing pages already loaded.',
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
  aiGatewayPageContent,
  aiVisibilityPageContent,
  sharedBackendPlatformContent,
};

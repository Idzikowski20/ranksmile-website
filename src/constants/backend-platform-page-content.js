const rankTrackingTitleLines = ['Track the keywords that', 'actually pay the bills.'];
const aiGatewayHeroTitleLines = ['Call the latest models right', 'from your Neon backend'];
const aiGatewayModelsTitleLines = ['Access a wide catalog of frontier and open', 'weight models.'];
const aiGatewayModelsHighlightedTitleLines = ['Served with optimized performance via Databricks.'];
const builtForAgentsTitleLines = ['Built for the teams and', 'the agents behind them.'];
const faqTitleLines = ['Your questions,', 'answered'];
const lakebaseFromFirstLineTitleLines = [
  'From your first five users',
  "to the world's largest teams",
];

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

const lakebasePageContent = {
  slug: 'lakebase',
  pageLabel: 'Lakebase Postgres',
  hero: {
    label: 'Lakebase Postgres',
    title: 'The Neon database: Lakebase Postgres',
    illustrationDescription:
      'An application connected to Lakebase Postgres and Neon backend services',
    primaryAction: { label: 'Start building', linkKey: 'signup' },
    secondaryAction: { label: 'Read the docs', linkKey: 'postgresOverview' },
  },
  architecture: {
    title: 'Built on the',
    highlightedTitle: 'lakebase architecture.',
    titleAfterHighlight:
      'Decoupled storage and compute, with object storage + WAL as the foundation.',
    description: 'Deploy, scale, branch, replicate, and restore instantly,',
    secondaryDescription:
      'without moving or duplicating your underlying data between environments.',
    features: [
      {
        title: 'Ephemeral compute',
        description:
          'Provisions instantly, autoscales with load, and scales to zero when idle, restarting in <1s.',
      },
      {
        title: 'Shared storage',
        description:
          'The same versioned storage built on WAL serves every branch and replica in a project.',
      },
      {
        title: 'Agent-ready',
        description: 'Operations are lightweight and run through the API, CLI, SDKs, and MCP.',
      },
    ],
  },
  autoscaling: {
    label: 'Autoscaling',
    title: 'Compute follows your traffic. No overprovisioning or performance hiccups.',
    description:
      'There’s no instance to size and no manual resizes in Lakebase Postgres: your database autoscales in real time',
    features: [
      {
        title: 'Scales under load',
        description:
          'Compute moves within your set range, up during spikes and down during slow times.',
      },
      {
        title: 'Suspends when idle',
        description:
          'After five minutes without activity (e.g. in dev environments), compute scales to zero.',
      },
      {
        title: 'Only bills for what runs',
        description:
          'You pay for the compute you actually use, without having to worry about sizing.',
      },
    ],
    tabs: [
      { label: 'Avoid outages', number: 13024, text: 'outages prevented by Autoscaling this year' },
      { label: 'Save costs', prefix: '$', number: 345966, text: 'saved by Autoscaling every day' },
    ],
    legend: ['Neon autoscaling', 'Database load', 'Fixed-resource provisioned'],
    caption:
      'Neon monitors your database load ten times a second and autoscales CPU and memory to exactly fit your workload.',
  },
  configuration: {
    label: 'Data API',
    title: 'Query Postgres directly from browsers, edge runtimes, and serverless functions.',
    filename: 'data-api.ts',
    code: `await fetch(\`\${DATA_API_URL}/projects\`, {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${token}\`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "New project"
  })
})`,
    items: [
      {
        title: 'Instant REST API',
        description:
          'Turn Postgres tables, views, and functions into REST endpoints you can access directly over HTTPS.',
      },
      {
        title: 'Secure access',
        description:
          'Authenticate with JWTs and use Postgres Row-Level Security to control who can access and modify your data.',
      },
      {
        title: 'PostgREST compatible',
        description:
          'Bring any PostgREST client, including <code>@neondatabase/postgrest-js</code>, and keep familiar filtering, ordering, pagination, and CRUD patterns.',
      },
    ],
  },
  dynamicDatabases: {
    title:
      'Agents demand new database primitives like branching, together with instant deploys and restores, and full CLI/MCP coverage.',
    highlightedTitle: '',
    capabilities: [
      {
        id: 'instant-branching',
        label: 'Instant Branching',
        primary: 'Create a full copy of production in about a second,',
        secondary:
          'without duplicating storage, so a 1 TB branch takes just as long to create as a 1 GB branch.',
        benefits: [
          {
            icon: 'branching',
            title: 'An environment per unit of work',
            description:
              'Every PR, version, test, and preview can have its own backend branch, following your code.',
          },
          {
            icon: 'api',
            title: 'Fully programmable',
            description:
              'Creating and deleting branches is a lightweight metadata operation: your agent and the API can manage it end to end.',
          },
          {
            icon: 'storage',
            title: 'The whole backend branches',
            description:
              'A Neon branch also carries its own Object Storage namespace, its own Functions, its own AI Gateway endpoint, and its own auth.',
          },
        ],
      },
      {
        id: 'restore-to-any-point',
        label: 'Restore to any point',
        primary: 'Roll back instantly to any point in your database history,',
        secondary:
          'without copying data, so restore time stays small no matter how large your database is.',
      },
      {
        id: 'database-built-for-agents',
        label: 'A database built for agents',
        primary: 'Let agents deploy and operate isolated database environments',
        secondary:
          'for every task, session, or pull request, with full isolation and undos always at hand.',
      },
    ],
  },
  fromFirstLine: {
    title: lakebaseFromFirstLineTitleLines.join(' '),
    titleLines: lakebaseFromFirstLineTitleLines,
    description:
      'From early-stage startups to Fortune 500 organizations, Lakebase Postgres gives you the same flexible foundation to build, scale, and run production workloads with confidence.',
    slides: [
      {
        title: 'Ship faster with a small team',
        description:
          'Adopt branching workflows and grow your startup faster. Don’t let the database lag the speed at which you ship code.',
        tags: [],
        testimonial: {
          quote:
            'We’ve been able to manage 300K+ Postgres databases via the Neon API. It saved us a tremendous amount of time and engineering effort.',
          highlight: '300K+ Postgres databases',
          author: 'Himanshu Bhandoh',
          company: 'Software Engineer at Retool',
          logo: {
            src: '/images/case-studies/retool-dark.svg',
            width: 95,
            height: 20,
            alt: 'Retool',
            className: 'h-5 w-[95px]',
          },
          caseStudyLabel: 'Read case study',
          caseStudyUrl:
            '/blog/how-retool-uses-retool-and-the-neon-api-to-manage-300k-postgres-databases',
        },
      },
      {
        title: 'Scale with unpredictable demand',
        description:
          'Let compute follow traffic automatically, from sudden AI-agent spikes to quiet periods, without manual capacity planning.',
        tags: [],
        testimonial: {
          quote:
            'The combination of flexible resource limits and nearly instant database provisioning made Neon a no-brainer',
          highlight: 'flexible resource limits',
          author: 'Lincoln Bergeson',
          company: 'Infrastructure Engineer',
          logo: {
            src: '/images/case-studies/replit.svg',
            width: 120,
            height: 32,
            alt: 'Replit',
            className: 'h-8 w-[120px] brightness-0',
          },
          caseStudyLabel: 'Read case study',
          caseStudyUrl: '/blog/neon-replit-integration',
        },
      },
      {
        title: 'Move fast without managing infrastructure',
        description:
          'Keep the developer experience simple while the database scales efficiently with your product and team.',
        tags: [],
        testimonial: {
          quote:
            'What first attracted us to Neon was the efficient scaling. What kept us interested were all the thoughtful developer-experience wins.',
          highlight: 'thoughtful developer-experience wins.',
          author: 'Ben Halpern',
          company: 'DEV Co-Founder',
          logo: {
            src: '/images/case-studies/dev-dark.svg',
            width: 41,
            height: 32,
            alt: 'DEV',
            className: 'h-8 w-[41px]',
          },
          caseStudyLabel: 'Read case study',
          caseStudyUrl: '/blog/dev-from-heroku-to-neon',
        },
      },
    ],
  },
  faqItems: [
    {
      question: 'Is this standard Postgres?',
      answer:
        '<p>In terms of compatibility, yes. Lakebase Postgres is Postgres — your existing drivers, ORMs, migration tools, and everything else from the Postgres ecosystem works unchanged. What’s different is the architecture underneath.</p>',
      initialState: 'open',
    },
    {
      question: 'What is the lakebase architecture, and how does it relate to Databricks Lakebase?',
      answer:
        '<p>The lakebase architecture separates standard Postgres compute from durable, versioned storage. Neon Lakebase Postgres and Databricks Lakebase run on the same core technology: Neon delivers it as part of a developer backend, while Databricks integrates it with the Data Intelligence Platform.</p>',
    },
    {
      question: 'How fast is branching, and does database size change that?',
      answer:
        '<p>A branch is typically ready in about a second, regardless of database size. Creating one records a pointer into the existing versioned storage instead of copying the database; only data changed after the branch point consumes additional storage.</p>',
    },
    {
      question: 'What happens when my database is idle?',
      answer:
        '<p>Its compute can scale to zero after a period of inactivity while durable storage remains available. The database wakes automatically on the next connection, and suspended compute does not consume compute hours.</p>',
    },
    {
      question: 'How does pricing work?',
      answer:
        '<p>Neon uses usage-based pricing. You pay for the compute time and storage you actually consume, with plan allowances for branches and restore history. Scale to zero and automatic branch expiration help keep temporary environments inexpensive.</p>',
    },
    {
      question: 'Can agents provision and operate databases?',
      answer:
        '<p>Yes. Agents can use the Neon API, CLI, SDKs, and MCP Server to create isolated branches and databases, run SQL, inspect state, and clean up environments programmatically.</p>',
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
  lakebasePageContent,
  sharedBackendPlatformContent,
};

import LINKS from 'constants/links';

// Plans, prices and limits mirror the billing source of truth in the Ranksmile app
// (src/core/domain/pricing/planDefinition.ts). `planId` values are kept as-is so the
// critical-flow contracts in tests/critical-flows keep resolving their test ids.
export default [
  {
    planId: 'free',
    type: 'Growth',
    price: { monthly: 59, yearly: 49 },
    subtitle: {
      monthly: 'Per month, billed monthly. Starts with a 7-day free trial.',
      yearly: 'Per month, billed yearly (€588/year). Starts with a 7-day free trial.',
    },
    highlighted: true,
    features: {
      database: {
        title: 'Tracking',
        features: [
          {
            title: '50 AI prompts per day',
            info: '<p>Every prompt is sent to each tracked engine<br/> and the answer is stored.</p>',
            moreLink: { text: 'Read more', href: '#how-ai-visibility-works' },
          },
          {
            title: '4 AI visibility engines',
            info: '<p>Pick four of AI Overviews, AI Mode,<br/> ChatGPT, Perplexity and Gemini.</p>',
          },
          {
            title: 'Rank tracking',
            info: '<p>Daily to manual, your schedule.</p><p>Desktop and mobile, per country.</p>',
          },
          {
            title: '200 keyword researches per month',
          },
          {
            title: '25 competitor keyword gaps per month',
          },
        ],
      },
      other: {
        title: 'Workspace',
        features: [
          { title: '30 documents', info: 'Pages you create and optimize in the editor' },
          { title: '5 Brand Spaces', info: 'One per brand, product or client' },
          { title: 'Content Score & AI writing' },
          { title: 'Site Audit', info: '<p>100 pages per crawl</p>' },
          { title: 'WordPress publishing' },
        ],
      },
    },
    button: {
      url: LINKS.signup,
      text: 'Start 7-day trial',
      event: 'Hero Growth Panel',
    },
  },
  {
    planId: 'launch',
    type: 'Scale',
    price: { monthly: 119, yearly: 99 },
    subtitle: {
      monthly: 'Per month, billed monthly. For teams running several brands.',
      yearly: 'Per month, billed yearly (€1,188/year). For teams running several brands.',
    },
    features: {
      database: {
        title: 'Tracking',
        features: [
          {
            title: '100 AI prompts per day',
            info: '<p>Every prompt is sent to each tracked engine<br/> and the answer is stored.</p>',
            moreLink: { text: 'Read more', href: '#how-ai-visibility-works' },
          },
          {
            title: 'All 5 AI visibility engines',
            info: '<p>AI Overviews, AI Mode, ChatGPT,<br/> Perplexity and Gemini.</p>',
          },
          {
            title: 'Advanced SERP analysis',
          },
          {
            title: '500 keyword researches per month',
          },
          {
            title: '60 competitor keyword gaps per month',
          },
        ],
      },
      other: {
        title: 'Workspace',
        features: [
          { title: '100 documents' },
          { title: '15 Brand Spaces' },
          { title: 'API access', info: 'For reporting and automation' },
          { title: 'Priority support' },
          { title: 'Everything in Growth' },
        ],
      },
    },
    button: {
      url: LINKS.appBilling,
      text: 'Get started',
      theme: 'primary',
      event: 'Hero Scale Panel',
    },
  },
  {
    planId: 'scale',
    type: 'Agency',
    price: { monthly: 249, yearly: 207 },
    subtitle: {
      monthly: 'Per month, billed monthly. For a full client roster.',
      yearly: 'Per month, billed yearly (€2,484/year). For a full client roster.',
    },
    features: {
      database: {
        title: 'Tracking',
        features: [
          {
            title: '250 AI prompts per day',
            info: '<p>Every prompt is sent to each tracked engine<br/> and the answer is stored.</p>',
            moreLink: { text: 'Read more', href: '#how-ai-visibility-works' },
          },
          {
            title: 'All 5 AI visibility engines',
            info: '<p>AI Overviews, AI Mode, ChatGPT,<br/> Perplexity and Gemini.</p>',
          },
          {
            title: '2,000 keyword researches per month',
          },
          {
            title: '250 competitor keyword gaps per month',
          },
          {
            title: 'Site Audit up to 1,000 pages',
          },
        ],
      },
      other: {
        title: 'Workspace',
        features: [
          { title: 'Unlimited documents', info: 'Fair-use limits apply' },
          { title: 'Unlimited Brand Spaces', info: 'Fair-use limits apply' },
          {
            title: 'Full API access',
            info: '<p>White-label reporting is planned<br/> for this plan, not yet available.</p>',
          },
          { title: 'Personalized onboarding' },
          {
            title: 'A named contact',
            info: '<p>Someone who works on the product,<br/> not a shared support queue.</p>',
          },
        ],
      },
    },
    button: {
      url: LINKS.appBilling,
      text: 'Get started',
      theme: 'primary',
      event: 'Hero Agency Panel',
    },
  },
];

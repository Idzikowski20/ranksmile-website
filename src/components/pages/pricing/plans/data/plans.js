// Comparison table. Every cell mirrors COMPARE_SECTIONS in the Ranksmile billing
// source of truth (src/core/domain/pricing/planDefinition.ts). The `free` / `launch`
// / `scale` keys are the table component's column ids, not plan names.
export default {
  headings: {
    feature: '',
    free: {
      label: 'Growth',
      price: '<span>€59</span>/month',
    },
    launch: {
      label: 'Scale',
      price: '<span>€119</span>/month',
    },
    scale: {
      label: 'Agency',
      price: '<span>€249</span>/month',
    },
  },
  cols: [
    {
      rows: '1',
      feature: 'Documents & AI',
    },
    {
      rows: '2',
      feature: {
        title: 'Documents to create & optimize',
      },
      free: '30',
      launch: '100',
      scale: 'Unlimited*',
    },
    {
      rows: '2',
      feature: {
        title: 'AI prompts tracked',
        subtitle: { text: 'Read more', href: '#how-ai-visibility-works' },
      },
      free: '50<span>Per day</span>',
      launch: '100<span>Per day</span>',
      scale: '250<span>Per day</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'AI Visibility engines',
        subtitle: { text: 'Read more', href: '#tracked-engines' },
      },
      free: '4',
      launch: '5',
      scale: '5',
    },
    {
      rows: '1-2',
      feature: {
        title: 'Content Score & AI writing',
      },
      free: true,
      launch: true,
      scale: true,
    },
    {
      rows: '1',
      feature: 'Usage',
    },
    {
      rows: '2',
      feature: {
        title: 'Keyword Research',
      },
      free: '200<span>Per month</span>',
      launch: '500<span>Per month</span>',
      scale: '2,000<span>Per month</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Competitor Keyword Gap',
      },
      free: '25<span>Per month</span>',
      launch: '60<span>Per month</span>',
      scale: '250<span>Per month</span>',
    },
    {
      rows: '2',
      feature: {
        title: 'Site Audit pages',
      },
      free: '100<span>Per crawl</span>',
      launch: '100<span>Per crawl</span>',
      scale: '1,000<span>Per crawl</span>',
    },
    {
      rows: '1',
      feature: {
        title: 'Rank tracking',
      },
      free: 'Daily',
      launch: 'Daily',
      scale: 'Daily',
    },
    {
      rows: '1',
      feature: 'Workspace',
    },
    {
      rows: '1',
      feature: {
        title: 'Brand Spaces',
      },
      free: '5',
      launch: '15',
      scale: 'Unlimited*',
    },
    {
      rows: '1-2',
      feature: {
        title: 'Templates & Custom Voices',
      },
      free: true,
      launch: true,
      scale: true,
    },
    {
      rows: '1',
      feature: {
        title: 'Team members',
      },
      free: 'Unlimited',
      launch: 'Unlimited',
      scale: 'Unlimited',
    },
    {
      rows: '1',
      feature: 'Integrations',
    },
    {
      rows: '1',
      feature: {
        title: 'WordPress publishing',
      },
      free: true,
      launch: true,
      scale: true,
    },
    {
      rows: '1',
      feature: {
        title: 'MCP access',
      },
      free: true,
      launch: true,
      scale: true,
    },
    {
      rows: '1',
      feature: {
        title: 'API access',
      },
      free: false,
      launch: true,
      scale: true,
    },
    {
      rows: '1-2',
      feature: {
        title: 'Advanced SERP analysis',
      },
      free: false,
      launch: true,
      scale: true,
    },
    {
      rows: '1',
      feature: {
        title: 'White-label',
      },
      free: false,
      launch: false,
      scale: true,
    },
    {
      rows: '1',
      feature: 'Support',
    },
    {
      rows: '1',
      feature: {
        title: 'Priority support',
      },
      free: false,
      launch: true,
      scale: true,
    },
    {
      rows: '1-2',
      feature: {
        title: 'Personalized onboarding',
      },
      free: false,
      launch: false,
      scale: true,
    },
    {
      rows: '1-2',
      feature: {
        title: 'Dedicated success manager',
      },
      free: false,
      launch: false,
      scale: true,
    },
    {
      rows: '1',
      feature: 'Billing',
    },
    {
      rows: '1',
      feature: {
        title: 'Free trial',
      },
      free: '7 days',
      launch: false,
      scale: false,
    },
    {
      rows: '1-2',
      feature: {
        title: 'Yearly billing discount',
      },
      free: '17%',
      launch: '17%',
      scale: '17%',
    },
    {
      rows: '1',
      feature: {
        title: 'Cancel anytime',
      },
      free: true,
      launch: true,
      scale: true,
    },
  ],
};

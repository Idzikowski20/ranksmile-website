import LINKS from './links';

export default {
  header: [
    {
      text: 'Product',
      sections: [
        {
          title: 'Platform',
          items: [
            {
              title: 'AI Visibility',
              to: LINKS.aiVisibility,
              description: 'Who the five engines name, and what they cite',
            },
            {
              title: 'Content Score',
              to: LINKS.contentScore,
              description: 'Your draft graded live as you write',
            },
            {
              title: 'Rank Tracking',
              to: LINKS.rankTracking,
              description: 'Your schedule, desktop and mobile, per country',
            },
            {
              title: 'Keyword Research',
              to: LINKS.keywordResearch,
              description: 'Coverage gap and competitor keyword gap',
            },
          ],
        },
        {
          title: 'Integrations',
          items: [
            {
              title: 'WordPress plugin',
              to: LINKS.wordpress,
              description: 'Publish finished drafts straight to your site',
            },
            {
              title: 'MCP & API',
              to: LINKS.mcpApi,
              description: 'Connect Claude, Codex or your own agent',
            },
          ],
        },
      ],
    },
    {
      text: 'Solutions',
      sections: [
        {
          title: 'Who it is for',
          items: [
            {
              title: 'In-house SEO teams',
              to: '/#scale-your-app',
              description: 'One scoreboard instead of four tabs',
            },
            {
              title: 'Content writers',
              to: '/#operate-with-agents',
              description: 'Write against a live score, publish in one click',
            },
            {
              title: 'Agencies',
              to: LINKS.agencies,
              description: 'Every client brand in its own space',
            },
          ],
        },
        {
          title: 'How it works',
          variant: 'cards',
          items: [
            {
              title: 'See where you stand',
              to: '/#build-your-backend',
              description: 'Five engines, your rankings and your audits in one view',
              graphic: 'agents',
            },
            {
              title: 'Fix it and hold it',
              to: '/#autoscaling',
              description: 'Ranked tasks, a live editor, and scheduled re-checks',
              graphic: 'platforms',
            },
          ],
        },
      ],
    },
    {
      text: 'Docs',
      to: LINKS.docs,
    },
    {
      text: 'Pricing',
      to: LINKS.pricing,
    },
    {
      text: 'Resources',
      sections: [
        {
          title: 'Learn',
          items: [
            {
              title: 'Blog',
              to: LINKS.blog,
              description: 'Notes on ranking and getting cited',
            },
            {
              title: 'Changelog',
              to: LINKS.changelog,
              description: 'What we shipped recently',
            },
            {
              title: 'FAQs',
              to: LINKS.faqs,
              description: 'Answers to the usual questions',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              title: 'About us',
              to: LINKS.aboutUs,
              description: 'The team and the reason for Ranksmile',
            },
            {
              title: 'Contact',
              to: LINKS.contact,
              description: 'Talk to a human',
            },
            {
              title: 'Legal',
              to: LINKS.legalHub,
              description: 'Terms, privacy and DPA',
            },
          ],
        },
      ],
    },
  ],
  footer: [
    {
      heading: 'Platform',
      items: [
        {
          text: 'AI Visibility',
          to: LINKS.aiVisibility,
        },
        {
          text: 'Content Score',
          to: LINKS.contentScore,
        },
        {
          text: 'Rank Tracking',
          to: LINKS.rankTracking,
        },
        {
          text: 'Keyword Research',
          to: LINKS.keywordResearch,
        },
        {
          text: 'WordPress plugin',
          to: LINKS.wordpress,
        },
        {
          text: 'MCP & API',
          to: LINKS.mcpApi,
        },
        {
          text: 'For agencies',
          to: LINKS.agencies,
        },
      ],
    },
    {
      heading: 'Company',
      items: [
        {
          text: 'About',
          to: LINKS.aboutUs,
        },
        {
          text: 'Blog',
          to: LINKS.blog,
        },
        {
          text: 'Pricing',
          to: LINKS.pricing,
        },
        {
          text: 'Contact',
          to: LINKS.contact,
        },
      ],
    },
    {
      heading: 'Resources',
      items: [
        {
          text: 'Docs',
          to: LINKS.docs,
        },
        {
          text: 'Changelog',
          to: LINKS.changelog,
        },
        {
          text: 'FAQs',
          to: LINKS.faqs,
        },
        {
          text: 'Support',
          to: LINKS.support,
        },
      ],
    },
  ],
};

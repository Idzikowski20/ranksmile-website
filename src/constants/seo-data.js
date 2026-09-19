import LINKS from './links';

export const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg?updated=2026-05-27';

export default {
  index: {
    title: 'Ranksmile — one tool to rank in Google and get mentioned by AI',
    description:
      'Ranksmile records whether AI Overviews, AI Mode, ChatGPT, Perplexity and Gemini name your brand, scores every page as you write it, and tracks your rankings on the schedule you set.',
    pathname: '',
  },
  about: {
    title: 'About Us - Neon',
    description:
      'The Neon team consists of PostgreSQL contributors and technologists on a mission to build the backend for apps and agents, for every developer.',
    pathname: '',
  },
  ai: {
    title: 'Smily AI — the writer that reads your content score | Ranksmile',
    description:
      'Smily writes inside the Ranksmile editor: outline first, then the draft, on the paragraph you selected. Nine actions, from competitor analysis to Auto-Optimize to publishing. In pre alpha.',
    pathname: LINKS.ai,
  },
  siteAudit: {
    title: 'Site Audit — and whether the AI crawlers can get in | Ranksmile',
    description:
      'Site Health, Site Speed and AI Search Health from one crawl, with the pages behind every score. Checks the eight crawlers behind Google, ChatGPT, Perplexity and Claude.',
    pathname: LINKS.siteAudit,
    markdownPath: `${LINKS.siteAudit}.md`,
  },
  aiVisibility: {
    title: 'AI Visibility — who the engines name when buyers ask | Ranksmile',
    description:
      'Track whether AI Overviews, AI Mode, ChatGPT, Perplexity and Gemini name your brand. Every scan stores the answer, the sources it cited, the competing brands and the fanout queries.',
    pathname: LINKS.aiVisibility,
    markdownPath: `${LINKS.aiVisibility}.md`,
  },
  aboutUs: {
    title: 'About us — Ranksmile',
    description:
      'Ranksmile is built by Globalzone: one tool for rank tracking, AI visibility, keyword research, site audits and writing, instead of four subscriptions.',
    pathname: LINKS.aboutUs,
  },
  blog: {
    title: 'Our Blog — Neon',
    description:
      'Learn about Neon and how it can help you build better backends for apps and agents by reading our blog posts.',
    imagePath: '/images/social-previews/blog.jpg',
    pathname: LINKS.blog,
  },
  guides: {
    title: 'Guides — Neon',
    description: 'Learn how to use Neon with our guides.',
    pathname: LINKS.guides,
  },
  faqs: {
    title: 'FAQs — Neon',
    description: 'Frequently asked questions about Neon.',
    pathname: LINKS.faqs,
  },
  mcp: {
    title: 'Ranksmile MCP — give your agent the keys to your SEO data',
    description:
      'One URL connects Claude, Codex, Gemini or any MCP client to your Ranksmile workspace. Read content scores, rankings, AI answers and audits without opening the app.',
    pathname: LINKS.mcp,
  },
  rankTracking: {
    title: 'Rank Tracking — every position, per device and per country | Ranksmile',
    description:
      'Track Google positions on your own schedule. Each check stores the position, the ranking URL and title, the domain and the SERP features, with top 3 / top 10 / top 100 buckets per run.',
    pathname: LINKS.rankTracking,
    markdownPath: `${LINKS.rankTracking}.md`,
  },
  contentScore: {
    title: 'Content Score — write against the pages that already rank | Ranksmile',
    description:
      'A live grade on your draft in the Ranksmile editor: an SEO score, an AI score, NLP terms taken from the competing pages, and target ranges for length, headings and paragraphs.',
    pathname: LINKS.contentScore,
    markdownPath: '/md/content-score.md',
  },
  wordpress: {
    title: 'Ranksmile for WordPress — publish drafts straight to your site',
    description:
      'Install the Ranksmile plugin and send finished drafts to WordPress as Gutenberg blocks, with images sideloaded, your own categories and authors, and re-publishes that update the same post.',
    pathname: LINKS.wordpress,
    markdownPath: `${LINKS.wordpress}.md`,
  },
  contactSales: {
    title: 'Contact us — Ranksmile',
    description:
      'Tell us what you track and we will help you set it up. Questions about plans, limits, agency setups or moving from another tool.',
    pathname: LINKS.contactSales,
  },
  agencies: {
    title: 'Ranksmile for agencies — every client in its own space',
    description:
      'Rankings, AI visibility, site audits and drafts in a separate brand space for every client, with full API access and no per-seat pricing.',
    pathname: LINKS.agencies,
  },
  partners: {
    title: 'Accelerate your business with Neon partnership — Neon',
    description: 'Bring familiar, reliable and scalable Postgres experience to your customers.',
    imagePath: '/images/social-previews/partners.jpg',
    pathname: LINKS.partners,
  },
  pricing: {
    title: 'Pricing — Ranksmile',
    description:
      'Growth, Scale and Agency: flat monthly plans for AI visibility tracking, live Content Score and scheduled rank tracking. 7-day free trial, cancel anytime.',
    imagePath: '/images/social-previews/pricing.jpg',
    pathname: LINKS.pricing,
  },
  costFleets: {
    title: 'Neon for platforms: Cost estimator',
    description:
      'Run thousands of Postgres databases for a fraction of the cost with Neon. Great for building your free tier.',
    imagePath: '/images/social-previews/cost-fleets.jpg',
    pathname: LINKS.costFleets,
  },
  security: {
    title: 'Security — Ranksmile',
    description:
      'What Ranksmile stores, where it runs, how it is encrypted, and which certifications we do not hold yet. Written plainly, including the gaps.',
    imagePath: '/images/social-previews/security.jpg',
    pathname: LINKS.security,
  },
  error: {
    title: 'Page Is Broken — Neon',
  },
  404: {
    title: 'Page Not Found — Neon',
  },
};

export const getBlogCategoryDescription = (category) => {
  switch (category) {
    case 'company':
      return 'Stay updated on the latest Neon company new and partnership announcements. Explore our blog posts for valuable insights and stay ahead in the world of serverless Postgres.';
    case 'engineering':
      return 'Dive into the technical depths of Neon serverless Postgres. Optimize performance, scalability, and reliability. Explore our cutting-edge approach.';
    case 'community':
      return 'Join the vibrant serverless Postgres community. Engage in discussions, tutorials, and success stories. Connect with developers and industry experts.';
    default:
      return 'Learn about Neon and how it can help you build better with Serverless Postgres by reading our blog posts.';
  }
};

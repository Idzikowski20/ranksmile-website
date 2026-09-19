import Hero from 'components/pages/ai/hero';
import CTANew from 'components/shared/cta-new';
import GridFeatures from 'components/shared/grid-features';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import aiApps from 'icons/ai/features-grid/ai-apps.svg';
import auth from 'icons/ai/features-grid/auth.svg';
import autoscaling from 'icons/ai/features-grid/autoscaling.svg';
import branches from 'icons/ai/features-grid/branches.svg';
import jsConsole from 'icons/ai/features-grid/js-console.svg';
import lightning from 'icons/ai/features-grid/lightning.svg';
import performanceStorage from 'icons/ai/features-grid/performance-storage.svg';
import programmable from 'icons/ai/features-grid/programmable.svg';
import scale from 'icons/ai/features-grid/scale.svg';
import vectorSearchOptimization from 'icons/ai/features-grid/vector-seo.svg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.ai);

// The nine actions Smily can take, from src/core/primitives/capabilities.ts in the
// app. Not the same surface as the MCP server, which exposes six read-only tools:
// these are what the editor and the generation pipeline run.
const CAPABILITIES = [
  {
    title: 'Create outline',
    description:
      'An H2 and H3 outline built from the target keyword and what is already ranking for it.',
    icon: programmable,
  },
  {
    title: 'Generate brief',
    description:
      'A brief assembled from the observations about the page and what the Knowledge Layer holds on the topic.',
    icon: jsConsole,
  },
  {
    title: 'Analyze competitors',
    description: 'The gap between you and the pages that hold the positions and the citations.',
    icon: vectorSearchOptimization,
  },
  {
    title: 'Rewrite section',
    description:
      'One section at a time, edited rather than regenerated, so the rest of the article stays as you wrote it.',
    icon: lightning,
  },
  {
    title: 'Run Auto-Optimize',
    description:
      'The same pipeline across a whole article, with the before and after score kept for every run.',
    icon: autoscaling,
  },
  {
    title: 'Generate FAQ',
    description:
      'An FAQ block covering the questions the answer engines ask that your page does not yet answer.',
    icon: aiApps,
  },
  {
    title: 'Cluster entities',
    description: 'The entities a page should cover, grouped, so coverage is judged as a set.',
    icon: branches,
  },
  {
    title: 'Suggest internal links',
    description: 'Links proposed from your own pages, not invented ones.',
    icon: scale,
  },
  {
    title: 'Publish to WordPress',
    description:
      'Smily proposes the publish through the plugin. You confirm it. Nothing goes live on its own.',
    icon: auth,
  },
];

const IN_THE_EDITOR = [
  {
    title: 'Outline first, draft second',
    description:
      '"Write with Smily AI" gives you the outline to review before a single paragraph is written, so a wrong angle costs you a minute rather than an article.',
    icon: programmable,
  },
  {
    title: 'It works on your selection',
    description:
      'Select a paragraph and ask about that paragraph. Smily reads what you highlighted rather than guessing from the whole document.',
    icon: lightning,
  },
  {
    title: 'Conversations are kept',
    description:
      'Threads stay with the article, so the reasoning behind a rewrite is still there next week.',
    icon: performanceStorage,
  },
  {
    title: 'It can see the score',
    description:
      'The same per-slot breakdown the Content Score panel shows: which terms are short, which headings are missing, what the competitor-derived targets are.',
    icon: vectorSearchOptimization,
  },
];

const AiPage = () => (
  <Layout>
    <Hero />
    <GridFeatures
      className="mt-[200px] xl:mt-[194px] lg:mt-[160px] md:mt-[104px]"
      title="What Smily can do"
      titleClassName="md:text-pretty"
      description="Nine actions, declared in one list the editor and the generation pipeline both read. Every one of them runs against your article, your competitors and your own pages."
      descriptionClassName="max-w-[520px]"
      items={CAPABILITIES}
    />
    <GridFeatures
      className="mt-[200px] xl:mt-[194px] lg:mt-[160px] md:mt-[104px]"
      title="In the editor, not in another tab"
      titleClassName="md:text-pretty"
      description="Smily sits beside the draft, which is the only place where knowing the score and knowing the sentence are the same thing."
      descriptionClassName="max-w-[520px]"
      items={IN_THE_EDITOR}
    />
    <CTANew
      label="7-DAY FREE TRIAL"
      title="Write the next one with&nbsp;Smily."
      description="Add a site, open a draft, and ask it why the page scores what it scores."
      buttonText="Start your free trial"
      buttonUrl={LINKS.signup}
      isExternal
    />
  </Layout>
);

export default AiPage;

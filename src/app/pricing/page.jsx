import Features from 'components/pages/pricing/features';
import Hero from 'components/pages/pricing/hero';
import Plans from 'components/pages/pricing/plans';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq/faq';
import Layout from 'components/shared/layout';
import Logos from 'components/shared/logos';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.pricing);

const logos = [
  'eqt',
  'openai',
  'outfront',
  'adobe',
  'genomics',
  'replit',
  'retool',
  'albertsons',
  'akqa',
  'vercel',
  'bcg',
  'wordware',
  'commure',
  'bitso',
  'framer',
];

const faqItems = [
  {
    question: 'What do I get in the free trial?',
    id: 'free-trial',
    initialState: 'open',
    answer: `
      <p>Growth comes with a 7-day free trial: the full plan, not a cut-down version. You can add a site, pick your prompts, run the first scan, write in the editor and publish to WordPress. Cancel any time from billing settings before the trial ends and you are not charged.</p>
    `,
  },
  {
    question: 'How is AI visibility measured?',
    id: 'how-ai-visibility-works',
    answer: `
      <p>You pick the prompts your buyers actually ask. Ranksmile sends each one to every engine on your plan, stores the answer text together with the web citations it came back with, and works out which brands and URLs were named.</p>
      <p>Your <strong>Visibility Score</strong> is the share of tracked prompts where your brand is named, reported per engine. Alongside it you get:</p>
      <ul>
        <li><strong>Sources</strong> — the URLs each answer cited, and which brands each source mentions</li>
        <li><strong>Competitors</strong> — the brands named beside you, or instead of you, prompt by prompt</li>
        <li><strong>Fanout queries</strong> — the follow-up questions an engine expanded your prompt into before answering</li>
      </ul>
      <p>Because the raw answer is stored, every number traces back to the sentence it came from.</p>
    `,
  },
  {
    question: 'Which AI engines are tracked?',
    id: 'tracked-engines',
    answer: `
      <p>Five: Google AI Overviews, Google AI Mode, ChatGPT, Perplexity and Gemini — plus classic Google rankings, which are tracked separately as keyword positions.</p>
      <p>Growth tracks four of the five engines. Scale and Agency track all five.</p>
    `,
  },
  {
    question: 'How often is everything re-checked?',
    id: 'refresh-cadence',
    answer: `
      <p>Keywords and AI prompts run on different clocks.</p>
      <ul>
        <li><strong>Keyword positions</strong> run on the schedule you set per site: daily, weekly, monthly, every N days, or manual. Weekly is the default.</li>
        <li><strong>AI prompts</strong> are re-scanned by the priority you give them: core daily, supporting weekly, long-tail every two weeks.</li>
      </ul>
      <p>The scheduler looks for due scans every six hours. You can also refresh a scan by hand, subject to a short cooldown on the same tiers.</p>
    `,
  },
  {
    question: 'What counts as a document?',
    id: 'what-is-a-document',
    answer: `
      <p>A document is one page you create or optimize in the editor, with its own Content Score, brief and revision history. Growth includes 30, Scale 100, and Agency is uncapped under fair use.</p>
      <p>Auditing a published page does not consume a document — only pages you open in the editor do.</p>
    `,
  },
  {
    question: 'What is a Brand Space?',
    id: 'what-is-a-brand-space',
    answer: `
      <p>A Brand Space is one brand, product or client: its own site, prompts, competitors, keywords and reports, kept separate from the others in your workspace.</p>
      <p>Agencies usually run one per client. Growth includes 5, Scale 15, and Agency is uncapped under fair use.</p>
    `,
  },
  {
    question: 'What counts as a keyword research?',
    id: 'what-counts-as-research',
    answer: `
      <p>One research run is one seed keyword expanded into its related queries, with volumes and difficulty. Competitor Keyword Gap is metered separately: one run compares your site against one competitor domain.</p>
      <p>Both reset monthly, and unused runs do not roll over.</p>
    `,
  },
  {
    question: 'Monthly or yearly — what changes?',
    id: 'billing-period',
    answer: `
      <p>Only the price. Yearly billing takes 17% off every plan (Growth €49/mo, Scale €99/mo, Agency €207/mo, billed once for the year) and the limits are identical either way.</p>
      <p>All prices are in EUR and exclude VAT.</p>
    `,
  },
  {
    question: 'Can I change plan or cancel later?',
    id: 'change-or-cancel',
    answer: `
      <p>Yes, from billing settings, at any time. Upgrades take effect immediately and are prorated. Downgrades take effect at the end of the current period, so you keep the higher limits until then.</p>
      <p>There is no contract and no cancellation fee.</p>
    `,
  },
  {
    question: 'Does Ranksmile work with WordPress?',
    id: 'wordpress',
    answer: `
      <p>Yes, on every plan. The Ranksmile WordPress plugin publishes a finished draft straight to your site and keeps headings, links and images intact — no copy-paste and no lost formatting.</p>
    `,
  },
  {
    question: 'What does white-label on Agency include?',
    id: 'white-label',
    answer: `
      <p>Agency adds white-label reporting, so what you hand a client carries your branding rather than ours, plus full API access for pulling the same data into your own dashboards.</p>
      <p>It also comes with personalized onboarding and a dedicated success manager.</p>
    `,
  },
  {
    question: 'I need higher limits than Agency. What now?',
    id: 'custom-limits',
    answer: `
      <p>Write to <a href="mailto:kontakt@ranksmile.pl">kontakt@ranksmile.pl</a> with the volume you need — prompts a day, brands, crawl size — and we will quote it.</p>
    `,
  },
];

const PricingPage = () => (
  <Layout>
    <Hero />
    <Logos className="mt-[104px] md:mt-20" logos={logos} size="sm" />
    <Plans className="mt-[200px] scroll-mt-5 px-safe xl:mt-[184px] lg:mt-40 md:mt-[120px]" />
    <Features />
    <Faq items={faqItems} />
    <CTANew
      label="7-DAY FREE TRIAL"
      title="See who the engines name <br class='xs:hidden' /> before you decide."
      description="Add a site, pick your prompts, and read the first scan."
      buttonText="Start your free trial"
      buttonUrl={LINKS.signup}
      isExternal
    />
  </Layout>
);

export default PricingPage;

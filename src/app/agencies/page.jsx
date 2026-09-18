import Features from 'components/pages/enterprise/features';
import Hero from 'components/pages/enterprise/hero';
import HowNeonHelps from 'components/pages/enterprise/how-neon-helps';
import CTANew from 'components/shared/cta-new';
import Faq from 'components/shared/faq/faq';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import connectionIcon from 'icons/enterprise/connection.svg';
import durabilityIcon from 'icons/enterprise/durability.svg';
import expertiseIcon from 'icons/enterprise/expertise.svg';
import multiIcon from 'icons/enterprise/multi.svg';
import recoveryIcon from 'icons/enterprise/recovery.svg';
import scalabilityIcon from 'icons/enterprise/scalability.svg';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.agencies);

const features = [
  {
    icon: scalabilityIcon,
    title: 'A space per client',
    description:
      'Every client gets its own Brand Space with its own domains, keywords, prompts and drafts. Nothing bleeds between them. The Agency plan does not cap how many you open.',
    url: LINKS.pricing,
  },
  {
    icon: multiIcon,
    title: 'One login for all of them',
    description:
      'Switch between clients in the same dashboard instead of keeping a password manager full of separate tool accounts.',
    url: LINKS.aiVisibility,
  },
  {
    icon: connectionIcon,
    title: 'Full API access',
    description:
      'Pull rankings, AI visibility and content scores into the report you already send clients, or into your own dashboard. Included on Scale and Agency.',
    url: LINKS.mcpApi,
  },
  {
    icon: recoveryIcon,
    title: 'Publish to the client site',
    description:
      'Connect each client WordPress install once. A finished draft goes from the editor to their site without a copy-paste round trip.',
    url: LINKS.wordpress,
  },
  {
    icon: durabilityIcon,
    title: 'Scans that run themselves',
    description:
      'Up to 250 prompts a day on the Agency plan, re-checked on the priority you set, so a lost citation surfaces before the client notices it.',
    url: LINKS.aiVisibility,
  },
  {
    icon: expertiseIcon,
    title: 'Onboarding with a person',
    description:
      'The Agency plan includes personalized onboarding and a named contact. We are a small team, so that contact is someone who works on the product.',
    url: LINKS.contact,
  },
];

const howNeonHelpsTabs = [
  {
    title: 'Client reporting',
    challenge:
      'Every client wants a monthly report, and the numbers behind it live in four separate tools with four separate exports.',
    description:
      'Rankings, AI answers, site audits and content scores sit in one project per client, so the report is assembled from one place. The API returns the same numbers if you would rather build the report yourself.',
  },
  {
    title: 'Proving the work',
    challenge:
      'It is hard to show a client what actually changed, because most tools only show you today.',
    description:
      'Every metric keeps its previous value, so each one reads as a number and a direction. When a page loses a citation you can open the answer the engine returned and show them the sentence.',
  },
  {
    title: 'Onboarding a new client',
    challenge:
      'Setting up a new client means a day of pulling keywords, guessing prompts and copying competitor lists between tabs.',
    description:
      'Add the domain and Ranksmile proposes the prompts and keywords from the site and its competitors. You edit the list rather than build it, and the first scan runs the same day.',
  },
  {
    title: 'Paying for seats you do not use',
    challenge:
      'Per-seat pricing punishes agencies: the freelancer who logs in twice a month costs the same as the person living in the tool.',
    description:
      'Plans are priced by what you track, not by how many people look at it. The limits that matter are printed on the pricing page: documents, prompts, brand spaces, keyword research and crawl size.',
  },
];

const faqItems = [
  {
    question: 'What does the Agency plan actually add?',
    answer: `Unlimited brand spaces and documents, 250 AI prompts a day, 2,000 keyword research credits a month, site audit crawls up to 1,000 pages, full API access, personalized onboarding and a named contact. The exact limits are on the <a href="/pricing">pricing page</a>.`,
    initialState: 'open',
  },
  {
    question: 'Can I keep client data separated?',
    answer: `Yes. A brand space holds its own domains, keywords, prompts, scans and drafts, and queries are scoped to it. What one client space holds is not visible from another.`,
  },
  {
    question: 'Do you offer white-label reports?',
    answer: `Not yet. It is planned for the Agency plan and it is not built, so do not buy on the strength of it. Today you can pull the numbers through the API and put them in your own template.`,
  },
  {
    question: 'Is there an annual contract or a custom quote?',
    answer: `There is annual billing, which is cheaper per month than paying monthly. There is no custom enterprise contract and no sales process: the plans and their limits are public, and you subscribe yourself. If what you need does not fit, <a href="/contact-sales">tell us</a> and we will answer honestly about whether it does.`,
  },
  {
    question: 'What is the support like?',
    answer: `Email, answered by the people who write the code. There is no 24/7 rota and no support SLA. The Agency plan adds onboarding and a named contact rather than a faster queue.`,
  },
  {
    question: 'Can I try it before moving clients over?',
    answer: `Yes. Every plan starts with a 7-day free trial, and you can cancel from the billing page without talking to anyone. Add one client, run a scan, and see whether the numbers match what you already know about them.`,
  },
];

const AgenciesPage = () => (
  <Layout headerClassName="absolute! bg-transparent!">
    <Hero />
    <Features title="Why agencies run their clients on Ranksmile" items={features} />
    <HowNeonHelps tabs={howNeonHelpsTabs} />
    <Faq items={faqItems} />
    <CTANew
      label="7-DAY FREE TRIAL"
      title="Still deciding? <br class='xs:hidden' /> Try it on one client."
      description="Add a site, pick your prompts, and read the first scan."
      buttonText="Start your free trial"
      buttonUrl={LINKS.signup}
      isExternal
    />
  </Layout>
);

export default AgenciesPage;

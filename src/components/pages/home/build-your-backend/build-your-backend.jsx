import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

import BackendServices from './services';

const SERVICE_ITEMS = [
  {
    title: 'AI Visibility',
    description: 'Five engines read every prompt. See who they name, and which sources they cite.',
    videoBase: 'postgres-database',
    version: '20260813-3',
    aspectRatio: 'aspect-588/580',
    width: 588,
    height: 580,
  },
  {
    title: 'Content Score',
    description:
      'Your draft graded live in the editor against the pages already winning the query.',
    videoBase: 'authentication',
    version: '20260821',
    aspectRatio: 'aspect-590/440',
    width: 590,
    height: 440,
  },
  {
    title: 'Rank Tracking',
    description: 'Positions on your own schedule, desktop and mobile, per country.',
    videoBase: 'compute',
    version: '20260821',
    aspectRatio: 'aspect-590/300',
    width: 590,
    height: 300,
  },
  {
    title: 'Site & Content Audit',
    description: 'A technical crawl and a grade for every page you have already published.',
    videoBase: 'storage',
    version: '20260827',
    aspectRatio: 'aspect-590/680',
    width: 590,
    height: 680,
  },
  {
    title: 'Keyword Research',
    description: 'Coverage gap and competitor keyword gap decide what is worth writing next.',
    videoBase: 'ai-gateway',
    version: '20260814',
    aspectRatio: 'aspect-592/220',
    width: 592,
    height: 220,
  },
];

const BuildYourBackend = () => (
  <section
    className="build-your-backend mt-53 overflow-hidden bg-black-pure safe-paddings 2xl:mt-32 lg:mt-24 md:mt-20 sm:mt-18"
    id="build-your-backend"
    aria-labelledby="build-your-backend-heading"
  >
    <Container className="lg:pt-10 md:pt-8 sm:pt-6" size="1600">
      <div className="grid grid-cols-[22rem_minmax(0,1fr)] xl:grid-cols-[16rem_minmax(0,1fr)] lg:block">
        <div className="pt-3.25 lg:pt-0">
          <SectionLabel theme="white">SEE WHERE YOU STAND</SectionLabel>
          <span
            className="mt-4.25 block font-mono text-[8rem] leading-none tracking-tighter text-gray-new-10 xl:items-center xl:text-[6rem] lg:items-start md:mt-2 md:text-[5rem]"
            aria-hidden="true"
          >
            01
          </span>
        </div>
        <h2
          className="max-w-296 min-w-0 indent-24 text-5xl leading-dense font-normal tracking-tighter text-pretty text-white 2xl:text-[2.75rem] xl:indent-16 xl:text-[2.25rem] lg:mt-10 lg:indent-0 md:mt-8 md:text-[1.75rem]"
          id="build-your-backend-heading"
        >
          <span>Not just a rank tracker. </span>
          <span className="text-gray-new-50">
            Ranksmile is one workspace for AI visibility, content scoring, rank tracking, audits and
            keyword research.
          </span>
        </h2>
      </div>

      <div className="mt-33 2xl:mt-16 md:mt-14 sm:mt-12">
        <BackendServices items={SERVICE_ITEMS} />
      </div>
    </Container>
  </section>
);

export default BuildYourBackend;

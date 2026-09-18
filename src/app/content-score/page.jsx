import Benefits from 'components/pages/auth/benefits';
import Branching from 'components/pages/auth/branching';
import HeroAnimation from 'components/pages/auth/hero/hero-animation';
import Identity from 'components/pages/auth/identity';
import BackendPlatformPage from 'components/pages/backend-platform/backend-platform-page';
import BackendServices from 'components/pages/backend-platform/backend-services';
import BuiltForAgents from 'components/pages/backend-platform/built-for-agents';
import BackendHero from 'components/pages/backend-platform/hero';
import Faq from 'components/shared/faq';
import NumberedSteps from 'components/shared/numbered-steps';
import { contentScorePageContent } from 'constants/content-score-page-content';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.contentScore);

const ContentScorePage = () => (
  <BackendPlatformPage>
    <BackendHero
      className="relative pt-45.5 text-white md:pt-24"
      content={contentScorePageContent.hero}
      dataFigmaNodeId="2131:7296"
      headingClassName="max-w-233 leading-none md:text-4xl"
      headingId="content-score-hero-heading"
      illustration={
        <HeroAnimation description={contentScorePageContent.hero.illustrationDescription} />
      }
      illustrationClassName="overflow-hidden"
      logosDataFigmaNodeId="2131:7525"
      testIdPrefix="content-score"
    />
    <Benefits content={contentScorePageContent.benefits} />
    <Identity content={contentScorePageContent.identity} />
    <Branching content={contentScorePageContent.branching} />
    <NumberedSteps
      id="content-score-setup"
      className="content-score-setup pt-20 pb-40 xl:pt-16 xl:pb-32 lg:pt-12 lg:pb-24 md:pt-10 md:pb-20"
      columns={4}
      figmaNodeId="2131:7269"
      {...contentScorePageContent.setupSteps}
    />
    <Faq
      items={contentScorePageContent.faqItems}
      titleLines={['Your questions,', 'answered.']}
      variant="light"
    />
    <BackendServices title={contentScorePageContent.backendServicesTitle} />
    <BuiltForAgents />
  </BackendPlatformPage>
);

export default ContentScorePage;

export const revalidate = false;

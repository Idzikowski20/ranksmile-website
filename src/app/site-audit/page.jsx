import Compatibility from 'components/pages/ai-gateway/compatibility';
import Crawlers from 'components/pages/ai-gateway/models';
import BackendPlatformPage from 'components/pages/backend-platform/backend-platform-page';
import BackendServices from 'components/pages/backend-platform/backend-services';
import BuiltForAgents from 'components/pages/backend-platform/built-for-agents';
import BackendHero from 'components/pages/backend-platform/hero';
import Faq from 'components/shared/faq';
import {
  sharedBackendPlatformContent,
  siteAuditPageContent,
} from 'constants/backend-platform-page-content';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.siteAudit);

const SiteAuditPage = () => (
  <BackendPlatformPage>
    <BackendHero
      className="hero relative pt-40"
      content={siteAuditPageContent.hero}
      headingClassName="max-w-240 2xl:text-[4rem] xl:max-w-196 lg:max-w-172 md:max-w-136"
      headingId="site-audit-hero-heading"
      headingRowClassName="mt-5.5 gap-x-16 xl:flex-col xl:items-start xl:gap-y-8 md:mt-5"
      logosClassName="relative"
      testIdPrefix="site-audit"
    />
    <Crawlers />
    <Compatibility />
    <Faq
      items={siteAuditPageContent.faqItems}
      titleLines={sharedBackendPlatformContent.faqTitleLines}
      variant="light"
    />
    <BackendServices />
    <BuiltForAgents />
  </BackendPlatformPage>
);

export default SiteAuditPage;

export const revalidate = false;

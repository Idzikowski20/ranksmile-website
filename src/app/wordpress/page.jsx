import BackendPlatformPage from 'components/pages/backend-platform/backend-platform-page';
import BackendServices from 'components/pages/backend-platform/backend-services';
import BuiltForAgents from 'components/pages/backend-platform/built-for-agents';
import BackendHero from 'components/pages/backend-platform/hero';
import HeroAnimation from 'components/pages/object-storage/hero/hero-animation';
import Configuration from 'components/shared/configuration';
import Faq from 'components/shared/faq';
import NumberedSteps from 'components/shared/numbered-steps';
import ProductBenefits from 'components/shared/product-benefits';
import SEO_DATA from 'constants/seo-data';
import { wordpressPageContent } from 'constants/wordpress-page-content';
import branchableStorageImage from 'images/pages/object-storage/branchable-storage.jpg';
import oneCredentialImage from 'images/pages/object-storage/one-credential.jpg';
import s3CompatibleImage from 'images/pages/object-storage/s3-compatible.jpg';
import getMetadata from 'utils/get-metadata';

const ITEM_IMAGES = {
  's3-compatible': s3CompatibleImage,
  'one-credential': oneCredentialImage,
  'branchable-storage': branchableStorageImage,
};

export const metadata = getMetadata(SEO_DATA.wordpress);

const WordpressPage = () => (
  <BackendPlatformPage>
    <BackendHero
      className="relative pt-46.5 text-white md:pt-24"
      content={wordpressPageContent.hero}
      dataFigmaNodeId="2070:4694"
      headingClassName="max-w-209.5 leading-none xl:max-w-196 lg:max-w-172 md:max-w-136 md:text-4xl"
      headingId="wordpress-hero-heading"
      illustration={<HeroAnimation />}
      illustrationClassName="overflow-hidden"
      logosDataFigmaNodeId="2070:4889"
      testIdPrefix="wordpress"
    />
    <ProductBenefits
      className="storage-benefits"
      {...wordpressPageContent.storageBenefits}
      itemImages={ITEM_IMAGES}
      unoptimizedImages
    />
    <NumberedSteps
      className="isolated-environments"
      id="wordpress-install-steps"
      figmaNodeId="2070:6669"
      {...wordpressPageContent.isolatedEnvironments}
    />
    <Configuration
      content={wordpressPageContent.configuration}
      id="wordpress-configuration"
      figmaNodeId="2070:6690"
    />
    <Faq
      items={wordpressPageContent.faqItems}
      titleLines={['Your questions,', 'answered.']}
      variant="light"
    />
    <BackendServices title={wordpressPageContent.backendServicesTitle} />
    <BuiltForAgents />
  </BackendPlatformPage>
);

export default WordpressPage;

export const revalidate = false;

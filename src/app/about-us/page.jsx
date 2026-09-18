import Developers from 'components/pages/about/developers';
import Hero from 'components/pages/about/hero';
import Timeline from 'components/pages/about/timeline';
import Vision from 'components/pages/about/vision';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.aboutUs);

const AboutUsPage = () => (
  <Layout>
    <Hero />
    <Timeline />
    <Vision />
    <Developers />
    <CTANew
      className="mt-0"
      title="See what the engines say about&nbsp;you."
      description="Add a site, pick the prompts your buyers ask, and read the first scan."
      label="7-DAY FREE TRIAL"
      buttonText="Start your free trial"
      buttonUrl={LINKS.signup}
      isExternal
    />
  </Layout>
);

export default AboutUsPage;

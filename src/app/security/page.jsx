import Compliance from 'components/pages/security/compliance';
import Features from 'components/pages/security/features';
import Hero from 'components/pages/security/hero';
import Privacy from 'components/pages/security/privacy';
import SubProcessors from 'components/pages/security/sub-processors';
import TrustCenter from 'components/pages/security/trust-center';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.security);

const SecurityPage = () => (
  <Layout>
    <Hero />
    <Compliance />
    <Privacy />
    <TrustCenter />
    <SubProcessors />
    <Features />
    <CTANew
      label="7-DAY FREE TRIAL"
      title="Still deciding? <br class='xs:hidden' /> Try it on your own site."
      description="Add a site, pick your prompts, and read the first scan."
      buttonText="Start your free trial"
      buttonUrl={LINKS.signup}
      isExternal
    />
  </Layout>
);

export default SecurityPage;

import Hero from 'components/pages/report/hero';
import KeyInsights from 'components/pages/report/key-insights';
import RecoverySolution from 'components/pages/report/recovery-solution';
import RecoveryStories from 'components/pages/report/recovery-stories';
import RecoveryTime from 'components/pages/report/recovery-time';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.report);

const ReportPage = () => (
  <Layout>
    <Hero />
    <KeyInsights />
    <RecoveryStories />
    <RecoveryTime />
    <RecoverySolution />
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

export default ReportPage;

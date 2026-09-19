import Features from 'components/pages/cli/features';
import Hero from 'components/pages/cli/hero';
import Tools from 'components/pages/cli/tools';
import Try from 'components/pages/cli/try';
import Layout from 'components/shared/layout';
import SEO_DATA from 'constants/seo-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.mcp);

const McpPage = () => (
  <Layout>
    <Hero />
    <Tools />
    <Features />
    <Try />
  </Layout>
);

export default McpPage;

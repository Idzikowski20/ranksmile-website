import Cards from 'components/pages/case-studies/cards';
import Hero from 'components/pages/case-studies/hero';
import Testimonials from 'components/pages/case-studies/testimonials';
import CTANew from 'components/shared/cta-new';
import Layout from 'components/shared/layout';
import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';
import {
  getCaseStudiesData,
  getCaseStudiesCategories,
  getCaseStudiesTestimonials,
} from 'utils/api-local-data';
import getMetadata from 'utils/get-metadata';

export const metadata = getMetadata(SEO_DATA.caseStudies);

export const dynamic = 'force-static';

const CaseStudiesPage = () => {
  const caseStudies = getCaseStudiesData();
  const categories = getCaseStudiesCategories();
  const testimonials = getCaseStudiesTestimonials();

  return (
    <Layout>
      <Hero />
      <Testimonials items={testimonials} />
      <Cards items={caseStudies} categories={categories} />
      <CTANew
        label="Get started"
        title="Ready to get started?"
        description="Add a site, pick your prompts, and read the first scan."
        buttonText="Start your free trial"
        buttonUrl={LINKS.signup}
        isExternal
        copyWrapperClassName="lg:max-w-[667px] md:max-w-none"
      />
    </Layout>
  );
};

export default CaseStudiesPage;

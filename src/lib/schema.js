import LINKS from 'constants/links';
import SEO_DATA from 'constants/seo-data';

const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL || 'https://ranksmile.pl';

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ranksmile',
  legalName: 'Globalzone',
  url: SITE_URL,
  description: SEO_DATA.index.description,
  logo: `${SITE_URL}/brand/ranksmile-logo-light.svg`,
  // sameAs is omitted deliberately: the social links in constants/links.js are
  // still Neon's accounts, and asserting them as Ranksmile's in structured data
  // would be a false claim to every crawler that reads this.
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${SITE_URL}${LINKS.contactSales}`,
  },
});

import Link from 'components/shared/link';
import LINKS from 'constants/links';

// Standard footer for docs and FAQ pages. Neon's version was a shared MDX
// include under content/docs/shared-content; it is a component now so the
// content directory holds content and nothing else.
const NeedHelp = () => (
  <>
    <h2 id="need-help">Need help?</h2>
    <p>
      Write to us and a person answers. See the{' '}
      <Link to={LINKS.faqs}>frequently asked questions</Link> first if your question is a common
      one, or <Link to={LINKS.contactSales}>get in touch</Link> for anything else.
    </p>
  </>
);

export default NeedHelp;

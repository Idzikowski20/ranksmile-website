import Container from 'components/shared/container/container';

import Cards from '../cards';

const CARDS = [
  {
    title: 'GDPR, and a DPA on request',
    description:
      'Ranksmile is run by Globalzone, a company based in Poland, so GDPR applies to us directly rather than by contract. We process only what the product needs, you keep your rights over your own data, and a Data Processing Addendum is available on request at <a href="mailto:kontakt@ranksmile.pl">kontakt@ranksmile.pl</a>.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(56,118,103,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#00E599]/20',
  },
  {
    title: 'What we do not have yet',
    description:
      'No SOC 2 report, no ISO/IEC 27001 or 27701 certificate, no HIPAA support, and no third-party penetration test. Ranksmile is not built for protected health information. If an audited certification is a hard requirement for you, we are not there yet, and we would rather write that here than put a badge on the page.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(65,82,139,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4C72EC]/40',
  },
];

const Compliance = () => (
  <section className="compliance relative pt-28 safe-paddings xl:pt-[104px] lg:pt-20 md:pt-16">
    <Container className="relative z-10" size="960">
      <h2 className="text-center font-title text-[44px] leading-[0.9] font-medium tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
        Where we stand today
      </h2>
      <Cards data={CARDS} isPriority />
    </Container>
  </section>
);

export default Compliance;

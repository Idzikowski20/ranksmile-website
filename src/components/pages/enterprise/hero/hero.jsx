import Button from 'components/shared/button';
import Container from 'components/shared/container/container';
import LINKS from 'constants/links';

const Hero = () => (
  <section className="hero relative overflow-hidden pt-[170px] safe-paddings xl:pt-[150px] lg:pt-28 md:pt-24">
    <Container className="relative z-10 flex flex-col items-center text-center" size="medium">
      <h1 className="mx-auto font-title text-[68px] leading-[0.9] font-medium tracking-extra-tight xl:text-[58px] lg:text-5xl md:px-5 md:text-4xl">
        Run every client <br className="xs:hidden" /> from one dashboard
      </h1>
      <p className="mt-4 text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:mt-3 lg:mx-auto lg:max-w-[380px] lg:text-base">
        Rankings, AI answers, audits and drafts, in a separate space for every brand you look after.
      </p>
      <Button
        className="relative mt-8 h-12 w-[156px] text-base font-semibold! tracking-tight lg:mt-7 lg:h-11 md:mt-6"
        theme="primary"
        to={LINKS.pricing}
      >
        See plans
      </Button>
    </Container>
  </section>
);

export default Hero;

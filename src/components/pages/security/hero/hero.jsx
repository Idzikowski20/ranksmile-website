import Container from 'components/shared/container/container';

const Hero = () => (
  <section className="hero relative pt-40 safe-paddings xl:pt-[150px] lg:pt-12 md:pt-10">
    <Container className="relative z-10 flex flex-col items-center text-center" size="960">
      <h1 className="mx-auto font-title text-6xl leading-[0.9] font-medium tracking-extra-tight xl:text-[56px] lg:text-5xl md:text-4xl">
        Security at Ranksmile
      </h1>
      <p className="mx-auto mt-4 max-w-[714px] text-lg leading-snug tracking-extra-tight text-gray-new-80 xl:max-w-[772px] lg:mt-3.5 lg:max-w-[580px] lg:text-base sm:mt-3">
        Ranksmile is a young product, and this page is written that way. It says what we store,
        where it runs, how it is protected, and which certifications we do not hold yet.
      </p>
    </Container>
  </section>
);

export default Hero;

import AnimatedButton from 'components/shared/animated-button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';

const Try = () => (
  <section className="try mt-20 mb-36 safe-paddings md:mt-16 md:mb-32 sm:mt-10 sm:mb-20">
    <Container size="1152">
      <div className="flex flex-col items-center text-center xl:px-8 lg:px-0">
        <Heading
          className="max-w-2xl text-[52px] leading-none font-medium tracking-extra-tight xl:text-[44px] lg:max-w-xl lg:text-4xl md:max-w-md md:text-[32px]"
          tag="h2"
        >
          Connect it in under a&nbsp;minute
        </Heading>
        <p className="mt-4 max-w-xl text-lg leading-snug font-light tracking-extra-tight lg:mt-4 md:mt-2.5 md:text-base">
          Copy the endpoint from Settings, paste it into your&nbsp;agent, approve the consent
          screen. That is the whole setup.
        </p>
        <AnimatedButton
          className="relative mt-12 px-6 py-[17px] text-lg font-semibold tracking-extra-tight lg:mt-7 md:mt-6"
          theme="primary"
          to={LINKS.signup}
          isAnimated
        >
          Start your free trial
        </AnimatedButton>
      </div>
    </Container>
  </section>
);

export default Try;

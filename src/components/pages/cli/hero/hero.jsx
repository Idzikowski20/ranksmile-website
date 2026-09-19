import AnimatedButton from 'components/shared/animated-button';
import Container from 'components/shared/container/container';
import Link from 'components/shared/link/link';
import LINKS from 'constants/links';

import CodeTabs from './code-tabs';

const Hero = () => (
  <section className="hero relative mb-20 overflow-hidden pt-[152px] safe-paddings xl:pt-[120px] lg:pt-11 md:mb-16 md:pt-8 sm:mb-10">
    <Container className="relative z-10 flex flex-col items-center" size="medium">
      <h1 className="mx-auto text-center font-title text-[72px] leading-none font-medium tracking-tighter xl:text-[56px] lg:text-5xl md:text-4xl sm:text-[36px] xs:flat-breaks">
        Give your agent the keys
        <br />
        <span className="text-green-45">to your SEO data</span>
      </h1>
      <p className="mt-4 text-center text-xl leading-snug font-light tracking-extra-tight xl:text-lg lg:mt-4 md:mt-2.5 md:text-base">
        One URL connects Claude, Codex, Gemini or any MCP client to your Ranksmile workspace.
      </p>
      <AnimatedButton
        className="relative mt-9 px-8 py-[17px] text-lg font-semibold tracking-extra-tight lg:mt-7 md:mt-6"
        theme="primary"
        to="#tools"
        linesOffsetTop={22}
        linesOffsetSide={22}
        linesOffsetBottom={40}
        isAnimated
      >
        See what it can do
      </AnimatedButton>
      <CodeTabs className="mt-[60px] w-[760px] lg:w-full" />
      <Link
        className="mt-[18px] flex items-center text-[15px] leading-none tracking-extra-tight"
        to={LINKS.signup}
        theme="green"
        withArrow
        isExternal
      >
        Get your endpoint in Settings
      </Link>
    </Container>
  </section>
);

export default Hero;

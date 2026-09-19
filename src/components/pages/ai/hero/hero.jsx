import Image from 'next/image';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import LINKS from 'constants/links';

import sparks from './images/sparks.png';

const Hero = () => (
  <section className="hero relative mt-[136px] safe-paddings xl:mt-[126px] lg:mt-14 md:mt-12">
    <Container className="lg:max-w-[640px]!" size="832">
      <div className="relative mb-10 size-[72px] lg:mb-8 lg:size-16 lg:rounded-[14px] md:mb-7 md:size-14">
        <Image
          className="relative z-10 size-full rounded-2xl shadow-[0px_5px_14px_0px_rgba(0,0,0,0.6)] md:rounded-xl"
          src={sparks}
          alt=""
          width={72}
          height={72}
          quality={100}
          priority
        />
        <span
          className="absolute -top-1 -right-1 size-1/2 rounded-full bg-[#4265CD] blur-xl"
          aria-hidden
        />
        <span
          className="absolute -bottom-1 -left-1 size-1/2 rounded-full bg-[#39D6BE] blur-xl"
          aria-hidden
        />
      </div>
      <h1 className="max-w-3xl font-title text-[60px] leading-none font-medium tracking-extra-tight xl:text-[56px] lg:max-w-xl lg:text-5xl md:max-w-full md:text-[36px]">
        Smily AI.{' '}
        <span className="text-gray-new-60">
          The writer that sits in your editor, reads the <br className="hidden md:inline-block" />
          score, and fixes the page.
        </span>
      </h1>
      <p className="mt-6 max-w-[620px] text-lg leading-snug tracking-extra-tight text-gray-new-70 lg:mt-5 lg:text-base md:mt-4">
        Smily is in <strong className="font-medium text-white">pre alpha</strong>. It works, the app
        labels it as such, and this page does too. Attachments are not in yet.
      </p>
      <Button
        className="mt-9 h-12 min-w-40 px-[38px] font-semibold tracking-tighter lg:mt-7 md:mt-6 md:h-11 md:min-w-min md:px-10"
        theme="primary"
        to={LINKS.signup}
        target="_blank"
        tagName="Smily AI Hero"
      >
        Get started
      </Button>
    </Container>
  </section>
);

export default Hero;

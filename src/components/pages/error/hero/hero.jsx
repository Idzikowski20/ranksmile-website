'use client';

import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Link from 'components/shared/link';

import illustration from './images/illustration.png';

const CTA = ({ reset }) => (
  <div className="flex items-center gap-6 lg:gap-4">
    <Button size="xs" theme="primary" onClick={reset}>
      Try again
    </Button>
    <Link className="whitespace-nowrap" size="sm" theme="green" to="/" withArrow>
      Back to Home
    </Link>
  </div>
);

CTA.propTypes = {
  reset: PropTypes.func,
};

const Hero = ({ title, text, reset }) => (
  <section className="flex grow flex-col pt-16 pb-24 dark:bg-black-pure dark:text-white lg:pt-0 md:py-14 xs:pt-10">
    <Container
      className="grid grow grid-cols-12 items-center gap-x-8 md:gap-x-0 md:gap-y-4"
      size="md"
    >
      <div className="col-start-2 col-end-6 flex flex-col 2xl:col-start-1 lg:col-end-7 md:col-span-full">
        <h1 className="font-title text-[58px] leading-none font-medium xl:text-5xl xl:leading-none lg:text-4xl">
          Ooops!
          <br />
          {title}
        </h1>
        <p className="t-xl mt-7 max-w-md sm:mt-4">{text}</p>
        <div className="mt-11 w-full lg:mt-8 sm:mt-6">
          <CTA reset={reset} />
        </div>
      </div>

      <div className="col-start-6 col-end-12 2xl:col-end-13 lg:col-start-7 md:col-span-full">
        <Image
          className="w-full md:mx-auto md:max-w-xl"
          width={860}
          height={862}
          src={illustration}
          alt="Illustration"
          quality={75}
          priority
        />
      </div>
    </Container>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  reset: PropTypes.func,
};

export default Hero;

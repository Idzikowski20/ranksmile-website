import Container from 'components/shared/container';

import FeatureHeading from './feature-heading';

const ScaleStat = () => (
  <div className="h-[330px] w-[736px] border border-[#242628] bg-black-pure p-1 xl:h-80 xl:w-160 lg:w-md md:h-[286px] md:w-sm sm:h-auto sm:w-full">
    <div className="flex h-[37px] items-center justify-between bg-[#303236] px-3 font-mono text-base font-semibold text-white md:text-sm">
      <span>Built for agencies</span>
    </div>
    <div className="px-[27px] pt-[92px] xl:pt-20 md:px-5 md:pt-15 sm:py-5">
      <strong className="block text-[98px] leading-none font-normal tracking-extra-tight text-white md:text-[5rem] sm:text-[4rem]">
        250
      </strong>
      <p className="mt-[18px] max-w-70 text-xl leading-tight tracking-extra-tight text-pretty text-gray-new-80 md:mt-4 md:max-w-3xs md:text-lg sm:max-w-56 sm:text-base">
        AI prompts a day on Agency, across all five engines
      </p>
    </div>
  </div>
);

const Scale = () => (
  <div className="relative overflow-hidden py-32 xl:py-28 lg:py-20 md:py-16">
    <Container className="relative z-10" size="1600">
      <FeatureHeading
        className="ml-24 lg:ml-0"
        lines={[
          { text: 'WHERE AGENCIES', width: 672 },
          { text: 'SCALE', width: 544 },
        ]}
        description="Every client brand in its own space, on one login."
        descriptionClassName="max-w-[440px] lg:max-w-[400px] md:max-w-[360px] sm:max-w-[290px]"
      />
      <div className="mt-20 ml-24 xl:mt-16 lg:mt-12 lg:ml-0 md:mt-10 md:flex md:justify-center">
        <ScaleStat />
      </div>
    </Container>
  </div>
);

export default Scale;

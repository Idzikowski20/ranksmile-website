import Container from 'components/shared/container';
import Link from 'components/shared/link';
import { cn } from 'utils/cn';

import IconCost from './images/icon-cost.inline.svg';
import IconEasy from './images/icon-easy.inline.svg';
import IconPostgres from './images/icon-postgres.inline.svg';
import IconReliable from './images/icon-reliable.inline.svg';

const FEATURES_DATA = [
  {
    icon: IconPostgres,
    title: 'Open roots',
    description:
      'The rank tracker at the core of Ranksmile grew out of SerpBear, released as open source by Towfiq I. in 2022.',
  },
  {
    icon: IconEasy,
    title: 'One place',
    description:
      'Rankings, AI answers, keywords, audits and the editor share one project, so nothing has to be copied between tabs.',
  },
  {
    icon: IconCost,
    title: 'One price',
    description:
      'Flat monthly plans with the limits printed on the pricing page. No per-seat math, no quote to request.',
  },
  {
    icon: IconReliable,
    title: 'Traceable',
    description:
      'Every score opens back to what produced it: the answer the engine returned and the sources it cited.',
  },
];

const Developers = () => (
  <section className="developers bg-black-pure safe-paddings">
    <h2 className="sr-only">Why Ranksmile is built this way</h2>
    <Container
      size="small"
      className="pt-[153px] pb-[200px] xl:px-32 xl:pt-[136px] xl:pb-[184px] lg:pt-[108px] lg:pb-[136px] md:pt-[88px] md:pb-[104px]"
    >
      <p className="max-w-[800px] text-[64px] leading-none font-normal tracking-[-0.05em] text-white xl:max-w-[696px] xl:text-[56px] lg:max-w-[544px] lg:text-[44px] md:max-w-full md:text-[32px]">
        Built by people who were paying for four tools to answer one&nbsp;question.
      </p>

      <ul className="mt-40 grid grid-cols-4 gap-x-20 xl:mt-[136px] xl:grid-cols-2 xl:gap-[72px] lg:mt-28 lg:gap-16 md:mt-20 md:grid-cols-1 md:gap-y-14">
        {FEATURES_DATA.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <li
              key={index}
              className={cn(
                'relative flex flex-col',
                {
                  'before:absolute before:top-0 before:-left-6 before:h-full before:w-px before:bg-gray-new-20 md:before:hidden':
                    index > 0,
                },
                {
                  'after:absolute after:-top-7 after:left-0 after:hidden after:h-px after:w-full after:-translate-y-1/2 after:bg-gray-new-20 md:after:block':
                    index > 0,
                },
                { 'xl:before:hidden': index === 0 || index === 2 },
                { 'xl:before:-left-9 xl:before:-translate-x-1/2': index === 1 || index === 3 }
              )}
            >
              <Icon
                className="h-14 w-14 shrink-0 xl:h-[52px] xl:w-[52px] lg:h-11 lg:w-11 md:h-9 md:w-9"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-[32px] leading-tight font-normal tracking-extra-tight text-white xl:mt-6 xl:text-[28px] lg:mt-5 lg:text-2xl md:mt-[18px]">
                {feature.title}
              </h3>
              <p className="mt-10 text-base leading-normal font-normal tracking-extra-tight text-gray-new-60 xl:mt-9 lg:mt-7 md:mt-5">
                {feature.description}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-32 max-w-[800px] border-t border-gray-new-20 pt-8 text-base leading-normal font-normal tracking-extra-tight text-gray-new-60 xl:mt-28 lg:mt-24 lg:max-w-[544px] md:mt-16 md:text-[15px]">
        Credits: Ranksmile is built by Globalzone. The rank tracker it started from is{' '}
        <Link className="text-white" to="https://github.com/towfiqi/serpbear" isExternal>
          SerpBear
        </Link>
        , released under the MIT license by Towfiq I. in 2022. This website started from{' '}
        <Link className="text-white" to="https://github.com/neondatabase/website" isExternal>
          Neon&apos;s open-source site
        </Link>{' '}
        and still carries a lot of its design.
      </p>
    </Container>
  </section>
);

export default Developers;

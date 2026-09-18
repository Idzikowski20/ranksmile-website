import Image from 'next/image';

import Container from 'components/shared/container';
import LINKS from 'constants/links';
import authIcon from 'icons/pricing/features/auth.svg';
import autoscalingIcon from 'icons/pricing/features/autoscaling.svg';
import connectionsIcon from 'icons/pricing/features/connections.svg';
import extensionsIcon from 'icons/pricing/features/extensions.svg';
import monitoringIcon from 'icons/pricing/features/monitoring.svg';
import replicasIcon from 'icons/pricing/features/replicas.svg';
import securityIcon from 'icons/pricing/features/security.svg';
import storageIcon from 'icons/pricing/features/storage.svg';
import { cn } from 'utils/cn';

const FEATURES = [
  {
    icon: storageIcon,
    title: 'AI Visibility.',
    description: `Every tracked prompt is sent to the engines on your plan, and the answer is stored with the sources it cited.`,
  },
  {
    icon: replicasIcon,
    title: 'Content Score.',
    description: `The editor grades terms, headings, structure and length live, against the pages already winning the query.`,
  },
  {
    icon: autoscalingIcon,
    title: 'Rank tracking.',
    description: `Checked on the schedule you set, desktop and mobile, per country, with history you can read back.`,
  },
  {
    icon: monitoringIcon,
    title: 'Search Console performance.',
    description: `Connect Google Search Console and read clicks and impressions next to your tracked positions.`,
  },
  {
    icon: connectionsIcon,
    title: 'Recommendations.',
    description: `Every gap, drop and opportunity lands in one ranked task list per site, sorted by impact.`,
  },
  {
    icon: extensionsIcon,
    title: 'WordPress publishing.',
    description: `The Ranksmile plugin pushes a finished draft straight to your site with headings, links and images intact.`,
  },
  {
    icon: authIcon,
    title: 'MCP access.',
    description: `Connect Claude, Codex or your own agent and let it read your visibility data and drive the editor.`,
  },
  {
    icon: securityIcon,
    title: 'GDPR compliance.',
    description: `Included on every plan, with a DPA available. See the <a href="${LINKS.legalHub}">legal hub</a>.`,
  },
];

const Features = () => (
  <section className="features mt-[200px] scroll-mt-5 px-safe xl:mt-[184px] lg:mt-40 md:mt-[104px]">
    <Container size="1152" className="px-8">
      <h2
        className={cn(
          'indent-24 text-5xl leading-dense tracking-tighter text-pretty text-gray-new-50 lg:indent-16 md:indent-0',
          'xl:px-8 xl:text-[40px] lg:px-5 lg:text-[28px] lg:text-wrap md:text-[24px] sm:px-0',
          '[&>strong]:font-normal [&>strong]:text-white'
        )}
      >
        <strong>Included on every plan, by default.</strong> What changes between tiers is volume,
        not which parts of Ranksmile you get to use.
      </h2>
      <ul
        className={cn(
          'mt-16 -ml-8 grid grid-cols-3 gap-x-[85px]',
          'xl:ml-0 xl:gap-x-5 xl:pr-5',
          'lg:mt-12 lg:grid-cols-2 md:mt-10 sm:grid-cols-1 sm:gap-y-7'
        )}
      >
        {FEATURES.map(({ icon, title, description }) => (
          <li
            className={cn(
              'flex flex-col gap-[18px] border-l border-gray-new-20',
              'py-2 pl-8 nth-[n+4]:pt-14',
              'xl:px-6 xl:py-0 xl:nth-[n+4]:pt-10',
              'lg:gap-4 lg:px-[18px] lg:py-1.5 lg:nth-[n+3]:pt-[38px]',
              'md:border-0 sm:gap-3 sm:p-0!'
            )}
            key={title}
          >
            <Image
              className="size-6 lg:size-5 sm:size-4"
              src={icon}
              width={24}
              height={24}
              alt=""
              loading="lazy"
            />
            <div className="text-lg/normal tracking-extra-tight lg:text-base lg:leading-snug sm:text-[15px]">
              <h3 className="inline text-white">{title}</h3>{' '}
              <p
                className={cn(
                  'inline text-gray-new-50',
                  '[&_a]:border-b [&_a]:border-dashed [&_a]:border-white/40 [&_a]:text-gray-new-70',
                  '[&_a]:transition-colors [&_a]:duration-200',
                  '[&_a:hover]:border-gray-new-70'
                )}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Features;

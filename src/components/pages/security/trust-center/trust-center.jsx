import Image from 'next/image';

import Container from 'components/shared/container/container';
import cloudIcon from 'icons/security/cloud.svg';
import dataIcon from 'icons/security/data.svg';
import privacyIcon from 'icons/security/privacy.svg';
import tableIcon from 'icons/security/table.svg';
import userLockIcon from 'icons/security/user-lock.svg';

const FEATURES = [
  {
    title: 'Application',
    description: 'The Next.js app and its background workers run on Railway.',
    icon: cloudIcon,
  },
  {
    title: 'Database',
    description: 'Neon serverless Postgres holds every project, scan and draft.',
    icon: dataIcon,
  },
  {
    title: 'Sign-in',
    description: 'Neon Auth issues the session. Ranksmile never stores a password.',
    icon: privacyIcon,
  },
  {
    title: 'Files',
    description: 'Generated images and exports go to Cloudflare R2 object storage.',
    icon: tableIcon,
  },
  {
    title: 'Payments',
    description: 'Stripe handles checkout, cards and invoices. We never see a card number.',
    icon: userLockIcon,
  },
];

const TrustCenter = () => (
  <section className="trust-center relative pt-40 safe-paddings xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
    <Container className="relative z-10" size="960">
      <div className="flex gap-[72px] lg:mr-[52px] lg:justify-center lg:gap-9 md:mr-0 sm:flex-col sm:gap-10">
        <div className="w-[280px] shrink-0 lg:w-[328px] md:w-1/2 sm:w-full">
          <h2 className="font-title text-[44px] leading-[0.9] font-medium tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[32px]">
            What it runs on
          </h2>
          <div className="mt-4 flex flex-col gap-2 text-with-links leading-snug tracking-extra-tight text-gray-new-70 lg:text-[15px]">
            <p>
              Five services, each one named. If a question about any of them is not answered on this
              page, ask and we will answer it directly.
            </p>
            <p>
              Security questions and vulnerability reports go to{' '}
              <a href="mailto:kontakt@ranksmile.pl">kontakt@ranksmile.pl</a>. We read them
              ourselves, and we reply.
            </p>
          </div>
        </div>
        <div className="mt-4 grid grow grid-cols-2 gap-x-8 gap-y-9 lg:mt-2 lg:max-w-[290px] lg:grid-cols-1 lg:gap-7 md:max-w-full sm:mt-0">
          {FEATURES.map(({ title, description, icon }) => (
            <div key={title}>
              <div className="flex items-start gap-2">
                <Image className="shrink-0" src={icon} alt={title} width={22} height={22} />
                <h3 className="text-lg leading-snug font-medium tracking-extra-tight sm:text-base">
                  {title}
                </h3>
              </div>
              <p className="mt-2 leading-snug font-light tracking-extra-tight text-pretty text-gray-new-70 sm:text-[15px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

export default TrustCenter;

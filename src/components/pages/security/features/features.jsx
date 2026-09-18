import Container from 'components/shared/container';
import accessIcon from 'icons/security/access.svg';
import bugIcon from 'icons/security/bug.svg';
import chartsIcon from 'icons/security/charts.svg';
import checkPrivacyIcon from 'icons/security/check-privacy.svg';
import circuitIcon from 'icons/security/circuit.svg';
import dataLockIcon from 'icons/security/data-lock.svg';
import dataReplaceIcon from 'icons/security/data-replace.svg';
import dataTransitIcon from 'icons/security/data-transit.svg';
import keyIcon from 'icons/security/key.svg';
import policyIcon from 'icons/security/policy.svg';
import radarIcon from 'icons/security/radar.svg';
import restoreIcon from 'icons/security/restore.svg';
import segregationIcon from 'icons/security/segregation.svg';
import serverIcon from 'icons/security/server.svg';
import userLockIcon from 'icons/security/user-lock.svg';
import warningIcon from 'icons/security/warning.svg';

import Slider from './slider';

const DATA = [
  {
    title: 'Where it runs',
    items: [
      {
        title: 'Hosting',
        description:
          'The Next.js app, the API and the background workers run on Railway. Everything is served over HTTPS, and nothing is hosted on machines we own.',
        icon: serverIcon,
      },
      {
        title: 'Database',
        description:
          'A single Neon serverless Postgres project holds every account, site, keyword, scan and draft. Neon runs it on AWS infrastructure.',
        icon: dataLockIcon,
      },
      {
        title: 'Region',
        description:
          'Ranksmile is a European company and production data belongs in an EU region. Our current project sits in a US region, which is why this reads as a plan and not a guarantee. Ask before you sign if it matters to you.',
        icon: policyIcon,
      },
      {
        title: 'Isolation',
        description:
          'Every row belongs to a site and every site belongs to an account. Queries are scoped by that ownership, so one account cannot read another account\u2019s scans.',
        icon: segregationIcon,
      },
    ],
  },
  {
    title: 'Encryption',
    items: [
      {
        title: 'Data in transit',
        description:
          'Traffic to the app is HTTPS. The connection to Postgres requires TLS, and a connection string without it is refused.',
        icon: dataTransitIcon,
      },
      {
        title: 'Data at rest',
        description:
          'Stored database data is encrypted by Neon, and files in Cloudflare R2 are encrypted by Cloudflare. We do not run our own disks.',
        icon: dataLockIcon,
      },
      {
        title: 'WordPress plugin keys',
        description:
          'Sealed with AES-256-GCM under a dedicated secret and indexed by a SHA-256 hash. The secret is not shared with the database URL or the auth config, so rotating one does not orphan the other.',
        icon: keyIcon,
      },
    ],
  },
  {
    title: 'Accounts and access',
    items: [
      {
        title: 'Sign-in',
        description:
          'Neon Auth issues and validates the session. Ranksmile never stores a password and never sees one.',
        icon: userLockIcon,
      },
      {
        title: 'Scheduled jobs',
        description:
          'The scan scheduler and the other cron routes authenticate with a shared secret that supports a current and a previous value, so it can be rotated without a window of downtime.',
        icon: accessIcon,
      },
      {
        title: 'Internal calls',
        description:
          'The generation pipeline and the Python sidecar authenticate to each other with their own tokens rather than riding on a user session.',
        icon: circuitIcon,
      },
      {
        title: 'No MFA yet',
        description:
          'Multi-factor authentication is not implemented. It is on the list, and until it ships this line stays here.',
        icon: warningIcon,
      },
    ],
  },
  {
    title: 'Backups and recovery',
    items: [
      {
        title: 'Point-in-time restore',
        description:
          'The production database runs on a Neon paid plan with a seven-day restore window, so the database can be rolled back to any moment inside it.',
        icon: restoreIcon,
      },
      {
        title: 'Snapshots',
        description:
          'Snapshots are taken before migrations and other changes we expect to be disruptive, and kept alongside the restore window.',
        icon: dataReplaceIcon,
      },
      {
        title: 'What is missing',
        description:
          'There is no second backup with a different provider and no rehearsed disaster recovery drill. Today, recovery means Neon\u2019s restore window.',
        icon: warningIcon,
      },
    ],
  },
  {
    title: 'Monitoring',
    items: [
      {
        title: 'Errors',
        description:
          'Sentry captures exceptions from the app and the workers, tagged by release and environment.',
        icon: radarIcon,
      },
      {
        title: 'Model calls',
        description:
          'Generation traffic is logged through Helicone, which is how we see cost, latency and failures per provider.',
        icon: chartsIcon,
      },
      {
        title: 'No on-call rota',
        description:
          'There is no 24/7 response team. Ranksmile is a small team, alerts reach people directly, and we do not want to imply otherwise.',
        icon: warningIcon,
      },
    ],
  },
  {
    title: 'Reporting a problem',
    items: [
      {
        title: 'Where to send it',
        description:
          'Email kontakt@ranksmile.pl with what you found and how to reproduce it. It reaches the people who write the code, not a ticket queue.',
        icon: bugIcon,
      },
      {
        title: 'What happens next',
        description:
          'We acknowledge the report, tell you what we found, and tell you when it is fixed. If we decide not to fix something, you get that answer too.',
        icon: checkPrivacyIcon,
      },
      {
        title: 'No bug bounty',
        description:
          'There is no paid bounty programme and no HackerOne listing. Reports are still welcome, and credit is offered if you want it.',
        icon: warningIcon,
      },
    ],
  },
];

const Features = () => (
  <section className="features relative overflow-hidden pt-[168px] safe-paddings xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
    <Container className="relative z-10" size="960">
      <h2 className="sr-only">Features</h2>
      <div className="flex flex-col gap-[136px] xl:gap-[104px] lg:gap-16">
        {DATA.map((item, index) => (
          <Slider key={index} {...item} />
        ))}
      </div>
    </Container>
  </section>
);

export default Features;

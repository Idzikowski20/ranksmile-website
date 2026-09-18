import Container from 'components/shared/container/container';

import Cards from '../cards';

const CARDS = [
  {
    title: 'Your sites, keywords and drafts',
    description:
      'A project holds the domains you track, the keywords and prompts you picked, the answers the engines returned, and the drafts you wrote. That is the bulk of what we hold, and it is yours. We do not sell it and we do not train our own models on it. Drafts and prompts are sent to the AI providers listed below only when you ask for a generation or a scan.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(56,118,103,0.6),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4CECB7]/20',
  },
  {
    title: 'Your account and your billing',
    description:
      'Sign-in runs through Neon Auth, so Ranksmile never stores a password. Payments run through Stripe, which holds the card details. What stays with us is your plan, your invoices and your usage counts.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(65,82,139,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4C72EC]/40',
  },
  {
    title: 'Your connected WordPress site',
    description:
      'The plugin key has to be handed back to your site on publish, so it cannot be hash-only. It is stored sealed with AES-256-GCM and looked up by its SHA-256 hash, under a dedicated secret that is not reused anywhere else. Nothing else from your WordPress install is copied.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(56,118,103,0.6),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4CECB7]/20',
  },
  {
    title: 'How long we keep it',
    description:
      'Scan results and rank history are kept for one month on the current plans, then rolled up into the history you see on the charts. Delete a site and its keywords, prompts and stored answers go with it. Ask us to close your account and the rest follows.',
    borderClassName:
      'border-image-[radial-gradient(35%_50%_at_0_0,rgba(65,82,139,0.8),transparent),linear-gradient(0deg,#242628,#242628)]',
    highlightClassName: 'bg-[#4C72EC]/40',
  },
];

const Privacy = () => (
  <section className="compliance relative pt-40 safe-paddings xl:pt-[136px] lg:pt-[120px] md:pt-[104px]">
    <Container className="relative z-10" size="960">
      <h2 className="text-center font-title text-[44px] leading-[0.9] font-medium tracking-extra-tight xl:text-4xl lg:text-[36px] md:text-[28px]">
        What Ranksmile stores
      </h2>
      <Cards data={CARDS} />
    </Container>
  </section>
);

export default Privacy;

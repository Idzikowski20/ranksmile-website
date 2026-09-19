import CardItemsList from 'components/shared/card-items-list';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import LINKS from 'constants/links';
import contributeIcon from 'icons/cli/contribute.svg';
import scriptIcon from 'icons/cli/script.svg';
import workflowIcon from 'icons/cli/workflow.svg';

const items = [
  {
    icon: workflowIcon.src,
    title: 'Ask why, not just what',
    description:
      'Your agent reads the score breakdown, not&nbsp;the number: every NLP term, every count against its&nbsp;target.',
    linkText: 'See the Content Score',
    url: LINKS.contentScore,
  },
  {
    icon: scriptIcon.src,
    title: 'Work without the app',
    description:
      'Pull rankings, AI answers and drafts into whatever you&nbsp;already work&nbsp;in.',
    linkText: 'See AI Visibility',
    url: LINKS.aiVisibility,
  },
  {
    icon: contributeIcon.src,
    title: 'Read-only by design',
    description: 'Every tool reads. Nothing writes, nothing&nbsp;publishes, nothing deletes.',
    linkText: 'How we handle your data',
    url: LINKS.security,
  },
];

const Features = () => (
  <section className="features my-20 safe-paddings md:my-16 sm:my-10">
    <Container size="960">
      <Heading
        className="mx-auto max-w-3xl text-center text-[52px] leading-none font-medium tracking-extra-tight xl:max-w-[640px] xl:text-[44px] lg:max-w-xl lg:text-4xl md:max-w-md md:text-[32px]"
        tag="h2"
      >
        Stop copying numbers between tabs. Let the agent read them
      </Heading>
      <CardItemsList
        className="mt-14 gap-x-[18px] xl:mt-10 xl:gap-x-6 lg:gap-x-4 md:mt-8 md:gap-y-4"
        items={items}
        size="lg"
      />
    </Container>
  </section>
);

export default Features;

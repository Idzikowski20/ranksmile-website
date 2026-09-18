import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';

import Animation from './animation';

const BENEFITS = [
  {
    title: "Ask, don't dig",
    description:
      'Smily answers in the editor side panel: what changed, which prompt you lost, what to publish next.',
  },
  {
    title: 'Brand Spaces',
    description:
      'Every client or product gets its own space, with its own prompts, competitors and rankings.',
  },
  {
    title: 'Scheduled, not manual',
    description:
      'Automations run the content calendar and the scheduler re-checks each prompt at its own cadence.',
  },
];

const OperateWithAgents = () => (
  <section
    className="operate-with-agents relative mt-40 overflow-hidden bg-black-pure safe-paddings text-white 2xl:mt-32 md:mt-28 sm:mt-24"
    id="operate-with-agents"
    aria-labelledby="operate-with-agents-heading"
  >
    <Container
      className="grid grid-cols-[22rem_minmax(0,1fr)] gap-y-[70px] xl:grid-cols-[16rem_minmax(0,1fr)] xl:items-center xl:gap-y-14 lg:grid-cols-1 lg:items-start lg:gap-y-10 md:gap-y-8"
      size="1600"
    >
      <div className="pt-3.25 lg:pt-0">
        <SectionLabel theme="white">WORK IT WITH AGENTS</SectionLabel>
        <span
          className="mt-4.25 block font-mono text-[8rem] leading-none tracking-tighter text-gray-new-10 xl:text-[6rem] md:mt-2 md:text-[5rem]"
          aria-hidden="true"
        >
          02
        </span>
      </div>

      <header className="min-w-0">
        <h2
          className="ml-px max-w-[1182px] indent-24 text-5xl leading-dense font-normal tracking-tighter text-pretty text-gray-new-50 2xl:text-[2.75rem] xl:ml-0 xl:indent-16 xl:text-[2.25rem] lg:indent-0 md:text-[1.75rem]"
          id="operate-with-agents-heading"
        >
          <span className="text-white">Ready for your agents.</span> Connect Claude, Codex or any
          agent over MCP and let it read your visibility data and drive the editor.
        </h2>
      </header>

      <ul className="flex max-w-64 min-w-0 flex-col gap-12 pt-[50px] lg:grid lg:w-full lg:max-w-none lg:grid-cols-3 lg:gap-x-10 lg:pt-0 md:flex md:max-w-lg md:flex-col md:gap-8">
        {BENEFITS.map(({ title, description }) => (
          <li className="flex flex-col gap-2" key={title}>
            <h3 className="text-base leading-tight font-normal tracking-extra-tight text-white">
              {title}
            </h3>
            <p className="text-base leading-tight font-normal tracking-extra-tight text-gray-new-50">
              {description}
            </p>
          </li>
        ))}
      </ul>

      <div className="pointer-events-none w-full">
        <Animation />
      </div>
    </Container>
  </section>
);

export default OperateWithAgents;

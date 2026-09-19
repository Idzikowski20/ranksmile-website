import Container from 'components/shared/container';
import Heading from 'components/shared/heading';

const GROUPS = [
  {
    title: 'Workspaces and sites',
    description: 'Where everything hangs off: the brands, domains and projects on the account.',
    tools: [
      {
        name: 'workspace__list',
        description: 'Every workspace the connected account can reach, with its primary domain.',
      },
      {
        name: 'site__get',
        description: 'One site: its domain, its tracked countries, and when it was last crawled.',
      },
    ],
  },
  {
    title: 'Articles and content scores',
    description:
      'The editor side. This is where an agent finds out why a draft scores the way it does.',
    tools: [
      {
        name: 'article__list',
        description:
          'Articles with their stored scores and word counts. Filter by workspace or status.',
      },
      {
        name: 'article__get',
        description: 'One article: metadata, stored scores, and optionally the HTML body.',
      },
      {
        name: 'article__score',
        description:
          'The per-slot breakdown: word, heading and paragraph counts against competitor-derived targets, and every NLP term with its current and required usage.',
      },
      {
        name: 'article__optimize_log',
        description:
          'Auto-Optimize history: score and length before and after, the mode, the phase, and the rejection reason when a run changed nothing.',
      },
      {
        name: 'article__jobs',
        description:
          'Recent generation jobs with status, payload and result, so you can see what the generator was told and what it returned.',
      },
    ],
  },
  {
    title: 'AI visibility',
    description:
      'What the answer engines said, stored whole, with the sources they cited and the brands they named.',
    tools: [
      {
        name: 'visibility__score',
        description:
          'The Visibility Score per engine: the share of tracked prompts where the brand is named, with the previous value beside it.',
      },
      {
        name: 'prompt__list',
        description: 'Tracked prompts by topic, with their priority tier and last scan time.',
      },
      {
        name: 'prompt__answer',
        description:
          'One stored answer: the text an engine returned, the URLs it cited, the brands it named with sentiment, and the fanout queries it expanded into.',
      },
      {
        name: 'competitor__list',
        description: 'The brands named beside you or instead of you, ranked by how often.',
      },
      {
        name: 'source__list',
        description:
          'The URLs the engines lean on for your queries, and which brands each source mentions.',
      },
    ],
  },
  {
    title: 'Rank tracking',
    description:
      'Classic Google positions on the schedule you set, desktop and mobile, by country.',
    tools: [
      {
        name: 'keyword__list',
        description: 'Tracked keywords with current position, previous position and the delta.',
      },
      {
        name: 'keyword__history',
        description: 'The position history for one keyword, per device and per country.',
      },
      {
        name: 'search_console__performance',
        description:
          'Impressions, clicks and average position from Search Console for a page or a query.',
      },
    ],
  },
  {
    title: 'Research and audits',
    description: 'The inputs to the next thing you write.',
    tools: [
      {
        name: 'keyword__research',
        description: 'A seed keyword expanded into related queries with volume and difficulty.',
      },
      {
        name: 'keyword__gap',
        description: 'The queries a competitor ranks for and you do not.',
      },
      {
        name: 'audit__issues',
        description: 'Site Audit findings for a crawl, grouped by severity.',
      },
      {
        name: 'recommendation__list',
        description:
          'The ranked task list per site: what to write or fix next, sorted by what moves visibility fastest.',
      },
    ],
  },
];

const Tools = () => (
  <section className="tools my-20 scroll-mt-20 safe-paddings md:my-16 sm:my-10" id="tools">
    <Container size="960">
      <Heading
        className="mx-auto max-w-3xl text-center text-[52px] leading-none font-medium tracking-extra-tight xl:max-w-[640px] xl:text-[44px] lg:max-w-xl lg:text-4xl md:max-w-md md:text-[32px]"
        tag="h2"
      >
        What your agent can ask for
      </Heading>
      <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-snug font-light tracking-extra-tight text-gray-new-70 lg:max-w-xl md:mt-4 md:text-base">
        Every tool reads. Nothing writes, nothing publishes, nothing deletes, and each call
        re-derives what the connected account is allowed to see.
      </p>

      <div className="mt-14 flex flex-col gap-12 xl:mt-10 md:mt-8 md:gap-10">
        {GROUPS.map(({ title, description, tools }) => (
          <div key={title}>
            <h3 className="text-2xl leading-tight font-medium tracking-extra-tight lg:text-xl">
              {title}
            </h3>
            <p className="mt-2 max-w-2xl leading-snug font-light tracking-extra-tight text-gray-new-70">
              {description}
            </p>
            <ul className="mt-6 flex flex-col gap-4 md:mt-5">
              {tools.map(({ name, description: toolDescription }) => (
                <li
                  className="flex gap-x-6 border-t border-gray-new-15 pt-4 md:flex-col md:gap-y-1.5"
                  key={name}
                >
                  <code className="w-[264px] shrink-0 font-mono text-[15px] leading-snug text-green-45 xl:w-[232px] md:w-auto">
                    {name}
                  </code>
                  <p className="leading-snug font-light tracking-extra-tight text-gray-new-70">
                    {toolDescription}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default Tools;

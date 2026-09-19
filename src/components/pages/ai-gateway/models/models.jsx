import Container from 'components/shared/container';
import { siteAuditPageContent } from 'constants/backend-platform-page-content';

const { crawlers } = siteAuditPageContent;

const Crawlers = () => (
  <section
    id="crawlers"
    className="relative mt-40 pb-0 lg:mt-24 md:mt-18"
    aria-labelledby="crawlers-heading"
  >
    <Container size="1344">
      <h2
        id="crawlers-heading"
        className="max-w-224 text-[2.75rem] leading-[1.15] font-normal tracking-tighter text-pretty text-white xl:text-[2.5rem] lg:text-[2.125rem] md:text-[1.75rem]"
      >
        {crawlers.title} <span className="text-gray-new-50">{crawlers.highlightedTitle}</span>
      </h2>
      <p className="mt-6 max-w-165 text-[1.25rem] leading-normal tracking-extra-tight text-pretty text-gray-new-60 lg:mt-5 lg:text-[1.125rem] md:mt-4">
        {crawlers.description}
      </p>

      <ul className="mt-14 grid grid-cols-2 gap-x-16 gap-y-8 lg:mt-10 lg:gap-x-10 md:mt-8 md:grid-cols-1 md:gap-y-6">
        {crawlers.items.map(({ name, description }) => (
          <li className="border-t border-gray-new-20 pt-5 md:pt-4" key={name}>
            <code className="font-mono text-[1.0625rem] leading-none tracking-extra-tight text-green-45">
              {name}
            </code>
            <p className="mt-2.5 leading-snug tracking-extra-tight text-pretty text-gray-new-60 md:mt-2">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  </section>
);

export default Crawlers;

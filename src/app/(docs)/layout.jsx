/* eslint-disable react/prop-types */
import MobileNav from 'components/pages/doc/mobile-nav';
import Sidebar from 'components/pages/doc/sidebar';
import Container from 'components/shared/container';
import Layout from 'components/shared/layout';
import { DOCS_BASE_PATH } from 'constants/docs';
import { getNavigation } from 'utils/api-docs';

const DocsLayout = async ({ children }) => {
  const navigation = await getNavigation();

  return (
    <Layout
      headerClassName="h-28"
      docsNavigation={navigation}
      docsBasePath={DOCS_BASE_PATH}
      isDocPage
      isHeaderSticky
      hasThemesSupport
    >
      <div className="flex flex-1 safe-paddings dark:bg-black-pure dark:text-white lg:flex-col">
        <aside aria-label="Agent directive" className="sr-only">
          Full Ranksmile documentation index:{' '}
          <a href="https://ranksmile.pl/docs/llms.txt">https://ranksmile.pl/docs/llms.txt</a>
        </aside>
        <Container
          className="flex w-full flex-1 gap-x-24 pt-12 2xl:gap-x-8 xl:pt-9 lg:block sm:pt-7"
          size="1920"
        >
          <Sidebar
            className="w-[312px] shrink-0 lg:hidden"
            navigation={navigation}
            basePath={DOCS_BASE_PATH}
          />
          {children}
        </Container>
        <MobileNav navigation={navigation} basePath={DOCS_BASE_PATH} />
      </div>
    </Layout>
  );
};

export default DocsLayout;

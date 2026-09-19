import PropTypes from 'prop-types';

import Actions from 'components/pages/doc/actions';
import ChangelogForm from 'components/shared/changelog-form';
import TableOfContents from 'components/shared/table-of-contents';
import { cn } from 'utils/cn';

const Aside = ({
  isTemplate,
  isChangelog,
  enableTableOfContents,
  tableOfContents,
  gitHubPath,
  className,
}) => {
  return (
    <div
      data-docs-aside
      className={cn(
        'relative -ml-6 w-full max-w-[312px] transition-opacity duration-150 data-[occluded=true]:pointer-events-none data-[occluded=true]:opacity-0 xl:hidden',
        isTemplate
          ? 'col-span-2 col-start-11 mt-4 min-w-64 justify-self-end 2xl:col-span-3 2xl:col-start-10 2xl:ml-auto'
          : '',
        className
      )}
    >
      <div className="sticky top-[136px] flex max-h-[calc(100vh-136px)] w-full max-w-64 flex-col pb-5 2xl:justify-self-end">
        {enableTableOfContents && (
          <TableOfContents items={tableOfContents} isTemplate={isTemplate} />
        )}
        {isChangelog && <ChangelogForm isSidebar />}

        {!isChangelog && (
          <Actions
            gitHubPath={gitHubPath}
            isTemplate={isTemplate}
            withBorder={enableTableOfContents}
          />
        )}
      </div>
    </div>
  );
};

Aside.propTypes = {
  isTemplate: PropTypes.bool,
  isChangelog: PropTypes.bool,
  enableTableOfContents: PropTypes.bool,
  tableOfContents: PropTypes.array,
  gitHubPath: PropTypes.string,
  className: PropTypes.string,
};

export default Aside;

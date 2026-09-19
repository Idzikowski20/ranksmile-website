'use client';

import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { useState } from 'react';

import CodeBlockWrapper from 'components/shared/code-block-wrapper';
import { cn } from 'utils/cn';

const CodeTabsNavigation = ({ codeSnippets, highlightedCodeSnippets }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <div className="flex border-b border-gray-new-10">
        {codeSnippets.map(({ name }, index) => (
          <button
            className={cn(
              'relative flex-1 px-3.5 py-3 text-[15px] leading-none tracking-extra-tight transition-colors duration-200 after:absolute after:top-full after:left-0 after:-mt-px after:h-0.5 after:w-full after:transition-colors after:duration-200 hover:text-white',
              index === activeItem
                ? 'text-white after:bg-green-45'
                : 'text-gray-new-60 after:bg-transparent'
            )}
            type="button"
            key={index}
            onClick={() => setActiveItem(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <div>
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode="wait">
            {highlightedCodeSnippets.map(
              (code, index) =>
                index === activeItem && (
                  <m.div
                    className="dark"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlockWrapper className="highlighted-code [&_[data-line]]:text-[15px]">
                      {parse(code)}
                    </CodeBlockWrapper>
                  </m.div>
                )
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </>
  );
};

export default CodeTabsNavigation;

CodeTabsNavigation.propTypes = {
  codeSnippets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      language: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    })
  ).isRequired,
  highlightedCodeSnippets: PropTypes.arrayOf(PropTypes.string).isRequired,
};

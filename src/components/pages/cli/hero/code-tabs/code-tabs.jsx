import PropTypes from 'prop-types';

import { getHighlightedCodeArray } from 'lib/shiki';
import { cn } from 'utils/cn';

import CodeTabsNavigation from './code-tabs-navigation';

const codeSnippets = [
  {
    name: 'Claude Code',
    language: 'bash',
    code: `claude mcp add --transport http ranksmile https://app.ranksmile.pl/mcp`,
  },
  {
    name: 'Codex',
    language: 'json',
    code: `{
  "mcpServers": {
    "ranksmile": {
      "type": "http",
      "url": "https://app.ranksmile.pl/mcp"
    }
  }
}`,
  },
  {
    name: 'Any client',
    language: 'text',
    code: `https://app.ranksmile.pl/mcp`,
  },
];

const CodeTabs = async ({ className = null }) => {
  const highlightedCodeSnippets = await getHighlightedCodeArray(codeSnippets);

  return (
    <div className={cn(className, 'rounded-[10px] bg-black-new')}>
      <CodeTabsNavigation
        codeSnippets={codeSnippets}
        highlightedCodeSnippets={highlightedCodeSnippets}
      />
    </div>
  );
};

CodeTabs.propTypes = {
  className: PropTypes.string,
};

export default CodeTabs;

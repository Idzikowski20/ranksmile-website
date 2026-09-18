import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

const Sidebar = ({ isDocs, className }) => (
  <div className={cn('flex items-center lg:hidden', className)}>
    <div className={cn('flex', isDocs ? 'gap-x-2' : 'gap-x-3.5')}>
      <Button
        className="h-9 px-[18px]"
        data-test="header-login"
        to={LINKS.login}
        theme="outlined"
        size="xxs"
        tagName="Header"
      >
        Log in
      </Button>
      <Button
        className="h-9 px-[18px]"
        data-test="header-signup"
        to={LINKS.signup}
        theme="white-filled-multi"
        size="xxs"
        tagName="Header"
      >
        Sign up
      </Button>
    </div>
  </div>
);

Sidebar.propTypes = {
  isDocs: PropTypes.bool,
  className: PropTypes.string,
};

export default Sidebar;

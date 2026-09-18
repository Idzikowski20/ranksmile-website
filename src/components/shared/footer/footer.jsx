import Image from 'next/image';
import PropTypes from 'prop-types';

import Container from 'components/shared/container';
import ThemeSelect from 'components/shared/footer/theme-select';
import Link from 'components/shared/link';
import LINKS from 'constants/links';
import MENUS from 'constants/menus.js';
import ChevronIcon from 'icons/chevron-down.inline.svg';
import logoDarkSvg from 'images/logo-dark.svg';
import logoLightSvg from 'images/logo-light.svg';
import { cn } from 'utils/cn';

const Footer = ({ hasThemesSupport = false }) => (
  <footer className="relative z-30 mt-auto border-t border-gray-new-90 bg-white safe-paddings font-sans dark:border-gray-new-20 dark:bg-black-pure">
    <Container className="pt-12 3xl:pt-8 sm:pt-5" size="1920">
      <div className="flex justify-between gap-x-10">
        <div className="flex flex-col items-start lg:w-full">
          <div className="mb-auto lg:mb-11">
            <Image
              className="dark:hidden sm:h-6 sm:w-auto"
              src={logoLightSvg}
              width={151}
              height={28}
              alt="Ranksmile"
            />
            <Image
              className="hidden dark:block sm:h-6 sm:w-auto"
              src={logoDarkSvg}
              width={151}
              height={28}
              alt="Ranksmile"
            />
            <span
              className={cn(
                'mt-3.5 block text-[13px] leading-none tracking-extra-tight',
                'text-gray-new-40 dark:text-gray-new-60',
                'xl:mt-3'
              )}
            >
              Rank in Google. Get named by AI.
            </span>
          </div>

          {hasThemesSupport && <ThemeSelect className="mb-8 lg:mb-6" />}

          <p className="max-w-146 text-[0.8125rem]/snug tracking-extra-tight text-gray-new-40">
            © Globalzone 2026. All rights reserved. Google and Gemini are trademarks of Google LLC,
            ChatGPT of OpenAI, Perplexity of Perplexity AI, and WordPress of the WordPress
            Foundation. Ranksmile is not affiliated with or endorsed by any of them.
          </p>
        </div>

        <div className="flex w-fit gap-x-[88px] xl:w-180 xl:shrink-0 xl:gap-x-6 lg:hidden">
          {MENUS.footer.map(({ heading, items }, index) => (
            <div className="grid content-start gap-y-7" key={index}>
              <span className="text-xs leading-none font-semibold text-gray-new-10 uppercase dark:text-white">
                {heading}
              </span>
              <ul className="flex flex-col gap-y-5">
                {items.map(({ to, text, description, icon, links }, index) => {
                  const Tag = to ? Link : 'div';
                  const isExternalUrl = to?.startsWith('http');
                  const hasSubmenu = links?.length > 0;

                  return (
                    <li
                      key={index}
                      className={cn(
                        '-my-px flex min-w-[148px] py-px',
                        hasSubmenu && 'group relative [perspective:2000px]'
                      )}
                    >
                      <Tag
                        className={cn(
                          'group/link relative -my-px flex cursor-pointer items-center rounded-sm py-px whitespace-nowrap',
                          'text-[15px] leading-none tracking-extra-tight text-gray-new-40',
                          'transition-colors duration-200 hover:text-black-pure',
                          'dark:text-gray-new-70 dark:hover:text-white'
                        )}
                        to={to}
                        rel={isExternalUrl ? 'noopener noreferrer' : null}
                        target={isExternalUrl ? '_blank' : null}
                      >
                        {icon && (
                          <span
                            className={cn(
                              icon,
                              'mr-2.5 inline-block size-4 bg-gray-new-30 dark:bg-gray-new-70',
                              'group-hover/link:bg-black-pure group-hover/link:dark:bg-white'
                            )}
                          />
                        )}
                        {text}
                        {description && (
                          <span
                            className={cn(
                              'ml-1.5 py-px text-gray-new-70 dark:text-gray-new-40',
                              to &&
                                'transition-colors duration-200 group-hover/link:text-gray-new-10 group-hover/link:dark:text-gray-new-90'
                            )}
                          >
                            {description}
                          </span>
                        )}
                        {hasSubmenu && <ChevronIcon className="ml-0.5 opacity-80" />}
                      </Tag>
                      {hasSubmenu && (
                        <div
                          className={cn(
                            'absolute right-0 bottom-full z-50 min-w-[230px] pb-2.5',
                            'pointer-events-none opacity-0',
                            'origin-bottom-right [transform:rotateX(12deg)_scale(0.9)] transition-[opacity,transform] duration-200',
                            'group-hover:pointer-events-auto group-hover:visible group-hover:[transform:none] group-hover:opacity-100',
                            'group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:[transform:none] group-focus-within:opacity-100'
                          )}
                        >
                          <ul
                            className={cn(
                              'flex w-full flex-col gap-y-1 border border-gray-new-80 bg-gray-new-98 p-2',
                              'dark:border-gray-new-20 dark:bg-[#0A0A0B]',
                              'shadow-[0px_10px_20px_0px_rgba(0,0,0,.06)] dark:shadow-[0px_8px_20px_0px_rgba(0,0,0,.4)]'
                            )}
                          >
                            {links.map(({ text, to }) => (
                              <li key={text}>
                                <Link
                                  className="block p-3 text-[15px] leading-dense tracking-extra-tight whitespace-nowrap text-gray-new-10 transition-colors duration-200 hover:bg-gray-new-90 dark:text-gray-new-90 dark:hover:bg-gray-new-8"
                                  to={to}
                                >
                                  {text}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
    <div className="mt-10 border-t border-gray-new-94 py-8 dark:border-gray-new-10 lg:mt-4 lg:border-0 lg:pt-0">
      <Container
        className="flex flex-row justify-between gap-5 lg:w-full lg:flex-col-reverse lg:items-start"
        size="1920"
      >
        <div
          className={cn(
            'flex w-full max-w-214 flex-col gap-y-2 font-sans text-[0.9375rem] leading-normal tracking-extra-tight text-gray-new-70 xl:max-w-180 lg:max-w-md',
            'dark:text-gray-new-60'
          )}
        >
          <p className="flex w-full flex-wrap justify-between gap-3 leading-none lg:justify-start">
            <Link
              className="text-gray-new-40 hover:text-black-pure dark:text-gray-new-70 dark:hover:text-white"
              to={LINKS.legalTerms}
            >
              Terms of Service
            </Link>
            <Link
              className="leading-none text-gray-new-40 hover:text-black-pure dark:text-gray-new-70 dark:hover:text-white"
              to={LINKS.legalPrivacy}
            >
              Privacy Policy
            </Link>
            <Link
              className="leading-none text-gray-new-40 hover:text-black-pure dark:text-gray-new-70 dark:hover:text-white"
              to={LINKS.legalCookies}
            >
              Cookie Policy
            </Link>
            <Link
              className="leading-none text-gray-new-40 hover:text-black-pure dark:text-gray-new-70 dark:hover:text-white"
              to={LINKS.legalDpa}
            >
              Data Processing Addendum
            </Link>
            <Link
              className="leading-none text-gray-new-40 hover:text-black-pure dark:text-gray-new-70 dark:hover:text-white"
              to={LINKS.contact}
            >
              Contact
            </Link>
          </p>
        </div>
      </Container>
    </div>
  </footer>
);

Footer.propTypes = {
  hasThemesSupport: PropTypes.bool,
};

export default Footer;

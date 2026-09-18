import Image from 'next/image';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import SectionLabel from 'components/shared/section-label';
import LINKS from 'constants/links';
import { cn } from 'utils/cn';

import ctaBackground from './images/cta-bg.jpg';

const CTANew = ({
  className = 'mt-[183px] xl:mt-[168px] lg:mt-[145px] md:mt-[90px]',
  copyWrapperClassName = null,
  title = 'One tool to rank in Google <br /> and get mentioned by AI.',
  description = null,
  label,
  labelIcon = 'arrow',
  buttonText = 'Get started',
  buttonUrl = LINKS.signup,
  isExternal = false,
}) => (
  <section className={cn('cta relative bg-[#151617] safe-paddings', className)}>
    <div className="absolute inset-0 z-10">
      <Container className="top-1/2 -translate-y-1/2" size="1920">
        {label && (
          <SectionLabel className="sm:mb-4" theme="white" icon={labelIcon}>
            {label}
          </SectionLabel>
        )}
        <div
          className={cn(
            'mt-6 max-w-[800px] text-[48px] leading-dense tracking-tighter xl:max-w-[760px] xl:text-[44px] lg:text-[40px] md:mt-4 md:text-[28px] sm:max-w-none',
            copyWrapperClassName
          )}
        >
          <h2 className="text-white md:inline" dangerouslySetInnerHTML={{ __html: title }} />
          {description && (
            <>
              {' '}
              <p className="text-gray-new-50 md:inline">{description}</p>
            </>
          )}
        </div>
        <Button
          className="mt-10 lg:mt-8"
          theme="white-filled"
          size="new"
          to={buttonUrl}
          isExternal={isExternal}
        >
          {buttonText}
        </Button>
      </Container>
    </div>

    <div className="pointer-events-none relative overflow-hidden">
      <Image
        className="min-h-[550px] w-full object-cover lg:min-h-[486px] md:min-h-[446px]"
        src={ctaBackground}
        width={1920}
        height={610}
        sizes="100vw"
        alt=""
      />
    </div>
  </section>
);

CTANew.propTypes = {
  className: PropTypes.string,
  copyWrapperClassName: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  labelIcon: PropTypes.oneOf(['arrow', 'databricks']),
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  isExternal: PropTypes.bool,
};

export default CTANew;

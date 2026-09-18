'use client';

import { useState } from 'react';

import Button from 'components/shared/button';
import InfoIcon from 'components/shared/info-icon';
import { cn } from 'utils/cn';

import plans from './data/plans';
import Features from './features';
import ResourceSizeSelect, {
  LAUNCH_RESOURCE_SIZES,
  SCALE_RESOURCE_SIZES,
} from './resource-size-select';

const BILLING_PERIODS = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'yearly', label: 'Yearly', note: 'Save 17%' },
];

const Plans = () => {
  const [launchSize, setLaunchSize] = useState('small');
  const [scaleSize, setScaleSize] = useState('xlarge');
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="relative mt-16 w-full xl:mt-14 lg:mt-12 md:mx-0 md:mt-11 md:w-full">
      <h2 className="sr-only">Ranksmile pricing plans</h2>

      <div className="mb-8 flex justify-center lg:mb-7 md:mb-6">
        <div className="group flex" role="group" aria-label="Billing period">
          {BILLING_PERIODS.map(({ id, label, note }) => {
            const isActive = billing === id;

            return (
              <button
                className={cn(
                  'relative flex h-11 min-w-36 items-center justify-center gap-x-2 border border-gray-new-30 px-4',
                  'text-[15px] leading-none whitespace-nowrap transition-colors duration-200',
                  '-ml-px first:ml-0 md:min-w-32 md:text-sm',
                  isActive
                    ? 'z-10 border-gray-new-50 bg-gray-new-20 text-white'
                    : 'bg-transparent text-gray-new-60 hover:bg-gray-new-15 hover:text-white'
                )}
                key={id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setBilling(id)}
              >
                {label}
                {note && (
                  <span className={cn('text-xs', isActive ? 'text-green-45' : 'text-gray-new-50')}>
                    {note}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="relative z-10 grid grid-cols-3 gap-y-[18px] border-t border-b border-gray-new-30 lg:grid-cols-2 lg:border-0 md:grid-cols-1">
        {plans.map(
          (
            {
              planId,
              type,
              title,
              subtitle,
              highlighted = false,
              price,
              computeRate,
              storageRate,
              features,
              button,
              hasDynamicPricing = false,
            },
            index
          ) => {
            // Determine which size state to use based on the plan
            let currentSize;
            let setCurrentSize;
            let resourceSizes;

            if (planId === 'launch') {
              currentSize = launchSize;
              setCurrentSize = setLaunchSize;
              resourceSizes = LAUNCH_RESOURCE_SIZES;
            } else if (planId === 'scale') {
              currentSize = scaleSize;
              setCurrentSize = setScaleSize;
              resourceSizes = SCALE_RESOURCE_SIZES;
            }

            // Flat plans carry a price per billing period; the dynamic branch below is
            // only reached by usage-priced plans, which Ranksmile does not have.
            const periodPrice =
              typeof price === 'object' && price !== null ? price[billing] : price;
            const planTitle = periodPrice !== undefined ? `€${periodPrice}` : title;
            const planSubtitle =
              typeof subtitle === 'object' && subtitle !== null ? subtitle[billing] : subtitle;

            // Calculate price dynamically based on resource size and rates
            let displayPrice = 0;

            if (
              hasDynamicPricing &&
              computeRate !== undefined &&
              storageRate !== undefined &&
              resourceSizes &&
              currentSize
            ) {
              const selectedResource = resourceSizes.find((size) => size.id === currentSize);
              if (
                selectedResource &&
                selectedResource.cu !== undefined &&
                selectedResource.storage !== undefined
              ) {
                const computeCost = Number(selectedResource.cu) * Number(computeRate);
                const storageCost = Number(selectedResource.storage) * Number(storageRate);
                displayPrice = Math.round(computeCost + storageCost);
              }
            } else {
              displayPrice = periodPrice !== undefined ? periodPrice : 0;
            }

            const selectedResource =
              hasDynamicPricing && resourceSizes && currentSize
                ? resourceSizes.find((size) => size.id === currentSize)
                : null;
            const tooltipText =
              selectedResource &&
              `Estimated cost of a ${selectedResource.cu} CU-hour,<br/> ${selectedResource.storage} GB database workload.`;

            return (
              <li
                className={cn(
                  'group relative flex min-h-full flex-col border-l border-gray-new-30 last:border-r',
                  'lg:border lg:pb-[66px] lg:first:border-r-0 lg:last:pb-0',
                  'md:pb-0 md:first:border'
                )}
                key={index}
              >
                <div className="p-6 pb-2 md:p-5 md:pb-2">
                  <h3
                    className={cn(
                      'font-mono text-sm leading-none font-medium uppercase',
                      highlighted ? 'text-green-52' : 'text-gray-new-60'
                    )}
                  >
                    {type}
                  </h3>
                  <div className="mt-14 flex flex-col gap-4">
                    <h4 className="text-[28px] leading-none font-normal tracking-tighter whitespace-nowrap lg:text-2xl">
                      {planTitle}
                    </h4>
                    {hasDynamicPricing ? (
                      <div className="flex flex-col gap-1.5">
                        <div className="flex min-h-7 items-center gap-1.5">
                          <div className="leading-snug">
                            <span className="text-[15px] -tracking-wide text-gray-new-60">
                              Typical spend:
                            </span>{' '}
                            <span className="text-xl -tracking-wide text-white">
                              ${displayPrice}
                            </span>{' '}
                            <span className="text-[15px] -tracking-wide text-gray-new-80">/mo</span>
                          </div>
                          {tooltipText && (
                            <InfoIcon
                              className="relative mt-0.5 inline-flex shrink-0 align-baseline"
                              tooltip={tooltipText}
                              tooltipId={`resource-size-${planId}`}
                              link={{
                                text: 'Read more.',
                                href: '#workload-cost-estimates',
                              }}
                              clickable
                            />
                          )}
                        </div>
                        {currentSize && setCurrentSize && resourceSizes && (
                          <ResourceSizeSelect
                            value={currentSize}
                            sizes={resourceSizes}
                            onChange={setCurrentSize}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1.5 pt-3 pb-px md:pt-0">
                        {planSubtitle && (
                          <p className="text-[15px] leading-[1.7] -tracking-wide text-gray-new-60">
                            {planSubtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <Button
                    className="mt-5 w-full"
                    data-test={`pricing-${planId}-cta`}
                    theme={highlighted ? 'white-filled' : 'outlined'}
                    to={button.url}
                    size="sm-new"
                    tagName={button.event}
                  >
                    {button.text || 'Get started'}
                  </Button>
                </div>
                <div className="flex flex-col divide-y divide-dashed divide-gray-new-20 pb-1 lg:mt-1">
                  {Object.entries(features).map(([key, section]) => (
                    <Features
                      key={key}
                      title={section.title}
                      features={section.features}
                      type={type}
                      highlighted={highlighted}
                    />
                  ))}
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Plans;

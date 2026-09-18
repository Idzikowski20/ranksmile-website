'use client';

import { domAnimation, LazyMotion, useMotionValue } from 'framer-motion';

import StartupAnimation from './startup-animation';

const StartupExperience = () => {
  const timelineElapsed = useMotionValue(0);

  return (
    <LazyMotion features={domAnimation}>
      <StartupAnimation timelineElapsed={timelineElapsed} />
    </LazyMotion>
  );
};

export default StartupExperience;

import styled from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const Svg = styled.svg<{ left?: number }>`
  position: absolute;
  bottom: 0;
  left: 100%;
  left: ${({ left }) => (left ? `${left}%` : 'unset')};
  /* z-index: -1; */
`;

const MotionSvg = motion(Svg);

interface SqProps {
  left?: number;
  inViewPx: number;
  y: number;
  transition?: {
    mass?: number;
    damping?: number;
    stiffness?: number;
    type?: 'tween' | 'spring';
    duration?: number;
  };
}

const baseTransition = { type: 'spring', damping: 40, stiffness: 200 };

export const Sq1: React.FC<SqProps> = ({ left, inViewPx, y, transition = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px ${inViewPx}px 0px` });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y,
        transition: { ...baseTransition, ...transition },
      });
    }
  }, [inView, y]);

  return (
    <MotionSvg
      animate={controls}
      left={left}
      ref={ref}
      width="59"
      height="59"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="57" height="57" rx="9" fill="#F7F4FD" stroke="#CECCCE" stroke-width="2" />
    </MotionSvg>
  );
};

export const Sq2: React.FC<SqProps> = ({ left, inViewPx, y, transition = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px ${inViewPx}px 0px` });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y,
        transition: { ...baseTransition, ...transition },
      });
    }
  }, [inView, y]);

  return (
    <MotionSvg
      animate={controls}
      left={left}
      ref={ref}
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="49" height="49" rx="9" fill="#E3F7FE" stroke="#CECCCE" stroke-width="2" />
    </MotionSvg>
  );
};

export const Sq3: React.FC<SqProps> = ({ left, inViewPx, y, transition = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px ${inViewPx}px 0px` });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y,
        transition: { ...baseTransition, ...transition },
      });
    }
  }, [inView, y]);

  return (
    <MotionSvg
      animate={controls}
      left={left}
      ref={ref}
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="73" height="73" rx="9" fill="#F4DEFE" stroke="#CECCCE" stroke-width="2" />
    </MotionSvg>
  );
};

export const Sq4: React.FC<SqProps> = ({ left, inViewPx, y, transition = {} }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px ${inViewPx}px 0px` });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y,
        transition: { ...baseTransition, ...transition },
      });
    }
  }, [inView, y]);

  return (
    <MotionSvg
      animate={controls}
      left={left}
      ref={ref}
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="31" height="31" rx="8" fill="#F3D9FE" stroke="#CECCCE" stroke-width="2" />
    </MotionSvg>
  );
};

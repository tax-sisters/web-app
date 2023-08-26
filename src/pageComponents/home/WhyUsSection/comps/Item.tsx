import { Typography } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  align-items: center;
  color: #320543;
  /* justify-content: center; */
  img {
    max-height: 100%;
    margin-right: 40px;
  }

  .title {
    width: 150px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    justify-content: center;
    img {
      max-height: 60%;
      margin-right: 40px;
    }
  }
`;

interface ItemProps {
  src: string;
  title: string;
}

const transition = { type: 'spring', damping: 60, stiffness: 200 };

const MotionDiv = motion(Div);

export const Item: React.FC<ItemProps> = ({ src, title }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px 100px 0px`, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { ...transition },
      });
    }
  }, [inView]);

  return (
    <MotionDiv ref={ref} initial={{ y: 150, opacity: 0, scale: 0.95 }} animate={controls}>
      <img src={src} />
      <Typography fontSize={26} fontWeight={600} className="title">
        {title}
      </Typography>
    </MotionDiv>
  );
};

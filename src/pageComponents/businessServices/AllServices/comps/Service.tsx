import Spacer from '@/components/Spacer/Spacer';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Typography } from '@mui/material';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

interface StyledProps {
  backgroundColor: string;
}

const Div = styled.div<StyledProps>`
  border: 1px solid #5a2e74;
  border-radius: 25px;
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-gap: 50px;
  filter: drop-shadow(0px 0px 6px rgba(7, 46, 91, 0.15));
  background-color: ${({ backgroundColor }) => backgroundColor};

  .anchor {
    position: absolute;
    top: -140px;
  }
  .icon {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .value {
    padding: 50px 75px 50px 0;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-gap: 40px;
    grid-template-columns: 120px 1fr;
    .value {
      padding: 40px 45px 40px 0;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    grid-template-columns: 1fr;
    grid-gap: 0px;

    .title {
      font-size: 20px;
    }

    .icon {
      margin-top: 20px;
      justify-content: center;
    }

    .value {
      padding: 20px 25px 20px 25px;
    }
  }
`;

const Squares = styled.div`
  position: relative;
  width: 100%;
  z-index: -1;
`;

interface ServiceProps extends StyledProps {
  imgSrc: string;
  title: string;
  description: string;
  bottomComponent?: React.ReactNode;
  anchorId?: string;
  squares?: React.ReactNode;
}

export const Service: React.FC<ServiceProps> = ({
  backgroundColor,
  imgSrc,
  title,
  description,
  bottomComponent,
  anchorId,
  squares,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: `0px 0px 100px 0px`, once: false });
  const controls = useAnimation();
  const isMd = useBreakpoints('md');

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { type: 'spring', damping: 60, stiffness: 250, restDelta: 0.0001 },
      });
    }
  }, [inView]);

  return (
    <motion.div ref={ref} initial={{ y: 100, opacity: 0, scale: 0.95 }} animate={controls}>
      <Div backgroundColor={backgroundColor}>
        <div id={anchorId} className="anchor" />
        <div className="icon">
          <img src={imgSrc} alt="" />
        </div>
        <div className="value">
          <Typography fontSize={26} className="title">
            {title}
          </Typography>
          <Spacer xs={20} />
          <Typography fontSize={16}>{description}</Typography>
          {bottomComponent}
        </div>
      </Div>
      {squares && !isMd && <Squares>{squares}</Squares>}
    </motion.div>
  );
};

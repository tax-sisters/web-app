'use client';
import { Button, Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import heroAnimation from './hero.json';
import { ThemeColors } from '@/util/theme';
import Spacer from '../../../components/Spacer/Spacer';
import { NAV_HEIGHT } from '../../../components/conf';
import { Buttonas } from '../../../components/form';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

const Div = styled.div`
  min-height: 100vh;
  background-color: ${ThemeColors.SECTION_GRAY};
  padding: 0 40px;
  display: flex;
  align-items: center;

  .contents {
    /* border: 1px solid red; */
    display: grid;
    grid-template-columns: 1fr 2fr;
    /* grid-gap: 20px; */

    &__left {
      /* border: 1px solid red; */
    }
    &__right {
      /* border: 1px solid blue; */
    }
  }
`;

const Hero = () => {
  const { translate } = useTranslation();
  return (
    <Div>
      <Spacer xs={NAV_HEIGHT} />
      <Container>
        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Spacer xs={65} />
          <Typography fontSize={60} fontWeight={600}>
            EMPOWERING YOUR FINANCES
          </Typography>
          <Spacer xs={26} />

          <div className="contents">
            <div className="contents__left">
              <Typography fontSize={26}>Expert Accounting Services</Typography>
              <Typography fontSize={26}>Tailored for You!</Typography>
              <Spacer xs={60} />
              <Link href="/contact" prefetch>
                <Buttonas>{translate('NAV_CONTACT').toUpperCase()}</Buttonas>
              </Link>
            </div>
            <div className="contents__right">
              <Lottie animationData={heroAnimation} />
            </div>
          </div>
        </motion.div>
      </Container>
    </Div>
  );
};

export default Hero;

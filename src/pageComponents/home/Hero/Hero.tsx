'use client';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import heroAnimation from '@/lottie/hero.json';
import { ThemeColors } from '@/util/theme';
import Spacer from '../../../components/Spacer/Spacer';
import { NAV_HEIGHT } from '../../../components/conf';
import { Buttonas } from '../../../components/form';
import Link from 'next/link';
import useTranslation from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { useStateSelector } from '@/state';

const Div = styled.div`
  min-height: 100vh;
  background-color: ${ThemeColors.SECTION_GRAY};
  padding: 40px 40px;
  display: flex;
  align-items: center;

  .contents {
    display: grid;
    grid-template-columns: 1fr 2fr;

    &__left {
      /* border: 1px solid red; */
    }
    &__right {
      /* border: 1px solid blue; */
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    min-height: 800px;
    padding-top: 100px !important;
    .header {
      font-size: 40px;
    }
    .contents {
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 40px 10px;
    .header {
      font-size: 30px;
    }
  }
`;

const Hero = () => {
  const { translate } = useTranslation();
  const isLt = useStateSelector(({ app }) => app.lng === 'lt');
  return (
    <Div>
      <Spacer xs={NAV_HEIGHT} />
      <Container>
        <motion.div initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Spacer xs={65} />
          <Typography fontSize={60} fontWeight={600} className="header">
            {translate('HERO_TITLE')}
          </Typography>
          <Spacer xs={26} />

          <div className="contents">
            <div className="contents__left">
              {isLt ? (
                <>
                  <Typography fontSize={26}>Ekspertų apskaitos paslaugos</Typography>
                  <Typography fontSize={26}>Pritaikytos jums!</Typography>
                </>
              ) : (
                <>
                  <Typography fontSize={26}>Expert Accounting Services</Typography>
                  <Typography fontSize={26}>Tailored for You!</Typography>
                </>
              )}
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

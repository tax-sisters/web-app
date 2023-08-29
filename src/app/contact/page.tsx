'use client';
import Spacer from '@/components/Spacer/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import Form from '@/pageComponents/contact/Form';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import useTranslation from '@/hooks/useTranslation';
import { Sq1, Sq2, Sq3, Sq4 } from '@/components/animated/squares';
import useBreakpoints from '@/hooks/useBreakpoints';
import { motion } from 'framer-motion';

const Map = dynamic(() => import('@/pageComponents/contact/Map'), {
  ssr: false,
});

const Main = styled.main`
  background-color: white;
  display: flex;
  flex-direction: column;

  .contents {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 25px;
    overflow: hidden;
    filter: drop-shadow(0px 0px 10px rgba(7, 46, 91, 0.15));
    border: 1px solid #ceccce;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .contents {
      grid-template-columns: 1fr;
      .grid-1 {
        order: 2;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    .header {
      font-size: 30px;
    }
  }
`;

const Squares = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
`;

const ContactPage = () => {
  const { translate } = useTranslation();
  const isMd = useBreakpoints('md');

  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <Spacer xs={70} />
      <Typography fontSize={48} fontWeight={600} textAlign="center" className="header">
        {translate('FORM_CONTACT_US')}
      </Typography>
      <Spacer xs={70} />
      <Container>
        <motion.div className="contents" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Map />
          <Form />
        </motion.div>
        {!isMd && (
          <Squares>
            {/* left */}
            <Sq2 left={-22} inViewPx={0} y={-350} />
            <Sq4 left={-10} inViewPx={0} y={-660} />
            <Sq1 left={-7} inViewPx={0} y={-500} />
            <Sq3 left={-15} inViewPx={0} y={-200} />
            {/* right */}
            <Sq3 left={102} inViewPx={0} y={-100} />
            <Sq4 left={102} inViewPx={0} y={-500} />
            <Sq2 left={109} inViewPx={0} y={-250} />
          </Squares>
        )}
      </Container>

      <Spacer xs={160} />
    </Main>
  );
};

export default ContactPage;

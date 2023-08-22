'use client';
import Hero from '@/components/Hero/Hero';
import Spacer from '@/components/Spacer/Spacer';
import IntroSection from '@/pageComponents/home/IntroSection';
import ServicesSection from '@/pageComponents/home/ServicesSection';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh);
`;

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <IntroSection />
      <ServicesSection />
      {/* <Container>
        <Spacer xs={50} />
        <Typography>Home page</Typography>
        <Spacer xs={250} />
      </Container> */}
    </Main>
  );
};

export default HomePage;

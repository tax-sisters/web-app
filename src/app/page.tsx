'use client';
import Hero from '@/components/Hero/Hero';
import Spacer from '@/components/Spacer/Spacer';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 80px);
`;

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <Container>
        <Spacer xs={50} />
        <Typography>Home page</Typography>
        <Spacer xs={250} />
      </Container>
    </Main>
  );
};

export default HomePage;


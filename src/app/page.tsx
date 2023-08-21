'use client';
import Hero from '@/components/Hero/Hero';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 80px);
`;

const HomePage = () => {
  return (
    <Main>
      <Hero />
    </Main>
  );
};

export default HomePage;


'use client';
import Hero from '@/pageComponents/home/Hero/Hero';
import IntroSection from '@/pageComponents/home/IntroSection';
import ServicesSection from '@/pageComponents/home/ServicesSection';
import styled from 'styled-components';
import WhyUsSection from '@/pageComponents/home/WhyUsSection';

const Main = styled.main`
  min-height: calc(100vh);
`;

const HomePage = () => {
  return (
    <Main>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <WhyUsSection />
    </Main>
  );
};

export default HomePage;

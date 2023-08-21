'use client';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import heroAnimation from './hero.json';

const Div = styled.div`
  height: calc(100vh - 0px);

  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(13, 191, 205);
  background: linear-gradient(90deg, rgba(13, 191, 205, 1) 0%, rgba(10, 76, 173, 1) 100%);

  color: white;
  gap: 40px;

  .animation {
    max-width: 60%;
  }
`;

const Hero = () => {
  return (
    <Div>
      <Typography variant="h2">Hero section</Typography>
      <div className="animation">
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </Div>
  );
};

export default Hero;


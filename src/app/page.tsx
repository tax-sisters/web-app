'use client';
import { submitForm } from '@/api';
import Hero from '@/components/Hero/Hero';
import Spacer from '@/components/Spacer/Spacer';
import { Button, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 80px);
`;

const SECRET = 'TAXsisters';

const HomePage = () => {
  const [canRender, setCanRender] = useState(false);
  // const test = () => {
  //   submitForm({ firstName: 'Simas', lastName: 'SIMS' });
  // };

  // useEffect(() => {
  //   const enteredValue = window.prompt('Password');

  //   if (enteredValue === SECRET) {
  //     setCanRender(true);
  //   }
  // }, []);

  // if (!canRender) return null;

  return (
    <Main>
      <Hero />
      {/* <Button onClick={test}>TEST</Button> */}
      <Container>
        <Spacer xs={50} />
        <Typography>Home page</Typography>
        <Spacer xs={250} />
      </Container>
    </Main>
  );
};

export default HomePage;

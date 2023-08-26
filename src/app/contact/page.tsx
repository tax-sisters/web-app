'use client';
import Spacer from '@/components/Spacer/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import Form from '@/pageComponents/contact/Form';
import { Container } from '@mui/material';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/pageComponents/contact/Map'), {
  ssr: false,
});

const Main = styled.main`
  background-color: white;
  display: flex;
  flex-direction: column;

  .container {
    min-height: calc(100vh - ${NAV_HEIGHT}px);
    background-color: white;
    display: flex;
    flex-direction: column;
  }

  .form-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .container {
      min-height: calc(600px);
    }
  }
`;

const ContactPage = () => {
  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <div className="container">
        <Container className="form-container">
          <Form />
        </Container>
      </div>
      <Container>
        <Map />
      </Container>
    </Main>
  );
};

export default ContactPage;

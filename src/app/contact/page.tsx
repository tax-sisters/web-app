'use client';
import Spacer from '@/components/Spacer/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import { TextInput } from '@/components/form/TextInput';
import Form from '@/pageComponents/contact/Form';
import { Container } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh);
  background-color: white;
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContactPage = () => {
  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <Container className="container">
        <Form />
      </Container>
    </Main>
  );
};

export default ContactPage;

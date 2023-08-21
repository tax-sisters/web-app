'use client';
import { TextInput } from '@/components/form/TextInput';
import { Container } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh - 80px);
`;

const ContactPage = () => {
  return (
    <Main>
      <Container>
        ContactPage <TextInput label="edfedf" />
      </Container>
    </Main>
  );
};

export default ContactPage;


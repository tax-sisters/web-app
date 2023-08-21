"use client";
import { Container } from "@mui/material";
import styled from "styled-components";

const Foot = styled.footer`
  height: 150px;
  background-color: palegreen;
`;

const Footer = () => {
  return (
    <Foot>
      <Container>Footer</Container>
    </Foot>
  );
};

export default Footer;

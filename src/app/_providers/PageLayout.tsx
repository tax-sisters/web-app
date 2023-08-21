"use client";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100%;
  /* flex: 1; */
  min-height: calc(100vh - 80px);
`;

interface PageLayoutProps {
  children: React.ReactNode;
}
export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <Page>{children}</Page>;
};

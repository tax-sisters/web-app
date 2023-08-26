'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Div = styled.div`
  max-width: 100vw;
  overflow-x: hidden;
`;

const MotionDiv = motion(Div);

interface PageLayoutProps {
  children: React.ReactNode;
}
export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.01 }}>
      {children}
    </MotionDiv>
  );
};

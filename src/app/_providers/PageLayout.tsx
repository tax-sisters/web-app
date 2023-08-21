'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  children: React.ReactNode;
}
export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.01 }}>
      {children}
    </motion.div>
  );
};


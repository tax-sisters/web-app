'use client';
import theme from '@/util/theme';
import { ThemeProvider } from 'styled-components';

export const StyledProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};


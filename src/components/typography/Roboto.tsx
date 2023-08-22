import styled, { css } from 'styled-components';
import { Typography } from '@mui/material';
import '@fontsource/roboto';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeColors } from '@/util/theme';

interface FontProps {
  weight?: '400' | '500' | '600' | '700';
  themeColor?: ThemeColors;
  fontSize?: 7 | 9 | 10 | 11 | 12 | 14 | 15 | 16 | 17 | 18 | 22 | 28 | 32;
}

export const Roboto = styled(Typography)<FontProps>`
  font-family: 'Roboto', sans-serif !important;
  margin: 0 !important;
  color: ${ThemeColors.TEXT_BLACK};

  ${({ themeColor }) =>
    themeColor &&
    css`
      color: ${themeColor} !important;
    `};

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight} !important;
    `};
`;

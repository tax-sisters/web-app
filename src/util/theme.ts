import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { createGlobalStyle, css } from 'styled-components';

export enum ThemeColors {
  PRIMARY = '#ED6C50',
  WHITE = '#FFFFFF',
  TEXT_BLACK = '#0E0E0F',
  SECTION_GRAY = '#F7F8FA',
  ERROR = '#d32f2f',
  GRAD_A = '#582C6E',
  GRAD_B = '#603596',
  GRAD_C = '#5F559D',
  GRAD_D = '#5B9AAE',
}

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.PRIMARY,
    },
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: { root: { textTransform: 'none' } },
    },
  },
});

export const gradient = () => {
  return css`
    background: rgb(88, 44, 110);
    background: linear-gradient(
      90deg,
      ${ThemeColors.GRAD_A} 0%,
      ${ThemeColors.GRAD_B} 34%,
      ${ThemeColors.GRAD_C} 65%,
      ${ThemeColors.GRAD_D} 100%
    );
  `;
};

export const GlobalStyle = createGlobalStyle``;

export default responsiveFontSizes(theme);

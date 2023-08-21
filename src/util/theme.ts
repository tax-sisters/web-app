import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export enum ThemeColors {
  PRIMARY = '#ED6C50',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
  ORANGE = '#ED6C50',
  ERROR = '#d32f2f'
}

const theme = createTheme({
  palette: {
    primary: {
      main: ThemeColors.ORANGE
    }
  },
  components: {
    MuiButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: { root: { textTransform: 'none' } }
    }
  }

  // typography: {
  //   fontFamily: "Roboto",
  // },
});

export const GlobalStyle = createGlobalStyle``;

export default responsiveFontSizes(theme);


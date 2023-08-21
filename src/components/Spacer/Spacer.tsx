import styled, { css } from 'styled-components';

interface SpacerProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  horizontal?: boolean;
  border?: boolean;
}
const Spacer = styled.div<SpacerProps>`
  height: ${({ theme }) => theme.spacing(1)};

  ${({ theme }) => theme.breakpoints.up('xs')} {
    ${({ xs, horizontal }) =>
      xs &&
      css`
        height: ${xs}px;
        min-height: ${xs}px;
        width: ${horizontal ? `${xs}px` : 'unset'};
        min-width: ${horizontal ? `${xs}px` : 'unset'};
      `};
  }

  ${({ theme }) => theme.breakpoints.up('sm')} {
    ${({ sm, horizontal }) =>
      sm &&
      css`
        height: ${sm}px;
        min-height: ${sm}px;
        width: ${horizontal ? `${sm}px` : 'unset'};
        min-width: ${horizontal ? `${sm}px` : 'unset'};
      `};
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ md, horizontal }) =>
      md &&
      css`
        height: ${md}px;
        min-height: ${md}px;
        width: ${horizontal ? `${md}px` : 'unset'};
        min-width: ${horizontal ? `${md}px` : 'unset'};
      `};
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    ${({ lg, horizontal }) =>
      lg &&
      css`
        height: ${lg}px;
        min-height: ${lg}px;
        width: ${horizontal ? `${lg}px` : 'unset'};
        min-width: ${horizontal ? `${lg}px` : 'unset'};
      `};
  }
  ${({ theme }) => theme.breakpoints.up('xl')} {
    ${({ xl, horizontal }) =>
      xl &&
      css`
        height: ${xl}px;
        min-height: ${xl}px;
        width: ${horizontal ? `${xl}px` : 'unset'};
        min-width: ${horizontal ? `${xl}px` : 'unset'};
      `};
  }

  ${({ border }) =>
    border &&
    css`
      border: 1px solid red;
    `};
`;

export default Spacer;


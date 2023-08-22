import { gradient } from '@/util/theme';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Buttonas = styled(Button).attrs(p => {
  return { ...p, variant: 'contained' };
})`
  border-radius: 25px !important;
  min-width: 221px;
  height: 57px;
  ${gradient()};
  font-size: 18px !important;
  font-weight: 600 !important;
`;

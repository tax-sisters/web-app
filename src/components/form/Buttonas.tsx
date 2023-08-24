import { gradient } from '@/util/theme';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const Buttonas = styled(Button).attrs(p => {
  return { ...p, variant: 'contained' };
})`
  border-radius: 25px !important;
  min-width: 221px;
  height: 52px;
  ${gradient()};
  font-size: 18px !important;
  font-weight: 600 !important;

  &:hover {
    background: linear-gradient(90deg, #22a6b3 0%, #22a6b3 34%, #22a6b3 65%, #22a6b3 100%);
  }
`;

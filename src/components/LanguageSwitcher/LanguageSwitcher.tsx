'use client';

import { useStateSelector } from '@/state';
import useActionsApp from '@/state/actionHooks/useActionsApp';
import { Lng } from '@/types';
import { Typography } from '@mui/material';
import styled, { css } from 'styled-components';
import Spacer from '../Spacer/Spacer';

const Div = styled.div`
  display: flex;
`;

const Btn = styled.div<{ isSelected: boolean }>`
  height: 20px;
  width: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */
  cursor: pointer;
  user-select: none;
  overflow: hidden;
  ${({ isSelected }) =>
    isSelected &&
    css`
      outline: 1px solid black;
    `};

  img {
    height: 100%;
    width: 100%;
  }
`;

const LanguageSwitcher = () => {
  const lng = useStateSelector(({ app }) => app.lng);

  const { setLng } = useActionsApp();

  return (
    <Div>
      <Btn isSelected={lng === 'lt'} onClick={() => setLng('lt')}>
        <img src="/img/LT.svg" alt="" />
      </Btn>
      <Spacer xs={8} horizontal />
      <Btn isSelected={lng === 'en'} onClick={() => setLng('en')}>
        <img src="/img/GB.svg" alt="" />
      </Btn>
    </Div>
  );
};

export default LanguageSwitcher;

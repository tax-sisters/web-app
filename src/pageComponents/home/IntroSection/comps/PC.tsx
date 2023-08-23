import styled from 'styled-components';
import { Sq1, Sq2, Sq3, Sq4 } from './squares';

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .squares {
    position: absolute;
    width: 100%;
  }
`;

export const PC = () => {
  return (
    <Div>
      <img src="img/pc.png" alt="" />
      <div className="squares">
        <Sq4 left={-2} inViewPx={100} y={-350} />
        <Sq1 left={2} inViewPx={100} y={-350} />
        <Sq2 left={60} inViewPx={100} y={-350} />
        <Sq3 left={75} inViewPx={100} y={-350} />
        <Sq4 left={100} inViewPx={100} y={-350} />
      </div>
    </Div>
  );
};

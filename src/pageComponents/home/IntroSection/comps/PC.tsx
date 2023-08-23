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
        <Sq4 left={-2} inViewPx={60} y={-60} />
        <Sq1 left={-2} inViewPx={60} y={-400} />
        <Sq2 left={60} inViewPx={60} y={-480} />
        <Sq3 left={84} inViewPx={60} y={-400} />
        <Sq4 left={100} inViewPx={60} y={-200} />
      </div>
    </Div>
  );
};

import { Sq4, Sq1, Sq2, Sq3 } from '@/components/animated/squares';
import useBreakpoints from '@/hooks/useBreakpoints';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  .squares {
    position: absolute;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .squares {
      display: none;
    }
  }
`;

export const PC = () => {
  const isMd = useBreakpoints('md');
  return (
    <Div>
      <img src={`img/${isMd ? 'pc-mobile' : 'pc'}.png`} alt="" />
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

import Spacer from '@/components/Spacer';
import { Sq1, Sq2, Sq3, Sq4 } from '@/components/animated/squares';
import { ThemeColors } from '@/util/theme';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { Item } from './comps';

const Div = styled.div`
  .header {
    position: relative;
    height: 160px;
    background-color: #22a6b3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &__arrow {
      position: absolute;
      bottom: -20px;
      left: calc(50% - 20px);
      transform: rotateZ(45deg);
      background-color: #22a6b3;
      width: 50px;
      height: 50px;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 80px;

    &__left {
      border: 1px solid blue;
      display: grid;
      grid-gap: 40px;
    }

    &__right {
      position: relative;
      border: 1px solid green;

      .squares {
        width: 100%;
        position: absolute;
        bottom: 0;
      }
    }
  }
`;

const whyList = [
  {
    title: 'Dependability',
    src: '/img/why-us/dep.svg',
  },
  {
    title: 'Reliability',
    src: '/img/why-us/rel.svg',
  },
  {
    title: 'Efficiency',
    src: '/img/why-us/eff.svg',
  },
  {
    title: 'Discretion',
    src: '/img/why-us/dis.svg',
  },
];

interface WhyUsSectionProps {}

const WhyUsSection: React.FC<WhyUsSectionProps> = () => {
  return (
    <Div>
      <div className="header">
        <Typography textAlign="center" fontWeight={600} fontSize={48}>
          WHY CHOOSE US?
        </Typography>
        <div className="header__arrow" />
      </div>
      <Spacer xs={100} />
      <Container>
        <div className="content">
          <div className="content__left">
            {whyList.map(el => (
              <Item key={el.title} src={el.src} title={el.title} />
            ))}
          </div>
          <div className="content__right">
            <div className="squares">
              <Sq4 left={-2} inViewPx={60} y={-60} />
              <Sq1 left={-2} inViewPx={60} y={-400} />
              <Sq2 left={60} inViewPx={60} y={-480} />
              <Sq3 left={84} inViewPx={60} y={-400} />
              <Sq4 left={100} inViewPx={60} y={-200} />
            </div>
          </div>
        </div>
      </Container>
      <Spacer xs={100} />
    </Div>
  );
};

export default WhyUsSection;

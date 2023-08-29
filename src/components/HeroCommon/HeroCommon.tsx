import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { NAV_HEIGHT } from '../conf';
import Spacer from '../Spacer';
import Link from 'next/link';
import { Buttonas } from '../form';
import useTranslation from '@/hooks/useTranslation';
import { motion } from 'framer-motion';

interface StyleProps {
  backgRoundColor?: string;
}

const Div = styled.div<StyleProps>`
  min-height: calc(100vh - ${NAV_HEIGHT}px);
  background-color: ${({ backgRoundColor }) => backgRoundColor};
  display: flex;
  flex-direction: column;

  .container {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    align-items: center;

    &__left {
      /* border: 1px solid red; */
    }

    &__right {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;

      .right-img {
        max-width: 100%;
        min-height: 100%;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 50px;
    min-height: 800px;
    .container {
      grid-template-columns: 1fr;
      &__left {
        &__title {
          font-size: 40px;
        }
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    .container {
      &__left {
        &__title {
          font-size: 30px;
        }
      }
    }
  }
`;

const MotionContainer = motion(Container);

interface HeroCommonProps extends StyleProps {
  title: string;
  subText: string;
  right: React.ReactNode;
}

const HeroCommon: React.FC<HeroCommonProps> = ({ title, subText, right, backgRoundColor = '#F7F8FA' }) => {
  const { translate } = useTranslation();
  return (
    <Div backgRoundColor={backgRoundColor}>
      <MotionContainer className="container" initial={{ y: 5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div className="container__left">
          <Typography fontSize={48} fontWeight={600} className="container__left__title">
            {title}
          </Typography>
          <Spacer xs={30} />
          <Typography>{subText}</Typography>
          <Spacer xs={60} />
          <Link href="/contact" prefetch>
            <Buttonas>{translate('NAV_CONTACT').toUpperCase()}</Buttonas>
          </Link>
        </div>
        <div className="container__right">{right}</div>
      </MotionContainer>
      <Spacer xs={100} />
    </Div>
  );
};

export default HeroCommon;

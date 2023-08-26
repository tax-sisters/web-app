import Spacer from '@/components/Spacer';
import { ThemeColors } from '@/util/theme';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { PC } from './comps/PC';
import useBreakpoints from '@/hooks/useBreakpoints';

const Div = styled.div`
  .container {
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    grid-gap: 120px;

    &__left {
      /* border: 1px solid red; */
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        object-fit: contain;
      }
    }
    &__right {
    }

    .link {
      cursor: pointer;
      text-decoration: underline;
      color: ${ThemeColors.GRAD_A};
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    .container {
      grid-template-columns: 1fr;
      grid-gap: 20px;

      &__left {
        max-width: 400px;
      }

      .grid1 {
        margin: 0 auto;
        grid-row: 2;
      }

      .header {
        font-size: 40px;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    .container {
      .header {
        font-size: 30px;
      }
    }
  }
`;

const IntroSection = () => {
  return (
    <Div>
      <Spacer xs={80} md={200} />
      <Container className="container">
        <div className="container__left grid1">
          <PC />
        </div>
        <div className="container__right grid2">
          <Typography fontSize={48} fontWeight={600} className="header">
            HEADING
          </Typography>
          <Spacer xs={35} />
          <Typography>
            Lorem ipsum dolor sit amet consectetur. Tristique dolor tincidunt feugiat interdum nec nisl non. In quisque
            nam elementum consectetur. Fermentum vel nulla nulla commodo donec fames. Id in ac suspendisse risus sed
            pellentesque aliquam. Ac varius nam nec eget. Suspendisse facilisis amet tortor senectus id ligula nibh
            nulla turpis. Mauris vitae nam et nisl libero cursus sed.vulputate.
          </Typography>

          <Spacer xs={10} />
          <Typography className="link">Read more...</Typography>
        </div>
      </Container>
      <Spacer xs={80} md={150} />
    </Div>
  );
};

export default IntroSection;

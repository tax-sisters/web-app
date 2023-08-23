import Spacer from '@/components/Spacer';
import { ThemeColors } from '@/util/theme';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { PC } from './comps/PC';

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
`;

const IntroSection = () => {
  return (
    <Div>
      <Spacer xs={200} />
      <Container className="container">
        <div className="container__left">
          <PC />
        </div>
        <div className="container__right">
          <Typography fontSize={48} fontWeight={600}>
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
      <Spacer xs={150} />
    </Div>
  );
};

export default IntroSection;

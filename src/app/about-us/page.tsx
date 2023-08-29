'use client';
import HeroCommon from '@/components/HeroCommon';
import Spacer from '@/components/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import useTranslation from '@/hooks/useTranslation';
import ReviewsSlider from '@/pageComponents/aboutUs/ReviewsSlider';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh);
`;

const AboutPage = () => {
  const { translate } = useTranslation();
  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <HeroCommon
        title={translate('NAV_ABOUT').toUpperCase()}
        subText={`Lorem ipsum dolor sit amet consectetur. Tristique dolor tincidunt feugiat interdum nec nisl non. In quisque nam elementum consectetur. Fermentum vel nulla nulla commodo donec fames. Id in ac suspendisse risus sed pellentesque aliquam. Ac varius nam nec eget. Suspendisse facilisis amet tortor senectus id ligula nibh nulla turpis. Mauris vitae nam et nisl libero cursus sed.vulputate.`}
        right={<img src="/img/hero-aboutus.png" className="right-img" alt="" />}
      />
      <Spacer xs={119} />
      <Typography fontWeight={600} fontSize={36} textAlign={'center'}>
        WHAT OUR CLIENTS SAY
      </Typography>
      <Spacer xs={100} />
      <ReviewsSlider />
      <Spacer xs={100} />
    </Main>
  );
};

export default AboutPage;

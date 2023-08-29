'use client';
import HeroCommon from '@/components/HeroCommon/HeroCommon';
import Spacer from '@/components/Spacer/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import useTranslation from '@/hooks/useTranslation';
import AllServices from '@/pageComponents/businessServices/AllServices';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const Main = styled.main`
  min-height: calc(100vh);
`;

const BServicesPage = () => {
  const { translate } = useTranslation();
  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <HeroCommon
        title={translate('NAV_BSERVICES').toUpperCase()}
        subText={`Lorem ipsum dolor sit amet consectetur. Tristique dolor tincidunt feugiat interdum nec nisl non. In quisque nam elementum consectetur. Fermentum vel nulla nulla commodo donec fames. Id in ac suspendisse risus sed pellentesque aliquam. Ac varius nam nec eget. Suspendisse facilisis amet tortor senectus id ligula nibh nulla turpis. Mauris vitae nam et nisl libero cursus sed.vulputate.`}
        right={<img src="/img/hero-bservices.png" className="right-img" alt="" />}
      />
      <Spacer xs={110} />
      <Typography fontWeight={600} fontSize={36} textAlign={'center'}>
        ALL SERVICES
      </Typography>
      <Spacer xs={60} />
      <AllServices />
      <Spacer xs={160} />
    </Main>
  );
};

export default BServicesPage;

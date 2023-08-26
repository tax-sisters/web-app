'use client';
import HeroCommon from '@/components/HeroCommon';
import Spacer from '@/components/Spacer/Spacer';
import { NAV_HEIGHT } from '@/components/conf';
import useTranslation from '@/hooks/useTranslation';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import animation from '@/lottie/visa-services.json';

const Main = styled.main`
  min-height: calc(100vh);
`;

const VServicesPage = () => {
  const { translate } = useTranslation();
  return (
    <Main>
      <Spacer xs={NAV_HEIGHT} />
      <HeroCommon
        backgRoundColor="white"
        title={translate('NAV_VSERVICES').toUpperCase()}
        subText={`Lorem ipsum dolor sit amet consectetur. Tristique dolor tincidunt feugiat interdum nec nisl non. In quisque nam elementum consectetur. Fermentum vel nulla nulla commodo donec fames. Id in ac suspendisse risus sed pellentesque aliquam. Ac varius nam nec eget. Suspendisse facilisis amet tortor senectus id ligula nibh nulla turpis. Mauris vitae nam et nisl libero cursus sed.vulputate.`}
        right={<Lottie animationData={animation} />}
      />
    </Main>
  );
};

export default VServicesPage;

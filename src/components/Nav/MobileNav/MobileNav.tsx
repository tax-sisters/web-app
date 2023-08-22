import styled from 'styled-components';
import { NavLink } from './../comps';
import useTranslation from '@/hooks/useTranslation';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Spacer from '@/components/Spacer/Spacer';

const Div = styled.div`
  position: fixed;
  background-color: gray;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding: 30px 40px 40px 40px;
`;

interface MobileNavProps {}

const MobileNav: React.FC<MobileNavProps> = () => {
  const { translate } = useTranslation();

  return (
    <Div>
      <LanguageSwitcher />
      <Spacer xs={50} />
      <NavLink title={translate('NAV_HOME')} path="/" />
      <NavLink title={translate('NAV_ABOUT')} path="/about-us" />
      <NavLink title={translate('NAV_BSERVICES')} path="/business-services" />
      <NavLink title={translate('NAV_VSERVICES')} path="/visa-services" />
      <NavLink title={translate('NAV_CONTACT')} path="/contact" />
    </Div>
  );
};

export default MobileNav;

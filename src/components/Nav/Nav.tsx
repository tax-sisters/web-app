'use client';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import { NavLink } from './comps';
import LanguageSwitcher from '../LanguageSwitcher';
import useTranslation from '@/hooks/useTranslation';
import { useRouter } from 'next/navigation';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Sling } from 'hamburger-react';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav/MobileNav';

const Div = styled.div`
  border: 1px solid red;
  height: 80px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    &__ham {
      position: relative;
      z-index: 100;
    }

    &--nav-links {
      display: flex;
      justify-content: space-between;
      /* border: 1px solid blue; */
    }
  }
`;

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { translate } = useTranslation();
  const isMd = useBreakpoints('md');

  // const targetElement = useRef(document?.querySelector('body'));

  useEffect(() => {
    if (!isMd) {
      setIsMobileMenuOpen(false);
      document.body.style.overflow = 'visible';
    } else {
    }
  }, [isMd]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMobileMenuOpen]);

  return (
    <Div>
      <Container className="container">
        <Typography fontWeight={600} onClick={() => router.push('/')}>
          LOGO
        </Typography>
        {isMd ? (
          <>
            <div className="container__ham">
              <Sling
                color={isMobileMenuOpen ? 'white' : 'black'}
                toggled={isMobileMenuOpen}
                onToggle={(e) => setIsMobileMenuOpen(e)}
              />
            </div>
            {isMobileMenuOpen && <MobileNav />}
          </>
        ) : (
          <>
            <div className="container--nav-links">
              <NavLink title={translate('NAV_HOME')} path="/" />
              <NavLink title={translate('NAV_ABOUT')} path="/about-us" />
              <NavLink title={translate('NAV_BSERVICES')} path="/business-services" />
              <NavLink title={translate('NAV_VSERVICES')} path="/visa-services" />
              <NavLink title={translate('NAV_CONTACT')} path="/contact" />
            </div>

            <LanguageSwitcher />
          </>
        )}
      </Container>
    </Div>
  );
};

export default Nav;


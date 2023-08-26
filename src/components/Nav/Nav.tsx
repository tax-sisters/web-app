'use client';
import { Container, Slide, Typography, useScrollTrigger } from '@mui/material';
import styled from 'styled-components';
import { NavLink } from './comps';
import LanguageSwitcher from '../LanguageSwitcher';
import useTranslation from '@/hooks/useTranslation';
import { usePathname } from 'next/navigation';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Sling } from 'hamburger-react';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import { gradient } from '@/util/theme';
import { NAV_HEIGHT } from '../conf';
import Link from 'next/link';

const Div = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  height: ${NAV_HEIGHT}px;
  ${gradient()}

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    &__logo {
      -webkit-tap-highlight-color: transparent;
      text-decoration: none;
    }

    &__ham {
      position: relative;
      z-index: 100;
      -webkit-tap-highlight-color: transparent;
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
  const { translate } = useTranslation();
  const isMd = useBreakpoints('md');
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const scrollTrigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true,
  });

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
    <Slide direction="down" in={!scrollTrigger}>
      <Div>
        {/* <Div animate={{ y: navHidden ? -100 : 0 }} transition={{ type: 'spring', damping: 35, stiffness: 350 }}> */}
        <Container className="container">
          <Link href="/" prefetch className="container__logo">
            <Typography style={{ color: 'white' }} fontWeight={600}>
              LOGO
            </Typography>
          </Link>
          {isMd ? (
            <>
              <div className="container__ham">
                <Sling color={'white'} toggled={isMobileMenuOpen} onToggle={e => setIsMobileMenuOpen(e)} />
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
    </Slide>
  );
};

export default Nav;

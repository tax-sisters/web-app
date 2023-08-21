'use client';
import { Container, Slide, Typography, useScrollTrigger } from '@mui/material';
import styled from 'styled-components';
import { NavLink } from './comps';
import LanguageSwitcher from '../LanguageSwitcher';
import useTranslation from '@/hooks/useTranslation';
import { useRouter } from 'next/navigation';
import useBreakpoints from '@/hooks/useBreakpoints';
import { Sling } from 'hamburger-react';
import { useEffect, useState } from 'react';
import MobileNav from './MobileNav/MobileNav';
import { motion } from 'framer-motion';

const Div = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  /* top: 0; */
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

const MotionDiv = motion(Div);

interface NavProps {}

const Nav: React.FC<NavProps> = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { translate } = useTranslation();
  const isMd = useBreakpoints('md');
  const [navHidden, setNavHidden] = useState(false);

  // const targetElement = useRef(document?.querySelector('body'));

  // useEffect(() => {
  //   const child = document.querySelector('body');

  //   window.addEventListener('scroll', () => {
  //     const pos = child?.getBoundingClientRect();

  //     if (pos) {
  //       console.log(pos.y);
  //       if (pos.y !== 0) {
  //         // if (pos.y !== 0) {
  //         setNavHidden(true);
  //       } else {
  //         setNavHidden(false);
  //       }
  //     }
  //   });
  // }, []);

  const scrollTrigger = useScrollTrigger({
    threshold: 100,
    disableHysteresis: true
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

  // console.log('scrollTrigger', scrollTrigger);

  return (
    <Slide direction="down" in={!scrollTrigger}>
      <Div>
        {/* <Div animate={{ y: navHidden ? -100 : 0 }} transition={{ type: 'spring', damping: 35, stiffness: 350 }}> */}
        <Container className="container">
          <Typography style={{ color: 'white' }} fontWeight={600} onClick={() => router.push('/')}>
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
    </Slide>
  );
};

export default Nav;


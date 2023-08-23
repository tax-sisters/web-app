'use client';
import { ThemeColors } from '@/util/theme';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import Spacer from '../Spacer';
import Link from 'next/link';

const Foot = styled.footer`
  background-color: ${ThemeColors.SECTION_GRAY};

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__left {
      &__link {
        display: flex;
        align-items: center;
        &__icon {
          width: 30px;
          margin-right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .link {
          color: ${ThemeColors.TEXT_BLACK} !important;
        }
      }
    }
    &__right {
    }
  }
`;

const tel = '+123456789';
const mail = 'simaszurauskas@gmail.com';
const location = 'Birmingham, UK';

const Footer = () => {
  return (
    <Foot>
      <Spacer xs={76} />
      <Container>
        <div className="content">
          <div className="content__left">
            <Typography fontWeight={600} fontSize={20}>
              TAX SISTERS
            </Typography>
            <Typography fontSize={20}>Company registration number: 13635805</Typography>
            <Spacer xs={40} />
            <div className="content__left__link">
              <div className="content__left__link__icon">
                <img src="/img/footer-phone.svg" alt="" />
              </div>
              <Link href={`tel:${tel}`} className="link">
                <Typography fontSize={20}>{tel}</Typography>
              </Link>
            </div>
            <div className="content__left__link">
              <div className="content__left__link__icon">
                <img src="/img/footer-mail.svg" alt="" />
              </div>
              <Link href={`mailto:${mail}`} className="link">
                <Typography fontSize={20}>{mail}</Typography>
              </Link>
            </div>
            <div className="content__left__link">
              <div className="content__left__link__icon">
                <img src="/img/footer-map.svg" alt="" />
              </div>

              <Typography fontSize={20}>{location}</Typography>
            </div>
          </div>
          {/* <div className="content__right">
            <Typography fontSize={20}>Contact us on social media</Typography>
          </div> */}
        </div>
        <Spacer xs={50} />
        <Typography textAlign="center">
          Copyright {new Date().getFullYear()} © Tax Sisters Ltd. All rights reserved.
        </Typography>
      </Container>
      <Spacer xs={20} />
    </Foot>
  );
};

export default Footer;

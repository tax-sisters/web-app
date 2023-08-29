'use client';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { Typography } from '@mui/material';
import Spacer from '@/components/Spacer/Spacer';
import Link from 'next/link';
import { EMAIL, TELEPHONE } from '@/constants';
import { ThemeColors, gradient } from '@/util/theme';
import useTranslation from '@/hooks/useTranslation';
import { IconMail, IconMap, IconPhone } from '@/assets/dynamicSvg';

const Div = styled.div`
  background-color: white;
  padding: 50px 55px 50px 65px;
  ${gradient()}

  .containerx {
    position: relative;
    max-width: 990px;

    &__map {
      position: relative;
      border: 1px solid #ceccce;
      height: 220px;
    }
  }

  .link {
    display: flex;
    align-items: center;

    &__icon {
      width: 30px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .text-white {
    color: ${ThemeColors.WHITE} !important;
  }

  .nostyle-link {
    color: ${ThemeColors.WHITE} !important;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 50px 28px;
  }
`;

const position = [52.40821, -1.8303];

const Map = () => {
  const { translate } = useTranslation();

  return (
    <Div className="grid-1">
      <div className="containerx">
        <Typography fontWeight={600} fontSize={24} className="text-white">
          {translate('CONTACT_ADDRESS')}
        </Typography>
        <div className="link">
          <div className="link__icon">
            <IconMap color="white" />
          </div>
          <Typography fontSize={20} className="text-white">
            Blyde Rd, Blythe Valley Park, Shirley, Solihull B90 8AG, UK
          </Typography>
        </div>

        <Spacer xs={44} />
        <Typography fontWeight={600} fontSize={24} className="text-white">
          {translate('CONTACT_CALL_US')}
        </Typography>
        <Spacer xs={5} />
        <div className="link">
          <div className="link__icon">
            <IconPhone color="white" />
          </div>
          <Link href={`tel:${TELEPHONE}`} className="nostyle-link">
            <Typography fontSize={20} className="text-white">
              {TELEPHONE}
            </Typography>
          </Link>
        </div>

        <Spacer xs={44} />
        <Typography fontWeight={600} fontSize={24} className="text-white">
          {translate('CONTACT_GENERAL_ENQUIRIES')}
        </Typography>
        <Spacer xs={5} />
        <div className="link">
          <div className="link__icon">
            <IconMail color="white" />
          </div>
          <Link href={`mailto:${EMAIL}`} className="nostyle-link">
            <Typography fontSize={20} className="text-white">
              {EMAIL}
            </Typography>
          </Link>
        </div>
        <Spacer xs={44} />
        <div className="containerx__map">
          {/* @ts-ignore */}
          <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>A marker!</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Div>
  );
};

export default Map;

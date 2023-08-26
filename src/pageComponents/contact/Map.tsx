'use client';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import 'leaflet-defaulticon-compatibility';
import { Typography } from '@mui/material';
import Spacer from '@/components/Spacer/Spacer';
import Link from 'next/link';
import { TELEPHONE } from '@/constants';
import { ThemeColors } from '@/util/theme';

const Div = styled.div`
  background-color: white;

  .containerx {
    position: relative;
    max-width: 990px;
    margin: 0 auto;
    &__map {
      position: relative;
      border: 1px solid #ceccce;
      height: 427px;
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

  .nostyle-link {
    color: ${ThemeColors.TEXT_BLACK} !important;
  }
`;

const Map = () => {
  const position = [52.40821, -1.8303];

  return (
    <Div>
      <Typography textAlign={'center'} fontWeight={600} fontSize={28}>
        We are based in the UK
      </Typography>
      <Spacer xs={30} />
      <div className="containerx">
        <div className="containerx__map">
          {/* @ts-ignore */}
          <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
              <Popup>A marker!</Popup>
            </Marker>
          </MapContainer>
        </div>

        <Spacer xs={30} />
        <div className="link">
          <div className="link__icon">
            <img src="/img/footer-map.svg" alt="" />
          </div>
          <Typography fontSize={20}>Blyde Rd, Blythe Valley Park, Shirley, Solihull B90 8AG, UK</Typography>
        </div>
        <Spacer xs={44} />
        <Typography fontWeight={600} fontSize={24}>
          Call us on
        </Typography>
        <Spacer xs={5} />
        <div className="link">
          <div className="link__icon">
            <img src="/img/footer-phone.svg" alt="" />
          </div>
          <Link href={`tel:${TELEPHONE}`} className="nostyle-link">
            <Typography fontSize={20}>{TELEPHONE}</Typography>
          </Link>
        </div>
        <Spacer xs={150} />
      </div>
    </Div>
  );
};

export default Map;

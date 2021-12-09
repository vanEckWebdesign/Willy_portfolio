import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  const { t } = useTranslation();
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">{t('map__card__heading')}</h3>
          <PText>Winterjanstraat 15, 5632 MJ, Eindhoven, The Netherlands</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/Winterjanstraat+15,+5632+MJ+Eindhoven/@51.4786891,5.4929831,17z/data=!4m5!3m4!1s0x47c6df29cb6d62bd:0x554a36e65a31d2d!8m2!3d51.4786891!4d5.4929831"
            target="_blank"
            rel="noreferrer"
          >
            Open in google maps
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}

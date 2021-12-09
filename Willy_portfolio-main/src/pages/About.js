import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import PText from '../components/PText';
// import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 1.5;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.5rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
    line-height: 4rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0rem;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2rem;
    }
    .about__info__heading {
      font-size: 2rem;
    }
  }
`;

export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                {t('about__subheading')} <span>Willy van Eck</span>
              </p>
              <h2 className="about__heading">{t('about__heading')}</h2>
              <div className="about__info">
                <PText>
                  <p className="about-info-1">
                    {t('about__info.about-info-1')}
                  </p>
                  <br /> <br />
                  <p className="about-info-2">
                    {t('about__info.about-info-2')}
                  </p>
                  <br />
                  <br />
                  <p className="about-info-3">
                    {t('about__info.about-info-3')}
                  </p>
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">
                {t('about__info__heading')}
              </h1>

              <AboutInfoItem
                title={['S.C.E.']}
                items={t(['about__info__items.AboutInfoItem.items.items'])}
              />
              <AboutInfoItem
                title="ROC Tilburg"
                items={t(['about__info__items.AboutInfoItem.items'])}
              />
              <AboutInfoItem
                title="ROC Tilburg"
                items={t([
                  'about__info__items.about__info__item.AboutInfoItem.items',
                ])}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">
                {t('about__info__item.about__info__heading')}
              </h1>

              <AboutInfoItem
                title={t('AboutInfoItem.title')}
                items={t(['about__info__item.AboutInfoItem.items'])}
              />
              <AboutInfoItem
                title={t('about__info__item.AboutInfoItem.title')}
                items={t(['AboutInfoItem.items'])}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">
                {t('about__info__items.about__info__item.about__info__heading')}
              </h1>
              <AboutInfoItem
                title="2016"
                items={['Mansvelt Techniek Eindhoven.']}
              />
              <AboutInfoItem
                title="2019-2020"
                items={t([
                  'about__info__items.about__info__item.about__info__heading.items',
                ])}
              />
              <AboutInfoItem
                title="2021-2022"
                items={t([
                  'about__info__items.about__info__item.AboutInfoItem.about__info__heading.items',
                ])}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

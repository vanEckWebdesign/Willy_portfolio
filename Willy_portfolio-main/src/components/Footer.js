import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  const { t } = useTranslation();
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Willy van Eck</h1>
          <PText>{t('FooterStyle.PText')}</PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading={t('FooterCol.heading')}
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+31614849590',
                path: 'tel:+31614849590',
              },
              {
                title: 'willyvaneck2001@gmail.com',
                path: 'mailto:willyvaneck2001@gmail.com',
              },
              {
                title: 'Winterjanstraat 15, Eindhoven, The Netherlands',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/willy.vaneck.1',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
              {
                title: 'linkedin',
                path: 'https://www.linkedin.com/in/willy-van-eck-9202ba183/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Willy van Eck | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="http://simbagio.com">
              Simbagio
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}

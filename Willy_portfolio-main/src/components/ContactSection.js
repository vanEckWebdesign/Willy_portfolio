import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
// import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';

const ContactSectionStyle = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }
  .contactSection__wrapper::after {
    position: absolute;
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }
  .left {
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
    border-radius: 12px;
    /* padding-left: 3rem; */
  }
  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .contactSection__wrapper::after {
      display: none;
    }
    .left,
    .right {
      max-width: 100%;
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle
          heading="contact"
          subheading={t('ContactSectionStyle.subheading')}
        />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+31614849590" />
            <ContactInfoItem
              icon={<MdEmail />}
              text="willyvaneck2001@gmail.com"
            />
            <ContactInfoItem text="Winterjanstraat 15, 5632 MJ, Eindhoven, The Netherlands" />
          </div>
          {/* <div className="right">
            <ContactForm />
          </div> */}
        </div>
      </div>
    </ContactSectionStyle>
  );
}

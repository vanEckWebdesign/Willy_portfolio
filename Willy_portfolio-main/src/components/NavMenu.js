import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--dark-bg);
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }
    .active {
      color: var(--white);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  .flags {
    padding: 1rem 3rem;
  }
  .flag--netherlands {
    height: 3rem;
    width: 3rem;
    border-style: none;
    margin-left: 0.3rem;
    background-color: transparent;
    cursor: pointer;
  }
  .flag--england {
    height: 3rem;
    width: 3rem;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1rem;
      transition: 0.3s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 300px;
      border-radius: 12px;
      position: absolute;
      right: 1rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;

const changeLanguage = (ln) => () => {
  i18n.changeLanguage(ln);
};
export default function NavMenu() {
  const { t } = useTranslation();
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div className="flags">
        <button
          className="flag--england"
          onClick={changeLanguage('nl')}
          type="button"
        >
          <img
            src="https://img.icons8.com/color/48/000000/great-britain-circular.png"
            alt="English"
          />
        </button>
        <button
          className="flag--netherlands"
          onClick={changeLanguage('en')}
          type="button"
        >
          <img
            src="https://img.icons8.com/color/48/000000/luxembourg-circular.png"
            alt="netherlands"
          />
        </button>
      </div>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            className="nav-home"
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('nav-home')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-about"
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('nav-about')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-projects"
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('nav-projects')}
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav-contact"
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {t('nav-contact')}
          </NavLink>
        </li>
      </ul>
    </NavStyles>
  );
}

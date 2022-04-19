import './navbar.css';

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';

import userIcon from '../../assets/icons/user-gold.svg';
import logoImg from '../../assets/logos/starzmag.svg';
import isMobile from '../../lib/isMobile';
import LoginBox from '../LoginBox/LoginBox';
import Modal from '../Modal/Modal';

function Navbar() {
  const history = useHistory();

  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  window.onscroll = () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition < 30
    || currentScrollPosition < lastScrollPosition
    || currentScrollPosition + window.innerHeight > document.body.offsetHeight - 30
    || window.innerHeight + 250 > document.body.offsetHeight) {
      setShowNavbar(true);
    } else if (currentScrollPosition > lastScrollPosition) {
      setShowNavbar(false);
    }

    setLastScrollPosition(currentScrollPosition);
  };

  function handleLoginClick() {
    if (isMobile || window.innerHeight < 500 || window.innerWidth < 330) {
      history.push('/login');
    } else {
      setShowLoginBox(true);
    }
  }

  return (
    <>
      <div className="upper-band" />
      <div
        className={`
          navbar
          ${!showNavbar ? 'navbar-hidden' : ''}
          ${!isMobile ? 'navbar-laptop' : ''}
        `}
      >
        <div>
          <div className="navbar-left" />
          <Link className="navbar-center" to="/">
            <img src={logoImg} />
          </Link>
          <div className="navbar-right">
            <div className="navbar-login" onClick={handleLoginClick}>
              <img src={userIcon} />
              <p><FormattedMessage id="logIn" /></p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isVisible={showLoginBox}
        onClose={() => setShowLoginBox(false)}
        openingAnimation="animate__animated animate__jackInTheBox"
      >
        <div className="mini-login">
          <LoginBox />
        </div>
      </Modal>
    </>
  );
}

export default Navbar;

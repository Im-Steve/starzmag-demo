import './loginBox.css';

import React from 'react';
import { FormattedMessage } from 'react-intl';

import loginTopImg from '../../assets/login/login-top.png';

function LoginBox() {
  return (
    <div className="login-box">
      <img src={loginTopImg} className="login-top" />
      <div className="login-content">
        <p className="login-header">
          <FormattedMessage id="loginHeader" />
        </p>
        <p className="login-message">
          <FormattedMessage id="loginMessage" />
        </p>
        <div className="login-button">
          <p><FormattedMessage id="logIn" /></p>
        </div>
        <div className="login-footer">
          <FormattedMessage id="loginFooter1" />
          <p className="login-footer-link"><FormattedMessage id="loginFooter2" /></p>
          <FormattedMessage id="loginFooter3" />
        </div>
      </div>
    </div>
  );
}

export default LoginBox;

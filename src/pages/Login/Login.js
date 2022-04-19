import './login.css';

import React from 'react';

import LoginBox from '../../components/LoginBox/LoginBox';
import Navbar from '../../components/Navbar/Navbar';
import isMobile from '../../lib/isMobile';

function Login() {
  return (
    <>
      <Navbar />
      <div className={`login-page ${!isMobile ? 'login-page-laptop' : ''}`}>
        <LoginBox />
      </div>
    </>
  );
}

export default Login;

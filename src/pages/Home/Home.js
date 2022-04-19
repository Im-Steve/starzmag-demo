import './home.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Cover from './Cover/Cover';
import Summary from './Summary/Summary';

const propTypes = {
  magIsOpen: PropTypes.bool,
};

const defaultProps = {
  magIsOpen: false,
};

function Home({ magIsOpen }) {
  const [coverIsUp, setCoverIsUp] = useState(magIsOpen);
  const [showSummary, setShowSummary] = useState(magIsOpen);

  function handleOpening() {
    setCoverIsUp(true);
    setTimeout(() => { setShowSummary(true); }, 1000);
  }

  return (
    <>
      <div
        className={`home-cover ${coverIsUp ? 'home-cover-up' : ''}`}
        onClick={() => handleOpening()}
      >
        <Cover />
      </div>

      {showSummary && (
        <>
          <Navbar />
          <Summary />
          <Footer />
        </>
      )}
    </>
  );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;

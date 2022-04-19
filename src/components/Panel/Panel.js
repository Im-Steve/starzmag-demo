import './panel.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import isMobile from '../../lib/isMobile';

const propTypes = {
  panelObject: PropTypes.shape({
    available: PropTypes.bool,
    background: PropTypes.string.isRequired,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  scrollPosition: PropTypes.shape.isRequired,
};

function Panel({ panelObject, scrollPosition }) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Link to={panelObject.link || ''}>
      <div
        className={`
          panel
          ${panelObject.available ? 'panel-available' : ''}
        `}
        onClick={() => setIsClicked(true)}
      >
        <LazyLoadImage
          src={panelObject.background}
          className={`
            panel-background
            ${!panelObject.available ? 'panel-bg-hover' : ''}
            ${isClicked && isMobile && !panelObject.available ? 'panel-bg-clicked' : ''}
          `}
          scrollPosition={scrollPosition}
        />
        <p className="panel-title">{panelObject.title}</p>
        {panelObject.available
          && <p className="panel-label-free"><FormattedMessage id="free" /></p>}
        <p
          className={`
            panel-blocked
            ${!panelObject.available ? 'panel-blocked-hover' : ''}
            ${isClicked && isMobile && !panelObject.available ? 'panel-blocked-clicked' : ''}
          `}
        >
          <FormattedMessage id="panelBlocked" />
        </p>
      </div>
    </Link>
  );
}

Panel.propTypes = propTypes;

export default trackWindowScroll(({ ...props }, scrollPosition) => Panel(
  { ...props }, scrollPosition,
));

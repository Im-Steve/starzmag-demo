import './modal.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import closeIcon from '../../assets/icons/close-red.svg';

const propTypes = {
  children: PropTypes.element.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  openingAnimation: PropTypes.string,
};

const defaultProps = {
  openingAnimation: '',
};

function Modal({
  openingAnimation,
  children,
  isVisible,
  onClose,
}) {
  const [prevIsVisible, setPrevIsVisible] = useState(false);

  if (isVisible && !prevIsVisible) {
    document.body.style.overflowY = 'hidden';
    setPrevIsVisible(true);
  } else if (!isVisible && prevIsVisible) {
    document.body.style.overflowY = 'scroll';
    setPrevIsVisible(false);
  }

  function clickOutside(event) {
    if (event.target.id === 'modal-background') {
      onClose();
    }
  }

  return (
    <div
      id="modal-background"
      className={isVisible ? 'modal-background' : 'hidden-modal'}
      onClick={(event) => clickOutside(event)}
    >
      <div className={isVisible ? openingAnimation : ''}>
        <img src={closeIcon} className="modal-close" onClick={onClose} />
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;

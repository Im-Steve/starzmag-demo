import './footer.css';

import React from 'react';
import { FormattedMessage } from 'react-intl';

function Footer() {
  return (
    <div className="footer">
      <div>
        <p><FormattedMessage id="footer1" /></p>
        <a href="https://github.com/Im-Steve" target="_blank" rel="noreferrer">
          <FormattedMessage id="footer2" />
        </a>
      </div>
      <div>
        <p><FormattedMessage id="footer3" /></p>
        <a href="https://github.com/Im-Steve/starzmag-demo" target="_blank" rel="noreferrer">
          <FormattedMessage id="footer4" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

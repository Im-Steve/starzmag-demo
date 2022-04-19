import './app.css';

import React from 'react';
import { IntlProvider } from 'react-intl';

import messagesFr from './lib/i18n/fr';
import isMobile from './lib/isMobile';
import Routes from './Routes';

function App() {
  return (
    <div className={`app ${!isMobile ? 'app-laptop' : ''}`}>
      <IntlProvider locale="fr" messages={messagesFr}>
        {Routes}
      </IntlProvider>
    </div>
  );
}

export default App;

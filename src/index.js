import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import 'materialize-css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();

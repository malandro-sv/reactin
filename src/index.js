import 'tachyons';
import './index.css';

import React from 'react';
import Card from './Card';

import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
	  <Card />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

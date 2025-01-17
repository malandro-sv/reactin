import 'tachyons';
import './index.css';

import React from 'react';
import Card from './Card';
import {robots} from './robots';

import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

	  <Card id={robots[0].id}
            name={robots[0].name}
            email={robots[0].email} />

	  <Card id={robots[1].id}
            name={robots[1].name}
            email={robots[1].email} />

	  <Card id={robots[2].id}
            name={robots[2].name}
            email={robots[2].email} />

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

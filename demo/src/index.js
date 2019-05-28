import React from 'react';
import ReactDOM from 'react-dom';
import './public/css/common.css';

import * as serviceWorker from './serviceWorker';

import Index from './home/index';


ReactDOM.render(<Index />, document.getElementById('root'));


serviceWorker.unregister();

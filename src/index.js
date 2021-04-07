import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/css/bootstrap.min.css';
import './assets/css/meanmenu.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/font-awesome.min.css';
import './assets/css/flexslider.css';
import './assets/css/chosen.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import {BrowserRouter} from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


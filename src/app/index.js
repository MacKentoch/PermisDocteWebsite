'use strict';

import React                from 'react';
import ReactDOM             from 'react-dom';
import injectTpEventPlugin  from 'react-tap-event-plugin';
import Home                 from './containers/home/Home.jsx';


import 'animate.css';
import 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './style/index.style.scss';

const ELEMENT_TO_BOOTSTRAP  = 'root';
const BootstrapedElement    = document.getElementById(ELEMENT_TO_BOOTSTRAP);

injectTpEventPlugin();

ReactDOM.render(<Home />, BootstrapedElement);

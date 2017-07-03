//Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Custom imports
import Tempinfo from './components/tempinfo';
import Places from './components/places';
import DATA from './sunspots_JSON';
import './css/style.css';

ReactDOM.render(<Tempinfo />, document.getElementById('tempinfo'));
registerServiceWorker();

ReactDOM.render(<Places Places={DATA} key={DATA.id} />, document.getElementById('places'));
registerServiceWorker();


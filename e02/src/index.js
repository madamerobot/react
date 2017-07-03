//Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Custom imports
import Tempinfo from './tempinfo';
import Places from './places';
import DATA from './sunspots_JSON';

ReactDOM.render(<Tempinfo />, document.getElementById('tempinfo'));
registerServiceWorker();

ReactDOM.render(<Places Places={DATA} key={DATA.id} />, document.getElementById('places'));
registerServiceWorker();


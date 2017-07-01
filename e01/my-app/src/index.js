//Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Custom components
import App from './App';
import Places from './Places';
import Slider from './Slider';
import DATA from './JSONtest';

//DOM Elements
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Slider />, document.getElementById('slider'));
registerServiceWorker();

ReactDOM.render(<Places Places={DATA} key={DATA.id}/>, document.getElementById('places'));
registerServiceWorker();



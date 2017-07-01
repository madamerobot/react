import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Places from './Places';
import DATA from './JSONtest';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Places Places={DATA} key={DATA.id}/>, document.getElementById('places'));
registerServiceWorker();



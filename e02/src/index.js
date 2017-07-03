//Standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//Custom imports
import App from './components/app'

ReactDOM.render(<App/>, document.getElementById('app'));
registerServiceWorker();



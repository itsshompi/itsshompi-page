import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';


import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

//require('setimmediate')

//var React = require('react')
//var { render } = require('react-dom')
//var Router = require('react-router/lib/Router')
//var createHashHistory = require('history/lib/createHashHistory')
//var useScroll = require('react-router-scroll/lib/useScroll')
//var applyRouterMiddleware = require('react-router/lib/applyRouterMiddleware')
//var history = createHashHistory()

//var routes = require('./routes')

//render(<Router history={history} render={applyRouterMiddleware(useScroll())} routes={routes} />, document.getElementById('app'))

registerServiceWorker();

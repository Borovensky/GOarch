import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import WebFont from 'webfontloader';

import App from './components/App';

ReactDOM.render(
    <Provider>
        <Router>
            <App/>
        </Router>
    </Provider>,
     document.getElementById('root'));

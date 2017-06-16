'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './public/index.css';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';
import {BrowserRouter} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
document.getElementById('root'));

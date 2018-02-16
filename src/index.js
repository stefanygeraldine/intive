import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { getCountries } from './actionCreators';
import { loadMessage } from './actionCreators';
import { initializateValidation } from './actionCreators';

store.dispatch(getCountries());
store.dispatch(loadMessage());
store.dispatch(initializateValidation());
ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from 'store/store';

import { Alert } from 'common/components';

import App from './App';

export const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Alert />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

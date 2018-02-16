import React from 'react';
import ReactDOM from 'react-dom';

// store
import { Provider } from 'react-redux';
import store from './store/store';

// main app
import App from './containers/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

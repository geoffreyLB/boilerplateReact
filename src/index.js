import React from 'react';
import ReactDOM from 'react-dom';

// store
import { Provider } from 'react-redux';
import store from './store/store';

//routes
import AppRoutes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root'),
);

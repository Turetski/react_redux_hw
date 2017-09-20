import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(<Provider store={store}>
        <BrowserRouter history={React.browserHistory}>
            <App />
        </BrowserRouter>    
    </Provider>
    , document.getElementById('root'));
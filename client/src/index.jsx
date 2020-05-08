import React from 'react';
import ReactDOM from 'react-dom';
/* ----- Redux ----- */
import { Provider } from "react-redux";
import store from './redux/store'
/* ----- Styles ----- */
import { StylesProvider } from '@material-ui/core/styles'
/* ----- RRD components ----- */
import App from './App';

ReactDOM.render(
    <StylesProvider injectFirst>
        <Provider store={store}>
            <App />
        </Provider>
    </StylesProvider>, document.getElementById('root'));

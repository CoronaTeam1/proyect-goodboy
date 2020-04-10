import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducer from './redux/reducer/reducer'
import store from './redux/store' // Aqui importamos el store que vamos a usar y se lo pasamos al provider
import { StylesProvider } from '@material-ui/core/styles'
import App from './App';

// const store = createStore(reducer)



ReactDOM.render(
    <StylesProvider injectFirst>
        <Provider store={store}>
            <App />
        </Provider>
    </StylesProvider>, document.getElementById('root'));

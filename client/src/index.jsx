import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './redux/reducer/reducer'
import 'bootstrap/dist/css/bootstrap.min.css';  
import './index.css';

import App from './App';

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {Store} from './redux/reducers/combine'

ReactDOM.render(
    <Provider store={Store} >
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

reportWebVitals();

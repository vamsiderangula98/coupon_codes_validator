import React from 'react';
import {createRoot} from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import rootReducers from "./Reducers/rootReducers";
const root=createRoot( document.getElementById('root'));
const store = createStore(rootReducers);

root.render(<Provider store={store}><App /></Provider>);
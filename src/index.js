import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import firebaseConfig from './config';
import firebase from 'firebase/app';
import 'firebase/auth';
import launches from './reducers/launches';
import display from './reducers/display';

firebase.initializeApp(firebaseConfig);

const store = createStore(combineReducers({launches,display}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

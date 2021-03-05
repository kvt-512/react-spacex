import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const launches = (state = {
  launches: [],
  flight: {}
}, action) => {
  switch (action.type) {
    case "all":
      return {...state, launches: action.allLaunches}
    case "past":
      return {...state, launches: action.pastLaunches}
    case "upcoming":
      return {...state, launches: action.upComingLaunches}
    case "search":
      return { ...state, flight: action.searchLaunch}
    case "date":
      return {...state, launches: action.launch}
    default:
      return state;
  }
}

const store = createStore(launches)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

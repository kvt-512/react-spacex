import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebaseConfig from './components/Login/config';
import firebase from 'firebase/app';
import 'firebase/auth';


firebase.initializeApp(firebaseConfig);

const launches = (state = {
  launches: [],
  flight: {},
  user: "",
  actives: ["login"]
}, action) => {
  switch (action.type) {
    case "all":
      return {...state, 
        launches: action.allLaunches, 
        actives: ["logout", "form", "table"]
      }
    case "past":
      return {...state,
        launches: action.pastLaunches,
        actives: ["logout", "form", "table"]
      }
    case "upcoming":
      return {...state,
        launches: action.upComingLaunches,
        actives: ["logout", "form", "table"]
      }
    case "search":
      return { ...state, flight: action.searchLaunch,
        actives: ["logout", "form", "details"]
      }
    case "date":
      return {...state,
        launches: action.launch,
        actives: ["logout", "form", "table"]
      }
    case "login":
      return {...state,
        user: action.login,
        actives: ["logout", "form"]
      }
    case "logout":
      return {...state,
        user: "",
        actives: ["login"]
      }
    case "register":
      return {...state,
        user: action.regiter,
        actives: ["login"]
      }
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

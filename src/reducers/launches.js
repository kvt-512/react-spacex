const launches = (state = {
    launches: [],
    flight: {},
    user: ""
  }, action) => {
    switch (action.type) {
      case "all":
        return {...state, 
          launches: action.allLaunches
        }
      case "past":
        return {...state,
          launches: action.pastLaunches
        }
      case "upcoming":
        return {...state,
          launches: action.upComingLaunches
        }
      case "search":
        return { ...state, flight: action.searchLaunch
        }
      case "date":
        return {...state,
          launches: action.launch
        }
      case "login":
        return {...state,
          user: action.login
        }
      case "logout":
        return {...state,
          user: ""
        }
      case "register":
        return {...state,
          user: action.regiter
        }
      default:
        return state;
    }
  }

export default launches;
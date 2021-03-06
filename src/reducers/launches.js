const launches = (state = {
    launches: [],
    flight: {},
    user: "",
    title: ""
  }, action) => {
    switch (action.type) {
      case "all":
        return {...state, 
          launches: action.allLaunches,
          title: "All Launches"
        }
      case "past":
        return {...state,
          launches: action.pastLaunches,
          title: "Past Launches"
        }
      case "upcoming":
        return {...state,
          launches: action.upComingLaunches,
          title: "Upcoming Launches"
        }
      case "search":
        return { ...state, flight: action.searchLaunch
        }
      case "date":
        return {...state,
          launches: action.launch,
          title: `Launches from ${action.startDate} to ${action.endDate}`
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
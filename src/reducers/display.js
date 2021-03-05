const display = (state = {
    actives: ["login"]
  }, action) => {
    switch (action.type) {
      case "all":
        return {...state, 
          actives: ["logout", "form", "table"]
        }
      case "past":
        return {...state,
          actives: ["logout", "form", "table"]
        }
      case "upcoming":
        return {...state,
          actives: ["logout", "form", "table"]
        }
      case "search":
        return { ...state,
          actives: ["logout", "form", "details"]
        }
      case "date":
        return {...state,
          actives: ["logout", "form", "table"]
        }
      case "login":
        return {...state,
          actives: ["logout", "form"]
        }
      case "logout":
        return {...state,
          actives: ["login"]
        }
      case "register":
        return {...state,
          actives: ["login"]
        }
      default:
        return state;
    }
  }

export default display;
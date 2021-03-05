export const showAllLaunches = (launches) => {
    return {
        type: "all",
        allLaunches: launches
    }
}

export const showPastLaunches = data => {
    return {
        type: "past",
        pastLaunches: data
    }
}

export const showUpComingLaunches = data => {
    return {
        type: "upcoming",
        upComingLaunches: data
    }
}

export const showLaunch = data => {
    return  {
        type: "search",
        searchLaunch: data
    }
}

export const datedLaunch = data => {
    return {
        type: "date",
        launch: data
    }
}

export const logMeIn = data => {
    return {
        type: "login",
        login: data
    }
}

export const logMeOut = data => {
    return {
        type: "logout",
        logout: data
    }
}

export const registerMe = data => {
    return {
        type: "register",
        register: data
    }
}
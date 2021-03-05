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
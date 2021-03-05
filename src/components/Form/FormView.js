import React from 'react';

const FormView = props => {
    return (
        <div className={props.className}>
            <div>
                <button onClick={props.allLaunches}>All launches</button>
                <button onClick={props.pastLaunches}>Previous launches</button>
                <button onClick={props.upComingLaunches}>Upcoming launches</button>
            </div>
            <div>
                <input type="date" value={props.startDate} onChange={props.onStartDate}></input>
                <input type="date" value={props.endDate} onChange={props.onEndDate}></input>
                <button type="date" onClick={props.findLaunch}>Go</button>
            </div>
        </div>
    );
}

export default FormView;
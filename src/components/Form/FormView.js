import React from 'react';
import './Form.css'

const FormView = props => {
    return (
        <div className={`formBg ${props.className}`}>
            <div className="main-title">SpaceX Dashboard</div>
            <div>
                <div className="nav">
                    <button className="button" onClick={props.allLaunches}>All launches</button>
                    <button className="button" onClick={props.pastLaunches}>Previous launches</button>
                    <button className="button" onClick={props.upComingLaunches}>Upcoming launches</button>
                </div>
                <div className="fliter">
                    <input className="input" type="date" value={props.startDate} onChange={props.onStartDate}></input>
                    <input className="input" type="date" value={props.endDate} onChange={props.onEndDate}></input>
                    <button className="searchButton" type="date" onClick={props.findLaunch}>GO</button>
                </div>
            </div>
        </div>
    );
}

export default FormView;
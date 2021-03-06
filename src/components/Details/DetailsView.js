import React from 'react';
import './Details.css';

const DetailsView = props => {

    console.log(props.flight);
    return (
        <div className={`flight-position ${props.className}`}>
            <div className="flight-headding">
                <div className="flight-number">{props.flight.flight_number}</div>
                <div className="mission-name">{props.flight.mission_name}</div>
            </div>

            <div className="inline-container">
                <div className="label">Launch Year</div><div className="data">{props.flight.launch_year}</div>
            </div>

            <div className="inline-container">
                <div className="label">Launch Date</div><div className="data">{props.flight.launch_date_utc}</div>
            </div>
            <div className="inline-container">
                <div className="label">Is Tentative</div><div className="data">{props.flight.is_tentative ? "Yes" : "No"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Flight Number</div><div className="data">{props.flight.flight_number}</div>
            </div>
            <div className="inline-container">
                <div className="label">Rocket Name</div><div className="data">{props.flight.rocket ? props.flight.rocket.rocket_name : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Landing Vehicle</div><div className="data">{props.flight.rocket ? props.flight.rocket.first_stage.cores[0].landing_vehicle : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Landing Results</div><div className="data">{props.flight.rocket && props.flight.rocket.first_stage.cores[0].land_success ? props.flight.rocket.first_stage.cores[0].land_success : "No Infromation"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Landing Type</div><div className="data">{props.flight.rocket ? props.flight.rocket.first_stage.cores[0].landing_type : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Payload Type</div><div className="data">{props.flight.rocket ? props.flight.rocket.second_stage.payloads[0].payload_type : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Payload Mass(kg)</div><div className="data">{props.flight.rocket ? props.flight.rocket.second_stage.payloads[0].payload_mass_kg : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Customers</div><div className="data">{props.flight.rocket ? props.flight.rocket.second_stage.payloads[0].customers[0] : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Manufacturer</div><div className="data">{props.flight.rocket ? props.flight.rocket.second_stage.payloads[0].manufacturer : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Launch Location</div><div className="data">{props.flight.launch_site ? props.flight.launch_site.site_name_long : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Launch Results</div><div className="data">{props.flight.launch_success ? "Success" : "Fail"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Notes</div><div className="data-notes">{props.flight.launch_failure_details ? props.flight.launch_failure_details.reason : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Video Link</div><div className="data-link">{props.flight.links ? <a target="target" href={props.flight.links.video_link}>{props.flight.links.video_link}</a> : "No Information"}</div>
            </div>
            <div className="inline-container">
                <div className="label">Upcoming</div><div className="data">{props.flight.upcoming ? "Yes" : "No"}</div>
            </div>
            {/* {props.flight.launch_date_utc}
            {props.flight.is_tentative}
            {props.flight.flight_number}
            {props.flight.rocket? props.flight.rocket.rocket_name : "No Information"}
            {props.flight.rocket? props.flight.rocket.first_stage.cores[0].landing_vehicle : "No Information"}
            {props.flight.rocket? props.flight.rocket.first_stage.cores[0].land_success : "No Infromation"}
            {props.flight.rocket? props.flight.rocket.first_stage.cores[0].landing_vehicle : "No Information"}
            {props.flight.rocket? props.flight.rocket.first_stage.cores[0].landing_type : "No Information"}
            {props.flight.rocket? props.flight.rocket.second_stage.payloads[0].payload_type : "No Information"}
            {props.flight.rocket? props.flight.rocket.second_stage.payloads[0].payload_mass_kg : "No Information"}
            {props.flight.rocket? props.flight.rocket.second_stage.payloads[0].customers[0] : "No Information"}
            {props.flight.rocket? props.flight.rocket.second_stage.payloads[0].manufacturer : "No Information"}
            {props.flight.launch_site? props.flight.launch_site.site_name_long : "No Information"}
            {props.flight.launch_success ? "Success" : "Fail"}
            {props.flight.launch_failure_details? props.flight.launch_failure_details.reason : "No Information"}
            {props.flight.links? <a target="target" href={props.flight.links.video_link}>{props.flight.links.video_link}</a> : "No Information"}
            {props.flight.upcoming? "Yes" : "No"} */}
        </div>
    );
}



export default DetailsView;
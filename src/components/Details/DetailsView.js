import React from 'react';
import './Details.css';

const DetailsView = props => {
    return (
        <div className={props.className}>
            <div>{props.details.mission_name}</div>
            <div>{props.details.flight_number}</div>
            <table>
                <tbody>
                    <tr>
                        <td>Launch Name </td>
                        <td>{props.details.launch_year}</td>
                    </tr>
                    <tr>
                        <td>Launch Result </td>
                        <td>{props.details.launch_success ? "success" : "fail"}</td>
                    </tr>
                </tbody>
            </table>
            {/* <div>Launch Number: {props.details.flight_number}</div>
            <div>Mission Name: {props.details.mission_name}</div>
            <div>Launch Name: {props.details.launch_year}</div>
            <div>Launch Result: {props.details.launch_success ? "success" : "fail"}</div> */}
        </div>
    );
}



export default DetailsView;
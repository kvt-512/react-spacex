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
        </div>
    );
}



export default DetailsView;
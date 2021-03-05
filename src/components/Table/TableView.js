import React from 'react';
import { connect } from 'react-redux';

const TableView = props => {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Launch Number</td>
                        <td>Mission Name</td>
                        <td>Launch Date</td>
                        <td>Rocket Name</td>
                        <td>Rocket Type</td>
                        <td>Payload Type</td>
                        <td>Payload Mass</td>
                        <td>Launch Site</td>
                        <td>Launch Status</td>
                        <td>Launch Result</td>
                    </tr>
                    {
                        props.launches.map((launch, index) =>
                            <tr key={index} flight={launch.flight_number} onClick={props.showDetails}>
                                <td>{launch.flight_number}</td>
                                <td>{launch.mission_name}</td>
                                <td>{launch.launch_date_utc}</td>
                                <td>{launch.rocket.rocket_name}</td>
                                <td>{launch.rocket.rocket_type}</td>
                                <td>{launch.rocket.second_stage.payloads[0].payload_type}</td>
                                <td>{launch.rocket.second_stage.payloads[0].payload_mass_kg}</td>
                                <td>{launch.launch_site.site_name}</td>
                                <td>{launch.upcoming ? "ture" : "false"}</td>
                                <td>{launch.launch_success ? "ture" : "false"}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        launches: state.launches
    }
}

export default connect(mapStateToProps, null)(TableView);
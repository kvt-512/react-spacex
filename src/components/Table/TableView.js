import React from 'react';
import './Table.css';

const TableView = props => {
    return (
        <div className={`tableComponent ${props.className}`}>
            <div className="title">{props.title}</div>
            <table cellSpacing="0">
                <tbody>
                    <tr className="tableHeadding">
                        <td>Launch Number</td>
                        <td>Mission Name</td>
                        <td className="media-query-visibility">Launch Date</td>
                        <td>Launch Year</td>
                        <td className="media-query-visibility">Rocket Name</td>
                        <td className="media-query-visibility">Rocket Type</td>
                        <td className="media-query-visibility">Payload Type</td>
                        <td className="media-query-visibility">Payload Mass</td>
                        <td className="media-query-visibility">Launch Site</td>
                        <td className="media-query-visibility">Launch Status</td>
                        <td>Launch Result</td>
                    </tr>
                    {
                        props.launches.map((launch, index) =>
                            <tr className="tableContent" key={index} flight={launch.flight_number} onClick={props.showDetails}>
                                <td>{launch.flight_number}</td>
                                <td>{launch.mission_name}</td>
                                <td className="media-query-visibility">{launch.launch_date_utc}</td>
                                <td>{launch.launch_year}</td>
                                <td className="media-query-visibility">{launch.rocket.rocket_name}</td>
                                <td className="media-query-visibility">{launch.rocket.rocket_type}</td>
                                <td className="media-query-visibility">{launch.rocket.second_stage.payloads[0].payload_type}</td>
                                <td className="media-query-visibility">{launch.rocket.second_stage.payloads[0].payload_mass_kg}</td>
                                <td className="media-query-visibility">{launch.launch_site.site_name}</td>
                                <td className="media-query-visibility">{launch.upcoming ? "Yes" : "No"}</td>
                                <td>{launch.launch_success ? "Success" : "Fail"}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableView;
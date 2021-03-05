import React from 'react';
import { connect } from 'react-redux';

const DetailsView = props => {
    return (
        <div>
            <ul>
                <li>{props.details.flight_number}</li>
                <li>{props.details.mission_name}</li>
                <li>{props.details.launch_year}</li>
                <li>{props.details.launch_success? "success" : "fail" }</li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        details: state.flight
    }
}


export default connect(mapStateToProps, null)(DetailsView);
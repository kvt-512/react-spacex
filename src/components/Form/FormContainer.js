import React from 'react';
import FormView from './FormView';
import { getFormatedDate } from '../../util';

class FormContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            startDate: getFormatedDate(),
            endDate: getFormatedDate()
        }

        this.allLaunches = async () => {
            const responce = await fetch('https://api.spacexdata.com/v3/launches');
            const data = await responce.json();
            props.showAllLaunches(data);
        }

        this.pastLaunches = async () => {
            const responce = await fetch('https://api.spacexdata.com/v3/launches/past');
            const data = await responce.json();
            props.showPastLaunches(data);
        }

        this.upComingLaunches = async () => {
            const responce = await fetch('https://api.spacexdata.com/v3/launches/upcoming');
            const data = await responce.json();
            props.showUpComingLaunches(data);
        }

        this.findLaunch = async e => {
            const response = await fetch(`https://api.spacexdata.com/v3/launches?start=${this.state.startDate}&end=${this.state.endDate}`);
            const data = await response.json();
            props.datedLaunch(data);
        }
    }

    onStartDate = e => {
        this.setState({
            startDate: e.target.value
        })
    }

    onEndDate = e => {
        this.setState({
            endDate: e.target.value
        })
    }


    render() {
        return (
            <FormView
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                allLaunches={this.allLaunches}
                pastLaunches={this.pastLaunches}
                upComingLaunches={this.upComingLaunches}
                findLaunch={this.findLaunch}
                onStartDate={this.onStartDate}
                onEndDate={this.onEndDate}
                className={this.props.className}
            />
        );
    }
}

export default FormContainer;
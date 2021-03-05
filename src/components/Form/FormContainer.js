import React from 'react';
import FormView from './FormView';
import { getFormatedDate } from '../../util';

class FormContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            startDate: getFormatedDate(),
            endDate:  getFormatedDate()
        }

        this.allLaunches = () => {
            fetch('https://api.spacexdata.com/v3/launches')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    props.showAllLaunches(data);
                });
        }

        this.pastLaunches = () => {
            fetch('https://api.spacexdata.com/v3/launches/past')
                .then(response => response.json())
                .then(data => {
                    props.showPastLaunches(data);
                });
        }

        this.upComingLaunches = () => {
            fetch('https://api.spacexdata.com/v3/launches/upcoming')
                .then(response => response.json())
                .then(data => {
                    props.showUpComingLaunches(data);
                });
        }

        this.findLaunch = e => {
            fetch(`https://api.spacexdata.com/v3/launches?start=${this.state.startDate}&end=${this.state.endDate}`)
                .then(response => response.json())
                .then(data => {
                    props.datedLaunch(data);
                });
        }
    }

    onStartDate = e => {
        this.setState({
            startDate: e.target.value
        })
        // console.log(this.state.startDate);
    }

    onEndDate = e => {
        console.log(e.target.value);
        this.setState({
            endDate: e.target.value
        })
        // console.log(this.state.endDate);
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
            ></FormView>
        );
    }
}

export default FormContainer;
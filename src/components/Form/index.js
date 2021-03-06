import FormContainer from './FormContainer';
import { showAllLaunches, showPastLaunches, showUpComingLaunches, showLaunch , datedLaunch} from '../../action-creator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        className: state.display.actives.includes("form")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showAllLaunches: launches => dispatch(showAllLaunches(launches)),
        showPastLaunches: pastLaunches => dispatch(showPastLaunches(pastLaunches)),
        showUpComingLaunches: upComingLaunches => dispatch(showUpComingLaunches(upComingLaunches)),
        showLaunch: launch => dispatch(showLaunch(launch)),
        datedLaunch: (launchDates, startDate, endDate) => dispatch(datedLaunch(launchDates, startDate, endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
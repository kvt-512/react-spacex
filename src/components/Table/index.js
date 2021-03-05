import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { showLaunch } from '../../action-creator';

const mapStateToProps = state => {
    return {
        launches: state.launches.launches,
        className: state.display.actives.includes("table")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {
        showLaunch: launch => dispatch(showLaunch(launch))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
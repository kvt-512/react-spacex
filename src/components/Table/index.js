import TableContainer from './TableContainer';
import { connect } from 'react-redux';
import { showLaunch } from '../../action-creator';

const mapStateToProps = () => {
    return {

    };
}

const mapDispatchToProps = dispatch => {
    return {
        showLaunch: launch => dispatch(showLaunch(launch))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
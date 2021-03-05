import DetailsView from './DetailsView';
import { connect } from 'react-redux';
// import { showLaunch } from '../../action-creator';

const mapStateToProps = state => {
    return {
        details: state.flight,
        className: state.actives.includes("details")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsView);
import DetailsView from './DetailsView';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        details: state.launches.flight,
        className: state.display.actives.includes("details")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailsView);
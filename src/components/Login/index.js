import LoginContainer from './LoginContainer';
import { logMeIn, registerMe } from '../../action-creator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        className: state.display.actives.includes("login")? "show" : "hide"
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logMeIn: user => dispatch(logMeIn(user)),
        registerMe: user => dispatch(registerMe(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (LoginContainer);
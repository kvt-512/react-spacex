import React from 'react';
import LogoutView from './LogoutView';
import firebase from 'firebase/app';
import 'firebase/auth';

class LogoutContainer extends React.PureComponent {
    constructor(props) {
        super(props)

        this.onLogout = async e => {
            try {
                await firebase.auth().signOut();
                props.logMeOut(props.user);
            } catch (error) {
            };
        }
    }

    render() {
        return (
            <LogoutView
                onLogout={this.onLogout}
                user={this.props.user}
                className={this.props.className}
            />
        );
    }
}

export default LogoutContainer;
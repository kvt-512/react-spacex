import React from 'react';
import LogoutView from './LogoutView';
import firebase from 'firebase/app';
import 'firebase/auth';

class LogoutContainer extends React.PureComponent {
    constructor(props){
        super(props)

        this.onLogout = e => {
            firebase.auth().signOut().then(() => {
                // Sign-out successful.
                props.logMeOut(props.user);
              }).catch((error) => {
                // An error happened.
                console.log(error);
              });
        }
    }
    
    render() {
        return (
            <LogoutView
                onLogout={this.onLogout}
                user={this.props.user}
                className={this.props.className}
            ></LogoutView>
        );
    }
}

export default LogoutContainer;
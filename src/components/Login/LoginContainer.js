import React from 'react';
import LoginView from './LoginView';
import firebase from 'firebase/app';
import 'firebase/auth';


class LoginContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            password: "",
            message: ""
        }


        this.onInputEmail = e => {
            this.setState({
                user: e.target.value
            })
        }

        this.onInputPassword = e => {
            this.setState({
                password: e.target.value
            })
        }

        this.onLogin = async e => {
            if (this.state.user === null || this.state.user === undefined || this.state.user === "")
                this.setState({
                    message: "Invalied mail id"
                })
            else if (this.state.password === null || this.state.password === undefined || this.state.password === "")
                this.setState({
                    message: "Invalid password"
                })
            else {
                try {
                    const userCredential = await firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.password)
                    var user = userCredential.user;
                    props.logMeIn(user.email)
                    this.setState({
                        message: ""
                    });
                } catch (error) {
                    let errorMessage = error.message;
                    this.setState({
                        message: errorMessage
                    })
                };
            }
        }

        this.onRegister = async e => {
            if (this.state.user === null || this.state.user === undefined || this.state.user === "")
                this.setState({
                    message: "Invalied mail id"
                })
            else if (this.state.password === null || this.state.password === undefined || this.state.password === "")
                this.setState({
                    message: "Invalid password"
                })
            else {
                try {
                    const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.state.user, this.state.password)
                    var user = userCredential.user;
                    props.registerMe(user.email)
                    this.setState({
                        message: ""
                    });
                } catch (error) {
                    let errorMessage = error.message;
                    this.setState({
                        message: errorMessage
                    })
                };
            }
        }

        this.onCancel = e => {
            this.setState({
                user: "",
                password: ""
            })
        }
    }

    render() {
        return (
            <LoginView
                onInputEmail={this.onInputEmail}
                onInputPassword={this.onInputPassword}
                onLogin={this.onLogin}
                onRegister={this.onRegister}
                onCancel={this.onCancel}
                userValue={this.state.user}
                passwordValue={this.state.password}
                message={this.state.message}
                className={this.props.className}
            ></LoginView>
        );
    }
}

export default LoginContainer;
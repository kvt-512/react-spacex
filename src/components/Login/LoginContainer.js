import React from 'react';
import LoginView from './LoginView';
import firebase from 'firebase/app';
import 'firebase/auth';


class LoginContainer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            message: ""
        }


        this.onInputEmail = e => {
            this.setState({
                email: e.target.value
            })
        }

        this.onInputPassword = e => {
            this.setState({
                password: e.target.value
            })
        }

        this.onLogin = async e => {
            if (this.state.email === null || this.state.email === undefined || this.state.email === "")
                this.setState({
                    message: "Invalied mail id"
                })
            else if (this.state.password === null || this.state.password === undefined || this.state.password === "")
                this.setState({
                    message: "Invalid password"
                })
            else {
                try {
                    const userCredential = await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
                    var user = userCredential.user;
                    props.logMeIn(user.email)
                    this.setState({
                        message: "",
                        email: "",
                        password: ""
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
            if (this.state.email === null || this.state.email === undefined || this.state.email === "")
                this.setState({
                    message: "Invalied mail id"
                })
            else if (this.state.password === null || this.state.password === undefined || this.state.password === "")
                this.setState({
                    message: "Invalid password"
                })
            else {
                try {
                    const userCredential = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    var user = userCredential.user;
                    props.registerMe(user.email)
                    this.setState({
                        message: "Registered successfully! Please login",
                        email: "",
                        password: ""
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
                email: "",
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
                emailValue={this.state.email}
                passwordValue={this.state.password}
                message={this.state.message}
                className={this.props.className}
            ></LoginView>
        );
    }
}

export default LoginContainer;
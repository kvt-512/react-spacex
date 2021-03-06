import React from 'react';
import './Login.css'

const LoginView = props => {
    return (
        <div className={props.className}>
            <div className="position boxshadow">
                <div className="title">SpaceX</div>
                <div className="message">{props.message}</div>
                <div>
                    <input value={props.emailValue} onChange={props.onInputEmail} placeholder="Email"></input>
                </div>
                <div>
                    <input value={props.passwordValue} type="password" onChange={props.onInputPassword} placeholder="Password"></input>
                </div>
                <button className="loginCompButton" onClick={props.onRegister}>Register</button>
                <button className="loginCompButton" onClick={props.onLogin}>Login</button>
                <button className="cancelButton" onClick={props.onCancel}>Cancle</button>
            </div>
        </div >
    );
}

export default LoginView;
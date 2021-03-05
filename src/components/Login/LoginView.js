import React from 'react';

const LoginView = props => {
    return (
        <div className={props.className}>
            <div>{props.message}</div>
            <div>
                <input value={props.userValue} onChange={props.onInputEmail} placeholder="Email"></input>
            </div>
            <div>
                <input value={props.passwordValue} type="password" onChange={props.onInputPassword} placeholder="Password"></input>
            </div> 
            <button onClick={props.onRegister}>Register</button>
            <button onClick={props.onLogin}>Login</button>
            <button onClick={props.onCancel}>Cancle</button>
        </div >
    );
}

export default LoginView;
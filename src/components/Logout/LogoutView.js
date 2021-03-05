import React from 'react';

const LogoutView = props => {
    return (
        <div className={props.className}>
            <p>You are logged in as {props.user}</p>
            <button onClick={props.onLogout}>Logout</button>
            <hr></hr>
        </div>
    );
}

export default LogoutView;
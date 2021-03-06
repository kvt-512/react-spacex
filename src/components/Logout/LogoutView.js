import React from 'react';
import './Logout.css';

const LogoutView = props => {
    return (
        <div className={`logout ${props.className}`}>
            <span className="logoutMessage">You are logged in as </span>
            <span className="user">{props.user}</span>
            <button className="logoutButton" onClick={props.onLogout}>Logout</button>
        </div>
    );
}

export default LogoutView;
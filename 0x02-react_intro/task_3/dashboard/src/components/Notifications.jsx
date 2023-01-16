import React from "react";
import "../style sheets/Notifications.css";
import close_ from "../img/close_.png"
import { getLatestNotification } from '../utils.js';

function Notifications() {
    const closeStyle = {
    position: 'absolute',
    textAlign: 'right',
    top: '14px',
    right: '12px',
    backgroundColor: 'white',
    border: 0,
    };
    return (
    <div className="Notifications">
        <button style={closeStyle} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
        <img src={close_} alt="close-icon" width="10"/>
        </button>
        <p>Here is the list of notifications</p>
        <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent"
            dangerouslySetInnerHTML={{__html: getLatestNotification()}}
        />
        </ul>
    </div>
    );
}

export default Notifications;

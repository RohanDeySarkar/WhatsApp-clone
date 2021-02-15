import React from 'react';
import './SidebarChat.css';

import { Avatar, IconButton } from '@material-ui/core';

function SidebarChat({image, roomName, lastMessage}) {
    return (
        <div className="sidebarChat">
            <Avatar 
                src={image}
                alt=""
            />

            <div className="sidebarChat__info">
                <h2>{roomName}</h2>
                <p>{lastMessage}</p>
            </div>
        </div>  
    )
}

export default SidebarChat

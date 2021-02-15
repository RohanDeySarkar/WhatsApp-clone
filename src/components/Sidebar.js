import React from 'react';
import './Sidebar.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';

import SidebarChat from './SidebarChat';

import {auth} from '../firebase';

function Sidebar({user}) {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar 
                    src={user.photoURL}
                    alt=""
                    onClick={() => auth.signOut()}
                    style={{cursor: "pointer",}}
                />

                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search" >
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input 
                        placeholder="Search or start new chat"
                        type="text"
                    />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat
                    image="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg"
                    roomName="General"
                    lastMessage="Where u at ?"
                />
                <SidebarChat 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWuG0O8qlZnn99AyTeduG1gcJEsaKDUiLrPA&usqp=CAU" 
                    roomName="Night Hub"
                    lastMessage="Night crawlers!!"
                />
                <SidebarChat 
                    image="https://i.pinimg.com/600x315/d2/a4/7b/d2a47bc6021db28067a973c9901d2b65.jpg"
                    roomName="Party!!"
                    lastMessage="BANGG"
                />
            </div>
        </div>
    )
}

export default Sidebar

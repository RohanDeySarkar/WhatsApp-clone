import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import React, { useState } from 'react';
import './Chat.css';

import axios from '../axios';

function Chat({messages, user, setUpdate}) {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        const d = new Date();
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

        await axios.post('/messages/new', {
            message: input,
            name: user.displayName,
            timestamp: `${da}-${mo}-${ye}`,
            received: false
        });

        setUpdate(input);
        setInput("");
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar 
                    src="https://storage.googleapis.com/webdesignledger.pub.network/WDL/12f213e1-t1.jpg"
                    alt=""
                />
                
                <div className="chat__headerInfo">
                    <h3>General</h3>
                    <p>last seen</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlinedIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map((message) => 
                    <p className={`chat__message ${message.name === user.displayName ? 'chat__receiver' : ''}`}>
                    <span className="chat__name">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
                )}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />

                <form onSubmit={sendMessage}>
                    <input 
                        placeholder="Send a message"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                    <button type="submit">Send a message</button>
                </form>
                
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat

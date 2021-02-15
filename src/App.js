import { useEffect, useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import Pusher from "pusher-js";

import axios from './axios';

import {auth} from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [update, setUpdate] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    })
  }, [])

  useEffect(() => {
    axios
    .get("/messages/sync")
    .then((res) => {
      // console.log(res)
      setMessages(res.data);
    });
  }, [])

  useEffect(() => {
    const pusher = new Pusher('102039b1340aeec118f7', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe("messages");

    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));

      setMessages([...messages, newMessage]);
    });

    // to avoid multiple listeners(subscribe)
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages, update]);

  // console.log(messages);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <div className="app__body">
            <Sidebar 
              user={user}
            />
            <Chat 
              messages={messages}
              user={user}
              setUpdate={setUpdate}
            />
          </div>
        </div>
      )}
    </>
   
  );
}

export default App;

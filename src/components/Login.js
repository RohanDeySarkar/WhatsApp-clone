import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';

import {auth, provider} from '../firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch(err => alert(err.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://i.pinimg.com/originals/79/dc/31/79dc31280371b8ffbe56ec656418e122.png"
                    alt=""
                />
            </div>

            <Button 
                startIcon={ 
                    <img
                        style={{
                            height: "30px",
                            paddingRight: "20px"
                        }} 
                        src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" 
                        alt=""
                    />
                }
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login;
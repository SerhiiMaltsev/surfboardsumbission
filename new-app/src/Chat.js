import React from "react";
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'


function Chat(){

    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
        height="100vh"
        projectID={"da5d6928-b1d8-40ca-819c-6c74142e4619"}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
}

export default Chat;
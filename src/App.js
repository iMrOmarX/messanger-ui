
import './App.css';
import Header from './components/header/header-component';
import Message from './components/message/message-component';
import NewMessageForm from './components/new-message-form/new-message-form-component';
import ToggleShowMessageBtn from './components/toggle-show-message-btn/toggle-show-message-btn-component';

import React, { useEffect, useState } from 'react';
//import io  from 'socket.io-client';

//const socket = io.connect(`http://localhost:5000`)

function App() {
  //socket.emit('message' , "hello")
  const [messages, setmessages] = useState([
    
  ]);

  const [isNewMessageFormShown, setisNewMessageFormShown] = useState(false)

  useEffect(() => {
    fetch('http://localhost:5000/messages', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((data) => data.json())
    .then((newMessages) => {
      setmessages(newMessages)
    })
    .catch((e)=> console.log(e))

  }, [])


  const sendMessage = (message) => {
     
    fetch('http://localhost:5000/new-message', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then((data) => data.json())
    .then((newMessages) => {
      setmessages(newMessages)
    })
    .catch((e)=> console.log(e))

  }

  const deleteMessage = (id) => {
    fetch('http://localhost:5000/delete-message', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
    .then((data) => data.json())
    .then((newMessages) => {
      setmessages(newMessages)
    })
    .catch((e)=> console.log(e))
  }
  return (
    <div className="App">
      <Header/>
      {
        messages.map((message , index) => {
          return (
            <Message message={message} key={index + message.sender} deleteMessage={deleteMessage}/>
          )
        })
      }
      <ToggleShowMessageBtn isNewMessageFormShown={isNewMessageFormShown} setisNewMessageFormShown={setisNewMessageFormShown}/>
      <NewMessageForm isNewMessageFormShown={isNewMessageFormShown} sendMessage={sendMessage}/>
    </div>
  );
}

export default App;

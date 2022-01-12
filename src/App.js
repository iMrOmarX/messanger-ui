
import './App.css';
import Header from './components/header/header-component';
import Message from './components/message/message-component';
import NewMessageForm from './components/new-message-form/new-message-form-component';
import ToggleShowMessageBtn from './components/toggle-show-message-btn/toggle-show-message-btn-component';

import React, { useState } from 'react';

function App() {

  const [messages, setmessages] = useState([
    {
      sender: "Omar",
      date: (new Date()),
      content: "asdfdsaf "

    }
  ]);

  const [isNewMessageFormShown, setisNewMessageFormShown] = useState(false)

  return (
    <div className="App">
      <Header/>
      {
        messages.map((message , index) => {
          return (
            <Message message={message} key={index + message.sender} />
          )
        })
      }
      <ToggleShowMessageBtn isNewMessageFormShown={isNewMessageFormShown} setisNewMessageFormShown={setisNewMessageFormShown}/>
      <NewMessageForm isNewMessageFormShown={isNewMessageFormShown}/>
    </div>
  );
}

export default App;

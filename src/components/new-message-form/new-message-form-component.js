import React from 'react'

function NewMessageForm(props) {

    // TODO: implement date input field 
    return (
        <div id="new-message-form" style={{
            display:(props.isNewMessageFormShown)? "block" : "none"
        }}>
            <label>Sender Name:</label>
            <input id="sender-name-input"/>

            <label>Content:</label>
            <textarea placeholder='Enter your message'></textarea>

            <label>Date:</label>
            <input id="sender-name-input"/>

            <button id="send-btn" onClick={props.sendMessage}>Send</button>

        </div>
    )
}

export default NewMessageForm

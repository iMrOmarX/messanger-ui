import React , {useState} from 'react'
import './new-message-form.css'

function NewMessageForm(props) {
    
    const [showWarning, setshowWarning] = useState(false)
    return (
        <div id="new-message-form" style={{
            display:(props.isNewMessageFormShown)? "flex" : "none"
        }}>
            <div className='container '>
                <label>Sender Name:</label>
                <input id="sender-name-input" />
            </div>

            <div className='container '>
                <label>Content:</label>
                <textarea placeholder='Enter your message' id="message-content-input"></textarea>
            </div>
            
            <div className='container '>
                <label>Date:</label>
                <input id="message-date-input" type="datetime-local"/>
            </div>
            
            <div className='container' id="send-btn-container">
               
                <button id="send-btn" className='btn' onClick={()=> {


                    let message = {
                        sender : document.getElementById('sender-name-input').value,
                        content : document.getElementById('message-content-input').value,
                        date : document.getElementById('message-date-input').value,
                    }

                    if(message.sender && message.content && message.date) {
                        
                        props.sendMessage(message)
                        setshowWarning(false)
                        document.getElementById('sender-name-input').value = ''
                        document.getElementById('message-content-input').value = ''
                        document.getElementById('message-date-input').value = ''
                    }
                    else {
                        setshowWarning(true)
                    }
                }}>Send</button>
                <p id="warning" style={{
                    display: (showWarning)? "block" : "none"
                }}>Data is invalid</p>
            </div> 
            
        </div>
    )
}

export default NewMessageForm

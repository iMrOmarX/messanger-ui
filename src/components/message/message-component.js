import React , {useState} from 'react'
import './message.css'


function Message(props) {

    const id = props.message.id ;
    console.log(id)
    const [isRead, setisRead] = useState(false)
    const messageToggleRead = () => {
        setisRead(!isRead)
    }
    return (
        <div className='message-container'>
            <div className='message-sender left'>{props.message.sender}</div>
            <div className='message-date right'>{(new Date(props.message.date)).toLocaleDateString()} <span className='time'>{(new Date(props.message.date)).toLocaleTimeString()}</span></div>
            <div className='message-content left' style={{
                    textDecoration: (isRead)? "line-through" : "none"
                }}>{props.message.content}</div>

            <div className='right'>
                <button onClick={messageToggleRead} className='btn'>Toggle Read</button>
                <button onClick={() => {
                    props.deleteMessage(id) 
                }}
                    className='delete-btn'
                >Delete Message</button>
                        
            </div>  
            
        </div>
    )
}

export default Message

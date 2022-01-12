import React , {useState} from 'react'

function Message(props) {

    const [isRead, setisRead] = useState(false)
    const messageToggleRead = () => {
        setisRead(!isRead)
    }
    return (
        <div>
            <div className='message-sender'>{props.message.sender}</div>
            <div className='message-date'>{props.message.date.getTime()}</div>
            <div className='message-content' style={{
                textDecoration: (isRead)? "line-through" : "none"
            }}>{props.message.content}</div>
            <button onClick={messageToggleRead}>Toggle Read</button>
        </div>
    )
}

export default Message

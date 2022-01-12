import React from 'react'
import './toggle-show-message-btn.css'

function ToggleShowMessageBtn(props) {
    return (
        <div id='toggle-container'>
            <button id="toggle-show-message-btn" className="btn" onClick={() => props.setisNewMessageFormShown(!props.isNewMessageFormShown)}>
                {props.isNewMessageFormShown? 'Hide' : 'Show'} New Message
            </button>
        </div>
    )
}

export default ToggleShowMessageBtn

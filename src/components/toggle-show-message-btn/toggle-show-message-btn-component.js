import React from 'react'

function ToggleShowMessageBtn(props) {
    return (
        <button onClick={() => props.setisNewMessageFormShown(!props.isNewMessageFormShown)}>
            {props.isNewMessageFormShown? 'Hide' : 'Show'} New Message
        </button>
    )
}

export default ToggleShowMessageBtn

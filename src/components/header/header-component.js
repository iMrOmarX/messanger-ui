import React from 'react'

function Header() {

    return (
        <div>
            <h1>My Messaging App</h1>
            <div id="time-div">{(new Date()).getTime()}</div>
        </div>
    )
}

export default Header

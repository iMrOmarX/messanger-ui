import React from 'react'
import './header.css'

function Header() {

    return (
        <div id="header-container">
            <h1 id="title">My Messaging App</h1>
            <div id="date-time">{ (new Date()).toLocaleDateString()+ "  "} <span className="time">{(new Date()).toLocaleTimeString()}</span></div>
        </div>
    )
}

export default Header

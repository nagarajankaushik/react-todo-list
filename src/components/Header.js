import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <header style = {headerStyle}>
            <h1>
                Kaushik's TodoList
            </h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle}  to="/about"> About</Link>

        </header>
    )
}

const linkStyle ={
    color:'#fff',
    textDecoration: 'none'
}
const headerStyle = {
    textAlign:'center',
    background: '#2b2b2b',
    color: 'white',
    padding: '10px',
}
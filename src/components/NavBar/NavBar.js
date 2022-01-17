import React from 'react';
import Logo from '../Assets/Logo.svg';
import Log from '../Assets/log.svg';
import Ham from '../Assets/ham.svg';
import './NavBar.css'

function NavBar() {
    return ( 
        <div className='nav'>
            <img src={Logo} className='Logo' alt='Logo'></img>
            <ul className='Container'>
                <li className='CONTACT'>CONTACT</li>
                <li className='BLOG'>BLOG</li>
                <li className='PORTFOLIO'>PORTFOLIO</li>
                <li className='SERVICES'>SERVICES</li>
                <li className='ABOUT'>ABOUT</li>
                <li className='HOME'>HOME</li>
            </ul>
            <img src={Log} className='Log' alt='Logo'></img>
            <img src={Ham} className='Ham' alt='Ham'></img>
        </div>
    )
}

export default NavBar;
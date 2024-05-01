import React from 'react'
import Profile from '../Assets/Profile (15).jpg'
import './navigation.css';


function navigation() {
  return (
    <nav>
        <div className='message'>
            <img src={require("../Assets/chat (1).svg").default} alt='chats'/>
        </div>
        <div className='list'>
            <ul>
                <li>
                    <img src={require("../Assets/chats.svg").default} alt='chats' className='chats'/>
                </li>
                <li>
                    <img src={require("../Assets/Property 1=phone.svg").default} alt='chats'/>
                </li>
                <li>
                    <img src={require("../Assets/Property 1=video-camera.svg").default} alt='chats'/>
                </li>
                <li>
                    <img src={require("../Assets/Property 1=users.svg").default} alt='chats'/>
                </li>
                <li>
                    <img src={require("../Assets/Property 1=setting (1).svg").default} alt='chats'/>
                </li>
            </ul>
        </div>
        <div className='profile'>
            <ul>
            <li>
                    <img src={require("../Assets/icons.svg").default} alt='chats' className='plus'/>
            </li>
            <li>
                    <img src={Profile} alt="Profile (15)" className='glass'/>
            </li>        
            </ul>
        </div>
    </nav>
  )
}

export default navigation
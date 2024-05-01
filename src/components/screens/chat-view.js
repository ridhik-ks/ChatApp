import React, { useState } from 'react'
import './chat-view.css'
import Profile from '../Assets/Profile (1).jpg'
import Profile1 from '../Assets/Profile (2).jpg'
import Profile2 from '../Assets/Profile (3).jpg'
import Profile3 from '../Assets/Profile (4).jpg'
import Profile4 from '../Assets/Profile (5).jpg'
import Profile5 from '../Assets/Profile (6).jpg'
import Profile6 from '../Assets/Profile (7).jpg'


function ChatView() {
  const [profiles, setProfiles] = useState([
    {
     id: 1,
     name: 'Profile1',
     chatmessages: [
       {
         id: 1,
         sender: 'Pautra pratama',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Pautra pratama',
           content: 'Hello, how are you?',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
    {
     id: 2,
     name: 'Profile2',
     chatmessages: [
       {
         id: 1,
         sender: 'Michael',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Michael',
           content: 'Good afternoon, may i ask your help to male me a reel estate landing page, for more details i will send as soon as yoe approve it. thanks!',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
    {
     id: 3,
     name: 'Profile3',
     chatmessages: [
       {
         id: 1,
         sender: 'Jarrow',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Jarrow',
           content: 'good morning',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
    {
     id: 4,
     name: 'Profile1',
     chatmessages: [
       {
         id: 1,
         sender: 'Kasmad',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Kasmad',
           content: 'good morning',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
    {
     id: 5,
     name: 'Profile4',
     chatmessages: [
       {
         id: 1,
         sender: 'Melati',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Melati',
           content: 'Hello, how are you?',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
    {
     id: 6,
     name: 'Profile5',
     chatmessages: [
       {
         id: 1,
         sender: 'Manwar',
         content: 'Hai, Ridhik',
         timestamp: new Date().toLocaleTimeString(),
       },
       {
           id: 2,
           sender: 'Manwar',
           content: 'how are you?',
           timestamp: new Date().toLocaleTimeString(),
         },
     ]
    },
 ]);


  const [message, setMessage] = useState('');


  const handleInputChange = e => {
    setMessage(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const profileIndex = profiles.findIndex(profile => profile.id === 2)
    if (profileIndex !== -1) { 
      const newMessage = {
        id: profiles[profileIndex].chatmessages.length + 1,
        sender: 'Ridhik',
        content: message,
        timestamp: new Date().toLocaleTimeString(),
    }

  const updatesProfiles = [...profiles]
  updatesProfiles[profileIndex].chatmessages.push(newMessage)

    setProfiles(updatesProfiles)
    setMessage('')
  }
  }
  const [currentSelected, setCurrentSelected] = useState(2);

  function renderChatMessages(id) {
    const profile = profiles.find(profile => profile.id === id);
    if (!profile) {
      return null;
    }
    return (
      <div className="part">
        {profile.chatmessages.map(({ id, content, timestamp }) => (
          <div className="containers" key={id}>
            <div className="section1">
              <div className="chat-bubble">
                <p>{content}</p>
              </div>
              <div className="emoji">
                <div className="left">
                  <img src={require("../Assets/emojione_thumbs-up.svg").default} alt="thumb" />
                  <img src={require("../Assets/Group 3465375.svg").default} alt="fire" />
                </div>
                <div className="right">
                  <p>{timestamp}</p>
                </div>
              </div>
            </div>
            <div className="section2">
              <img src={require("../Assets/Property 1=white share.svg").default} alt="share" />
              <img src={require("../Assets/Group 3465392.svg").default} alt="smile" />
              <img src={require("../Assets/Option.svg").default} alt="option" />
            </div>
          </div>
        ))}
      </div>
    );
  }
    
  return (
    <div className="chat-view">
      <div className="main">
        <div className="left">
          <img src={Profile2} className="pic" alt="Profile2" />
          <div className="nme">
            <h6>Michael</h6>
            <span className="typing">online</span>
          </div>
        </div>
        <div className="right">
          <img
            src={require("../Assets/Property 1=phone.svg").default}
            alt="phone"
          />
          <img
            src={require("../Assets/Property 1=video-camera.svg").default}
            alt=""
          />
          <img
            src={require("../Assets/Option.svg").default}
            alt="option"
          />
        </div>
      </div>
      <div className="chatting">
        <h6>Today</h6>
        {renderChatMessages(currentSelected)}
      </div>
      <div className="input_msg">
        <img
          src={require("../Assets/attachment 2.svg").default}
          alt="pin"
        />
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Enter message"
            value={message}
            onChange={handleInputChange}
          />
        </form>
        <img
          src={require("../Assets/Group 3465380.svg").default}
          alt="smile"
          className="smile"
        />
        <img
          src={require("../Assets/Group 3465393.svg").default}
          alt="mic"
        />
      </div>
    </div>
  )
}

export default ChatView

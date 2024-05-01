import React, { useState } from "react";
import './chat.css';
import Profile from '../Assets/Profile (1).jpg'
import Profile1 from '../Assets/Profile (2).jpg'
import Profile2 from '../Assets/Profile (3).jpg'
import Profile3 from '../Assets/Profile (4).jpg'
import Profile4 from '../Assets/Profile (5).jpg'
import Profile5 from '../Assets/Profile (6).jpg'
import Profile6 from '../Assets/Profile (7).jpg'
import { profiles, setProfiles } from '../screens/chat-view.js'

function Chat() {
  const [currentSelected, setCurrentSelected] = useState(undefined);
    
  const changeCurrentChat = (index, item) => {
    setCurrentSelected(index);
  }
  
  
    const lists = [
        {
            id: 1,
            name: 'Pautra pratama',
            image: Profile1,
            alt:Profile1,
            message: 'Hello, how are you?',
            time: '12:00 AM',
        },
        {
            id: 2,
            name: 'Michael',
            image: Profile2,
            alt:Profile2,
            message: 'typing...',
            time: '12:00 AM',
        },
        {
            id: 3,
            name: 'Jarrow',
            image: Profile3,
            alt:Profile3,
            message: 'good morning',
            time: '12:00 AM',
        },
        {
            id: 4,
            name: 'Kasmad',
            image: Profile4,
            alt:Profile4,
            message: 'Hello, how are you?',
            time: '12:00 AM',
        },
        {
            id: 5,
            name: 'Melati',
            image: Profile5,
            alt:Profile5,
            message: 'Hello, how are you?',
            time: '12:00 AM',
        },
        {
            id: 6,
            name: 'Manwar',
            image: Profile6,
            alt:Profile6,
            message: 'Hello, how are you?',
            time: '12:00 AM',
        },
    
    ];
   
    const renderLists = () => {
        return lists.map((item,index) => {
            const className = index === currentSelected ? 'section selected' : 'section';
            return (
            
                <div key={item.id}  onClick={() => changeCurrentChat(index, item)} className={className}>
            <img src={item.image} className='pic' alt={item.alt} />
            <div className='names'>
                <div className='left'>
                    <h6>{item.name}</h6>
                    <span>{item.message}</span>
                </div>
                <div className='right'>
                    <img src={require("../Assets/grey dots.svg").default} alt='grey dots'/>
                    <span>{item.time}</span>
                </div>
            </div>
        </div>
            );
        });
    };


  return (
    <>
    <div className='section'>
    <div className='container'>
        <div className='account'>
            <img src={Profile} alt='Profile1' />
            <div className='name'>
                <h6>Ridhik</h6>
                <span>My Account</span>
            </div>
        </div>
            <div className='dot'>
                <img src={require("../Assets/Option.svg").default} alt='option' />
            </div>
    </div>
    <div className='input'> 
        <input type='text' placeholder='Search or start new chat......'/>
        <img src={require("../Assets/Music-dashboard-icons-1.svg").default} alt='serach'/>
    </div>

    <div className='online'>
        <div className='more'>
            <ul>
                <li>
                    <h6>Online Now</h6>
                </li>
                <li className='slv'> <span>More</span> <img src={require("../Assets/Music-dashboard-icons.svg").default} alt='Music-dashboard-icons' /></li>
            </ul>
        </div>    
        <div className='people'>
            <ul>
                <li>
                    <img src={Profile1} alt='Profile1' />
                    <span>More</span>
                </li>
                <li>
                    <img src={Profile2} alt='Profile2' />
                    <span>More</span>
                </li>
                <li>
                    <img src={Profile3} alt='Profile3' />
                    <span>More</span>
                </li>
                <li>
                    <img src={Profile4} alt='Profile4' />
                    <span>More</span>
                </li>
                <li>
                    <img src={Profile5} alt='Profile5' />
                    <span>More</span>
                </li>
            </ul>
        </div>
    </div>
   

    <div className='messages'>
        <h6>Messages</h6>
        <span>20</span>
    </div>
    <div className='info'>{renderLists()}</div>
    </div>
    </>
  )
 }
export default Chat
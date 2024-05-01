import React, { Component} from "react";
import './App.css';
import Navigation from './components/screens/navigation';
import Chat from './components/screens/chat.js'
import ChatView from "./components/screens/chat-view";
import Contact from './components/screens/contact_details.js';

function App() {
  return (
    <>
    <Navigation/>
    <Chat/>
    <ChatView/>
    <Contact/>
    </>
  );
}

export default App;

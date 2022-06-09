import { useEffect, useState } from 'react'
import socketClient from 'socket.io-client'
import Message from './message/Message'
import { generateUsername } from "unique-username-generator";

import styles from './Chat.module.css'


// Socket ENDPOINT (notre API)
const SOCKET_ENDPOINT = 'http://localhost:4000'
const socket = socketClient(SOCKET_ENDPOINT)

function Chat () {

  // const [chat,setChat] = useState({
  //   messages : []
  // })

  const [messages, setMessages] = useState([]);

  const [username,setUsername] = useState()
  
  useEffect(() => {
    setUsername(generateUsername)
    configureSocket()
    console.log('i fire once');
    
  },[messages])
    

  // const initChat = async () => {
  //   await setUsername(generateUsername)
  //   configureSocket()
  // }
    
  const configureSocket = () => {
    socket.on('connected', () => {
      console.log('Connected to server')
    })
    
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

  }

  const handleSendMessage = (text) => {
    console.log('sending the message')
    socket.emit('send-message', {
      text,
      senderName: username,
      id: Date.now()
    })
  }


  return (
      <div className={`${styles.chatApp}`}>
          <button onClick={() => {
            handleSendMessage('test')
          }}>send</button>
          <div>
            {
              messages.map((message) => (
                <p key={message.id}>{message.text}</p>
              ))
            }
          </div>
      </div>
  )
}

export default Chat
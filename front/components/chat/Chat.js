import { useEffect, useState } from 'react'
import socketClient from 'socket.io-client'
import Message from './message/Message'
import { generateUsername } from "unique-username-generator";

import styles from './Chat.module.css'


// Socket ENDPOINT (notre API)
const SOCKET_ENDPOINT = 'http://46.101.243.112:4000/'
const socket = socketClient(SOCKET_ENDPOINT)

function Chat () {

  const [chat,setChat] = useState({
    messages : []
  })

  const [messages, setMessages] = useState([]);

  const [username,setUsername] = useState(generateUsername())

  const [inputMessage,setInputMessage] = useState('');
  
  useEffect(() => {
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
      username: username,
      id: Date.now()
    })
  }


  return (
      <div className={`${styles.chatApp}`}>
          <div className={styles.chatListContainer}>
            {
              messages.map((message) => (
                <Message key={message.id} username={message.username} text={message.text} ownership={message.username == username}></Message>
              ))
            }
          </div>
          <div className={styles.sendMessageContainer}>
            <input className={styles.sendMessageInput} onChange={(e) => {
              setInputMessage(e.target.value)
            }} value={inputMessage}></input>
            <div onClick={() => {
              if(inputMessage) {
                handleSendMessage(inputMessage)
                setInputMessage('')
              }
            } } className={styles.sendButton}>
            </div>
          </div>
      </div>
  )
}

export default Chat


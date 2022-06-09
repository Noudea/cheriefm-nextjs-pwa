import Chat from '../components/chat/Chat'
import ChatPlayer from '../components/chatPlayer/ChatPlayer'
import styles from '../styles/ChatScreen.module.css'

function ChatScreen() {
  return(
    <div className={styles.chatScreenContainer}>
      <ChatPlayer>

      </ChatPlayer>
      <Chat>
      </Chat>
    </div>
  )
}

export default ChatScreen
import styles from './Message.module.css'

function Message ({ username, text, ownership }) {
  return (
    <>
      {ownership ? 
        <div className={styles.messageItemContainer}>
          <p className={styles.myUsername}>{username}</p>
            <div className={styles.myMessage}>
              <p>{text}</p>
            </div>
        </div>
      : 
        <div className={styles.messageItemContainer}>
          <p className={styles.username}>{username}</p>
            <div className={styles.message}>
              <p>{text}</p>
            </div>
        </div>
      }
    
    </>
  )
}

export default Message

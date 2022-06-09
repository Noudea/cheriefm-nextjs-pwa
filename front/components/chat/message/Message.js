function Message ({ username, text }) {
  return (
    <div className='message-item'>
      <div>
        <b>{username}</b>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Message

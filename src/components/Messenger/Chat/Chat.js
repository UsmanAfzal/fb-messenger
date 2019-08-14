import React, { Component } from 'react'

import UserDetail from './UserDetail'
import Messages from './Messages'
import ChatBar from './ChatBar'

const Chat = ({messages = [], match}) => {
  
  const { username } = match.params
  
  if (!messages.length) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="chat">
      <ChatBar username={username} match={match} />
      <div className="chat-content">
        <Messages messages={messages} username={username} />
        <UserDetail username={username} />
      </div>
    </div>
  )
}

export default Chat

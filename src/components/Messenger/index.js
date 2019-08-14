import React from 'react'
import { Route } from 'react-router-dom'

import Threads from './ThreadsContainer'
import Chat from './Chat/ChatContainer'

const Messenger = () => (
  <div className="messenger">
    <Threads />
    <Route path={`/messages/:username`} component={Chat} />
  </div>
)

export default Messenger

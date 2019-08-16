import React, { useState, useEffect } from "react";

import * as api from "../../../api/message";
import Chat from "./Chat";

const ChatContainer = ({ match }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    const fetchMessages = username => {
      setMessages({ messages: [] });
      setTimeout(() => {
        api.fetchMessages(username).then(messages => {
          setMessages(messages);
        });
      }, 1000);
    };

  })

  return <Chat messages={messages} match={match} />;
}

/*ChatContainer.propTypes = {
  match: PropTypes.object.isRequired
};*/

export default ChatContainer;

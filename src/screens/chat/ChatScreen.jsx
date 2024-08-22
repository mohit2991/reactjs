import React, { useState, useEffect } from "react";
import useApi from "../../api/useApi";
import errorHandler from "../../utils/errorHandle";
import "./index.scss";

const ChatScreen = () => {
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleSendMessage = async () => {
    try {
      const payload = {
        to_user_id: 2,
        message: message,
      };

      await useApi.sendMessage(payload);
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (message !== "") {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [message]);

  return (
    // <div>
    //   <input type="text" onChange={(e) => setMessage(e.target.value)} />
    //   <button
    //     type="button"
    //     onClick={handleSendMessage}
    //     disabled={isButtonDisabled}
    //   >
    //     Send
    //   </button>
    // </div>
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-participant">
          {/* <img src="avatar.jpg" alt="User Avatar" className="avatar" /> */}
          <div className="chat-info">
            <h2 className="chat-name">Harsh</h2>
            <p className="chat-status">Online</p>
          </div>
        </div>
      </div>
      <div className="message-area">
        {/* Example received message */}
        <div className="message received">
          <p>Hi there! How are you?</p>
        </div>
        {/* Example sent message */}
        <div className="message sent">
          <p>I'm good, thanks! What about you?</p>
        </div>
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="send-button"
          onClick={handleSendMessage}
          disabled={isButtonDisabled}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatScreen;

import React, { useState, useEffect } from "react";
import useApi from "../../api/useApi";
import errorHandler from "../../utils/errorHandle";
import "./index.scss";

const ChatScreen = () => {
  const [customerCareUserList, setCustomerCareUserList] = useState([]);
  const [message, setMessage] = useState("");
  const [userId, setUserId] = useState(null);
  const [chatData, setchatData] = useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    // Get customer care users list
    customerCareUsers();

    // Call get messages function on page load to get message list
    getMessages();
  }, []);

  const customerCareUsers = async () => {
    try {
      const users = await useApi.customerCareUsers();

      setCustomerCareUserList(users?.data?.userList);
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  const getMessages = async () => {
    try {
      const messages = await useApi.getMessages();

      setUserId(messages?.data?.userId);

      setchatData(messages?.data?.chatData);
    } catch (error) {
      // call error handler
      errorHandler(error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const payload = {
        to_user_id: customerCareUserList[0]?.id,
        message: message,
      };

      setMessage("");
      setIsButtonDisabled(true);

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

  useEffect(() => {
    if (chatData.length > 0) {
      setTimeout(() => {
        getMessages();
      }, 1000);
    }
  }, [chatData]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-participant">
          {/* <img src="avatar.jpg" alt="User Avatar" className="avatar" /> */}
          <div className="chat-info">
            <h2 className="chat-name">Customer Support </h2>
            <p className="chat-status">Online</p>
          </div>
        </div>
      </div>
      <div className="message-area">
        {chatData.length === 0 ? (
          "No Chat Available"
        ) : (
          <>
            {chatData.map((chat) => {
              return (
                <div
                  className={`message ${
                    userId === chat.from_user_id ? "sent" : "received"
                  }`}
                >
                  <p>{chat.message}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message"
          className="message-input"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
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

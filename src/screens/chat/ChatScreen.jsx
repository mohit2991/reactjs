import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import useApi from "../../api/useApi";
import errorHandler from "../../utils/errorHandle";
import "./index.scss";

const ChatScreen = () => {
  const [customerCareUserList, setCustomerCareUserList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState([]);
  const [socket, setSocket] = useState(null);

  // Only for admin - Start
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerId = searchParams.get("customerId");
  // Only for admin - End

  useEffect(() => {
    const newSocket = io("http://localhost:8000");
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to the server via socket.io");
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("receiveMessage", (messages) => {
        console.log(">>>>>> mohit message", messages);

        setChatData(messages);
      });

      // Cleanup on component unmount
      return () => {
        socket.off("receiveMessage");
      };
    }
  }, [socket]);

  useEffect(() => {
    customerCareUsers();
    getMessages();
  }, [customerId]);

  const customerCareUsers = async () => {
    try {
      const users = await useApi.customerCareUsers();
      setCustomerCareUserList(users?.data?.userList || []);
    } catch (error) {
      errorHandler(error);
    }
  };

  const getMessages = async () => {
    try {
      const userRole = localStorage.getItem("userRole");
      const payload = {
        to_user_id: userRole === "support" ? customerId : null,
      };
      const messages = await useApi.getMessages(payload);
      setUserId(messages?.data?.userId || null);
      setChatData(messages?.data?.chatData || []);
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleSendMessage = async () => {
    try {
      const userRole = localStorage.getItem("userRole");
      const payload = {
        email: localStorage.getItem("email"),
        to_user_id:
          userRole === "support" ? customerId : customerCareUserList[0]?.id,
        message: message,
      };

      socket.emit("sendMessage", payload);
      setMessage("");
      setIsButtonDisabled(true);
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    setIsButtonDisabled(message.trim() === "");
  }, [message]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="chat-participant">
          {/* <img src="avatar.jpg" alt="User Avatar" className="avatar" /> */}
          <div className="chat-info">
            <h2 className="chat-name">Customer</h2>
            <p className="chat-status">Online</p>
          </div>
        </div>
      </div>
      <div className="message-area">
        {chatData.length === 0
          ? "No Chat Available"
          : chatData.map((chat, index) => (
              <div
                key={index}
                className={`message ${
                  userId === chat.from_user_id ? "sent" : "received"
                }`}
              >
                <p>{chat.message}</p>
              </div>
            ))}
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

import React, { useState } from "react";
import "../css/home.css";

const Home = () => {
  const [phrase, setPhrase] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="home">
      {/* Chat List  */}
      <div className="chat-list">
        <div className="list-header">Name Surname</div>
        <div className="search-bar">
          <input type="text" placeholder="search..." onChange={(e) => setPhrase(e.target.value)} value={phrase} />
        </div>
      </div>
      {/* Chat */}
      <div className="chat">
        <div className="chat-header">Name Surname</div>
        <div className="chat-main"></div>
        <div className="chat-input">
          <div className="chat-input-box">
            <input
              type="text"
              placeholder="message..."
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <div className="send-btn">Send</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

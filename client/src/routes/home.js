import React, { useState } from "react";
import "../css/home.css";

const Home = () => {
  const [phrase, setPhrase] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="home">
      {/* Chat List  */}
      <div className="chat-list">
        <div>Name Surname</div>
        <div className="search-bar">
          <input type="text" placeholder="search..." onChange={(e) => setPhrase(e.target.value)} value={phrase} />
        </div>
      </div>
      {/* Chat */}
      <div className="chat">
        <div className="chat-header">Name Surname</div>
        <div className="chat-main"></div>
        <div className="chat-input">input</div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import UserCard from "../components/userCard";
import "../css/home.css";
import { connect } from "react-redux";

const Home = ({ chats, selectChat }) => {
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
        <div className="chat-list-main">
          {chats.list.map((item, index) => {
            return (
              <div key={index} onClick={() => selectChat(index)}>
                <UserCard item={item} selected={index === chats.selected}/>
              </div>
            );
          })}
        </div>
      </div>
      {/* Chat */}
      <div className="chat">
        <div className="chat-header">{chats.list[chats.selected].nick}</div>
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

const mapStateToProps = (state) => {
  return {
    chats: state.chats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectChat: (index) => dispatch({ type: "SELECT_CHAT", payload: index }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

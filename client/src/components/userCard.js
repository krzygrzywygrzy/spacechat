import React from "react";
import "../css/components/userCard.css";

const UserCard = ({ item, selected }) => {
  
  //TODO: mark selected chat
  return (
    <div className={"user-card"}>
      <div className="image"></div>
      <div className="info">
        <div>{item.nick}</div>
        <div>last message</div>
      </div>
    </div>
  );
};

export default UserCard;

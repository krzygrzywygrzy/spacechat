import React from "react";
import "../css/components/userCard.css";

const UserCard = () => {
  return (
    <div className="user-card">
      <div className="image"></div>
      <div className="info">
        <div>Name surname</div>
        <div>last message</div>
      </div>
    </div>
  );
};

export default UserCard;

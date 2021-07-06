import React, { useState, useRef, useEffect } from "react";
import useScreenSize from "../core/useScreenSize";
import "../css/home.css";

const Home = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const [phrase, setPhrase] = useState("");

  // refs
  const sideMenuRef = useRef(); // ref pointing to side menu of chat
  const chatRef = useRef(); // ref pointing to chat
  const bottomInputRef = useRef();

  // screen size
  const screenWidth = useScreenSize();

  // set chat width
  useEffect(() => {
    //TODO: make this more responsive

    let menusWidth = 0;

    if (screenWidth > 600) {
      menusWidth = 320;
    }

    if (showSideMenu) menusWidth *= 2;
    
    const finalWidth = screenWidth - menusWidth;

    chatRef.current.style.width = `${finalWidth}px`;
    bottomInputRef.current.style.width = `${finalWidth - 80}px`;;
    
  }, [screenWidth, showSideMenu]);

  // handle showing and hiding chat side menu, with
  const handleSideMenu = () => {
    if (showSideMenu === true) {
      sideMenuRef.current.style.display = "none";
      sideMenuRef.current.style.width = "0px";
    } else {
      sideMenuRef.current.style.display = "block";
      sideMenuRef.current.style.width = "320px";
    }

    setShowSideMenu(!showSideMenu);
  };

  return (
    <div className="home">
      {/* Chat List  */}
      <div className="chat-list">
        <div>Name Surname</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="search..."
            onChange={(e) => setPhrase(e.target.value)}
            value={phrase}
          />
        </div>
      </div>
      {/* Chat */}
      <div className="chat">
        <div ref={chatRef} className="chat-main">
          <div className="chat-main-header">
            <div>Name Surname</div>
            <div>
              <button onClick={handleSideMenu}>show menu</button>
            </div>
          </div>
          <div className="chat-main-display">
            <div>123</div>
          </div>
          <div ref={bottomInputRef} className="text-input">input</div>
        </div>
        {/* Chat's side menu */}
        <div ref={sideMenuRef} className="side-menu">
          Side Menu
        </div>
      </div>
      <div className="clear"></div>
    </div>
  );
};

export default Home;

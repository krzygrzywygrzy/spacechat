import React, {useState, useRef, useEffect} from "react";
import useScreenSize from "../core/useScreenSize";
import "../css/home.css";

const Home = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const sideMenuRef = useRef(); // ref pointing to side menu of chat
  const chatRef = useRef(); // ref pointing to chat
  const screenWidth = useScreenSize();

  // set chat width
  useEffect(() => {
    //TODO: make this more responsive

    let menusWidth = 0;
    
    if(screenWidth > 600){
      menusWidth = 320;
    }

    if (showSideMenu) menusWidth *= 2;

    chatRef.current.style.width = `${screenWidth - menusWidth}px`
  }, [screenWidth]);

  // handle showing and hiding chat side menu, with 
  const handleSideMenu = () => {
    if (showSideMenu === true){
      sideMenuRef.current.style.display = "none";
      sideMenuRef.current.style.width = "0px";
    }
    else {
      sideMenuRef.current.style.display = "block";
      sideMenuRef.current.style.width = "320px";
    }

    setShowSideMenu(!showSideMenu);
  }
  



  return <div className="home">
    <div className="chat-list">chat-list</div>
    <div className="chat" >
      <div ref={chatRef} className="chat-main">Main View <button onClick={handleSideMenu}>show menu</button></div>
      <div ref={sideMenuRef} className="side-menu">Side Menu</div>
    </div>
    <div className="clear"></div>
  </div>;
};

export default Home;

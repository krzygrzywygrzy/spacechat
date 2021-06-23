import React from "react";
import "../css/authNav.css";
import { Link } from "wouter";

const AuthNav = () => {
  return (
    <div className="auth-nav">
      <div className="logo">Logo</div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default AuthNav;

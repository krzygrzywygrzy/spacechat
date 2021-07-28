import React, { useState } from "react";
import "../css/auth.css";
import AuthNav from "../components/authNav";
import { Link } from "wouter";

const SignupPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhone] = useState("");

  return (
    <div className="auth">
      <AuthNav />
      <div className="auth-form">
        <div className="title unselectable">Sign up to start chatting with your friends</div>
        <input placeholder="login..." value={login} onChange={(e) => setLogin(e.target.id)} />
        <input type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.id)} />
        <input placeholder="phone..." value={phoneNumber} onChange={(e) => setPhone(e.target.id)} />
        <div className="auth-bottom">
          <div className="btn">Sign up</div>
          <div>
            <Link to="/login">log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

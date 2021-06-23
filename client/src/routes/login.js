import React, { useState } from "react";
import "../css/auth.css";
import AuthNav from "../components/authNav";
import { Link } from "wouter";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <AuthNav />
      <div className="auth-form">
        <div className="title">Communicate with people from all across the universe</div>
        <input placeholder="login..." value={login} onChange={(e) => setLogin(e.target.id)} />
        <input type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.id)} />
        <div className="auth-bottom">
          <div className="btn">Log in</div>{" "}
          <div>
            <Link to="/signup">no account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

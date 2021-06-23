import React, { useState } from "react";
import "../css/auth.css";
import AuthNav from "../components/authNav";
import { Link } from "wouter";
import loginService from "../services/loginService";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await loginService(login, password);
    console.log(res);
  };

  return (
    <div className="auth">
      <AuthNav />
      <div className="auth-form">
        <div className="title">Chat with people from all across the universe</div>
        <input placeholder="login..." value={login} onChange={(e) => setLogin(e.target.id)} />
        <input type="password" placeholder="password..." value={password} onChange={(e) => setPassword(e.target.id)} />
        <div className="auth-bottom">
          <div className="btn" onClick={handleLogin}>
            Log in
          </div>{" "}
          <div>
            <Link to="/signup">no account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

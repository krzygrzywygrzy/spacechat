import React, { useState } from "react";
import "../css/auth.css";

const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="auth-form">
        <div className="title">Communicate with people from all across the galaxy</div>
        <input placeholder="login..." value={login} onChange={(e) => setLogin(e.target.id)} />
        <input placeholder="password..." value={password} onChange={(e) => setPassword(e.target.id)} />
        <div className="auth-bottom">
          <div className="btn">Log in</div> <div>no account?</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import { Route } from "wouter";
import Home from "./routes/home";
import LoginPage from "./routes/login";
import SignupPage from "./routes/signup";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
    </div>
  );
}

export default App;

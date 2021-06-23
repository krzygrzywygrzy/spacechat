import React from "react";
import { Route } from "wouter";
import Home from "./routes/home";
import LoginPage from "./routes/login";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import Login from "./components/Login.js";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [user]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Quédate en casa</h2>
        <br />
        {user ? <h1>¡Bienvenido, {user.username}!</h1> : <Login></Login>}
      </header>
    </div>
  );
};

export default App;

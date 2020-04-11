import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";

const App = () => {


  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, [user]);


  return (
    <div className="App">
      {user ? <Navbar autenticado = {true} /> : <Navbar autenticado = {false}/> }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <Home></Home>
      </body>
    </div>
  );
};




export default App;

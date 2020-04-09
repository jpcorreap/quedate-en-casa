import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";

const App = () => {
  return (
    <div className="App">
      <Navbar user={null} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;

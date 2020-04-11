import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Activities from "./components/Activities.js";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        console.log("Seteó al usuario ", user);
      });
  }, []);

  return (
    <div className="App">
      {user ? (
        <Navbar autenticado={true} username={user.username} />
      ) : (
        <Navbar autenticado={false} />
      )}
      <div className="App-header">
        <About />
      </div>
      <Activities />
    </div>
  );
};

export default App;

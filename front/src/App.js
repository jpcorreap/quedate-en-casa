import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
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
      <BrowserRouter>
        <Switch>
         <Route exact path='/' component={About} />
         <Route exact path='/about' component={About} />
         <Route exact path='/activities' component={Activities} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

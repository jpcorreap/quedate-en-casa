import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Activities from "./components/Activities.js";
import Custom from "./components/Custom.js";
import MyActivities from "./components/MyActivities.js";

const App = () => {
  const [user, setUser] = useState(null);
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        if (user) {
          setUser(user);
        }
      });
  }, []);

  useEffect(() => {
    fetch("/getAllActivities")
      .then((res) => res.json())
      .then((actividades) => {
        if (actividades) {
          setActividades(actividades);
        }
      });
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <Navbar autenticado={true} username={user.username} />

          <Switch>
            <Route exact path="/">
              <About />
            </Route>

            <Route exact path="/Activities">
              <Activities user={user} actividades={actividades} />
            </Route>

            <Route exact path="/MyActivities">
              <MyActivities
                user={user}
                actividades={actividades}
              />
            </Route>

            <Route exact path="/Custom">
              <Custom user={user} />
            </Route>
          </Switch>
        </div>
      ) : (
        <div>
          <Navbar autenticado={false} />

          <Switch>
            <Route exact path="/">
              <About />
            </Route>

            <Route exact path="/Activities">
              <Activities user={null} actividades={actividades} />
            </Route>
          </Switch>
          <br />
          <br />
          <div className="container">
            <h5 id="footer">
              ¡Inicia sesión para acceder a muchas más funcionalidades! Podrás
              guardar, crear, eliminar y visualizar tus actividades.
              <br />
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

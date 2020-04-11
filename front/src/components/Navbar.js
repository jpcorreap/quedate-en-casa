import React, { useState, useEffect }  from "react";
import Login from "./Login.js";
import Register from "./Register.js";

const Navbar = (props) => {
  const [user, setUser] = React.useState(props.user);
  
  let loginVisible = false;
  let registerVisible = false;

  const mostrarLogin = () => {
    document.getElementById("menuLogin").style = "visibility:" + ( loginVisible ? "hidden" : "visible" );
    loginVisible = !loginVisible;
  };

  const mostrarRegistro = () => {
    document.getElementById("menuRegister").style = "visibility:" + ( registerVisible ? "hidden" : "visible" );
    registerVisible = !registerVisible;
  };

  
  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
        console.log("Componente Navbar: setUser ", user);
      });
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <a id="title" className="navbar-brand" href="/">
          <img
            src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
          &nbsp; Quédate en casa
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {!user ? (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" onClick={ mostrarLogin }>
                    Ingresar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={ mostrarRegistro }>
                    Registrarse
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {user.username}
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="./Guardadas">
                      Mis actividades
                    </a>
                    <div className="dropdown-divider"></div>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3001/logout"
                    >
                      Cerrar sesión
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <Login></Login>
      <Register></Register>
    </div>
  );
};
export default Navbar;

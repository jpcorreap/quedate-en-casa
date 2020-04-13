import React from "react";
import Login from "./Login.js";
import Register from "./Register.js";

const Navbar = (props) => {
  let loginVisible = false;
  let registerVisible = false;

  const mostrarLogin = () => {
    document.getElementById("menuLogin").style =
      "visibility:" + (loginVisible ? "hidden" : "visible");
    loginVisible = !loginVisible;
  };

  const mostrarRegistro = () => {
    document.getElementById("menuRegister").style =
      "visibility:" + (registerVisible ? "hidden" : "visible");
    registerVisible = !registerVisible;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <a id="title" className="navbar-brand" href="/">
          <img
            src="https://raw.githubusercontent.com/jpcorreap/quedate-en-casa/master/front/public/stayHome.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          />
        <strong>&nbsp; Quédate en casa</strong>  
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {props.autenticado === false ? (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./Activities">
                    <strong>Actividades</strong>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={mostrarLogin}>
                    <strong>Ingresar</strong>
                  </a>
                </li>
                <li className="nav-item" >
                  <a className="nav-link" onClick={mostrarRegistro}>
                   <strong>Registrarse</strong> 
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
                   <strong>Actividades</strong> 
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="./Activities">
                      Actividades Generales
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="./MyActivities">
                      Mis actividades
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="./Custom">
                      Crear actividad
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <strong>{props.username}</strong>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
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

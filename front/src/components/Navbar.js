import React from "react";
import Login from "./Login.js";
import Register from "./Register.js";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  let loginVisible = false;
  let registerVisible = false;

  const mostrarLogin = () => {
    if (registerVisible) {
      document.getElementById("menuRegister").style = "visibility: hidden";
      registerVisible = false;
    }

    document.getElementById("menuLogin").style =
      "visibility:" + (loginVisible ? "hidden" : "visible");
    loginVisible = !loginVisible;
  };

  const mostrarRegistro = () => {
    if (loginVisible) {
      document.getElementById("menuLogin").style = "visibility: hidden";
      loginVisible = false;
    }

    document.getElementById("menuRegister").style =
      "visibility:" + (registerVisible ? "hidden" : "visible");
    registerVisible = !registerVisible;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <Link to={"/"} id="title" className="navbar-brand">
          <img
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
            src="https://raw.githubusercontent.com/jpcorreap/jpcorreap.github.io/master/utils/natalia/favicon.png"
          ></img>
          <strong>&nbsp;Inicio&nbsp;&nbsp;</strong>
        </Link>

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
                  <Link to={"/Activities"} className="nav-link">
                    <strong>Actividades</strong>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={mostrarLogin}>
                    <strong>Ingresar</strong>
                  </a>
                </li>
                <li className="nav-item">
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
                    <Link to={"/Activities"} className="dropdown-item">
                      Ver todas
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to={"/MyActivities"} className="dropdown-item">
                      Mis actividades
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to={"/Custom"} className="dropdown-item">
                      Crear actividad
                    </Link>
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
                    <a className="dropdown-item" href="/logout">
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

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
          <svg
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 498 498"
          >
            <defs></defs>
            <title>favicon</title>
            <rect className="cls-1" x="61" y="265.06" width="377" height="232.94" />
            <polyline
              className="cls-1"
              points="0 282.71 89.24 187.41 89.24 108.59 152.04 108.59 152.04 135.65 242.39 52.12 498 282.71 0 287.41"
            />
            <rect className="cls-1" x="95.16" width="46.84" height="89" />
            <rect className="cls-1" x="67" y="22.24" width="104" height="44.76" />
            <path
              className="cls-2"
              d="M134,333.54c0,26.52-7.31,38-25.46,38-16.92,0-24.43-11.68-24.43-38.37,0-25.63,8.35-36.68,25.12-36.68C126.4,296.49,134,308.37,134,333.54Zm-32.37-.36c0,17.86,1.63,25.29,7.39,25.29,6.08,0,7.45-6.91,7.45-25.29,0-17.17-1.44-23.55-7.45-23.55C103.18,309.63,101.58,316.32,101.58,333.18Zm25.82,27.59,11.84,8.31-8.46,10.7-15.88-11Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M185.15,352.52c0,9.26,0,14.84.11,17.66H169.57a50.12,50.12,0,0,1-.66-5.71c-2.82,4.92-6.79,6.63-12.59,6.63-8.41,0-14-4.21-14-16.71V313.82h16.53v37.54c0,4.43.9,6.68,4.39,6.68,3.74,0,5.37-2.13,5.37-8.5V313.82h16.53Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M209.36,345.92c0,7.34.72,13,5.87,13,4.62,0,5.3-3.77,5.48-6.34h15.8c-.41,3.78-2.09,18.67-21.61,18.67-18.91,0-22-14.31-22-29.62,0-19,7.68-28.7,22.33-28.7,16.8,0,21.64,11.28,21.64,26.87,0,1.91-.07,5-.14,6.16Zm24.89-52-14.47,14.5H206.13L216.24,294Zm-13.66,41.59c0-5.48-.25-10.57-5.4-10.57s-5.69,5.37-5.69,10.57Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M287.78,294.4v59c0,7.69.07,13.82.18,16.77H272.09a44.51,44.51,0,0,1-.47-5.54c-2.08,4.17-5.74,6.5-12.3,6.5-10.91,0-16.2-8.91-16.2-29.7,0-18.77,6.2-28.55,18.32-28.55,5.62,0,8.65,2,9.81,4V294.4Zm-27.84,47.29c0,12.59,1.52,16.57,5.69,16.57,4.9,0,5.9-3.74,5.9-17,0-12.11-.65-15.42-5.47-15.42C262.18,325.88,259.94,328.59,259.94,341.69Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M337.5,356.29c0,3.85.25,11.06.43,13.89H323a25.89,25.89,0,0,1-.65-4.89c-2.77,3.77-6.72,5.85-12.7,5.85-10.09,0-15.11-7.7-15.11-17.36,0-12.32,8.38-18.5,22.21-18.5,1.65,0,3.36,0,4.51.07v-5.49c0-3-.44-5.6-4.49-5.6-3.77,0-4.42,2.36-4.63,6.38H296.63c.22-9.94,5.1-17.75,20.8-17.75,13.24,0,20.07,5.28,20.07,16.9Zm-16-10.6a22.11,22.11,0,0,0-3.13-.14c-5.71,0-7.52,3-7.52,6.83,0,3.27,1.36,6,4.92,6,4.87,0,5.73-3.73,5.73-10.07Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M342.31,313.82h6.79v-13.3h16.34v13.3h7.83v12.94h-7.83v27c0,3,.69,4.48,4.31,4.48a13.58,13.58,0,0,0,2.65-.17v11.72c-2.87,1.07-7,1.18-9.21,1.18-10.69,0-14.24-4-14.24-14.39V326.76h-6.64Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M393.75,345.92c0,7.34.73,13,5.87,13,4.62,0,5.3-3.77,5.48-6.34h15.8c-.4,3.78-2.09,18.67-21.61,18.67-18.91,0-22-14.31-22-29.62,0-19,7.68-28.7,22.33-28.7,16.81,0,21.64,11.28,21.64,26.87,0,1.91-.07,5-.14,6.16ZM405,335.54c0-5.48-.24-10.57-5.4-10.57s-5.69,5.37-5.69,10.57Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M113.75,435.92c0,7.34.73,13,5.87,13,4.62,0,5.3-3.77,5.48-6.34h15.8c-.4,3.78-2.09,18.67-21.61,18.67-18.91,0-22-14.31-22-29.62,0-19,7.69-28.7,22.33-28.7,16.81,0,21.64,11.28,21.64,26.87,0,1.91-.07,5-.14,6.16ZM125,425.54c0-5.48-.25-10.57-5.41-10.57s-5.69,5.37-5.69,10.57Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M149,421.52c0-11.62,0-14.77-.11-17.7h15.88a43.62,43.62,0,0,1,.47,5.17c1.77-2.79,5.47-6.16,12.37-6.16,9.64,0,14.35,6.07,14.35,16.81v40.54H175.39V422.7c0-4.35-.79-6.82-4.7-6.82-3.53,0-5.2,1.92-5.2,8.16v36.14H149Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M260.82,440.14c-.22,8-3.05,21-21.33,21-17.39,0-21.39-12.64-21.39-29.54,0-17.14,6.27-28.77,22.3-28.77,18.7,0,20.38,14.49,20.45,20.47H244.67c-.07-4.21-.33-8.26-4.45-8.26s-5.37,4.13-5.37,16.51c0,12.67,1.13,17.26,5.26,17.26,4.3,0,4.77-4.1,5-8.67Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M309,446.29c0,3.85.25,11.06.43,13.89H294.45a25.89,25.89,0,0,1-.65-4.89c-2.77,3.77-6.72,5.85-12.7,5.85-10.09,0-15.11-7.7-15.11-17.36,0-12.32,8.38-18.5,22.21-18.5,1.65,0,3.36,0,4.51.07v-5.49c0-3-.44-5.6-4.49-5.6-3.77,0-4.42,2.36-4.63,6.38H268.08c.22-9.94,5.1-17.75,20.8-17.75,13.24,0,20.07,5.28,20.07,16.9Zm-16-10.6a22.11,22.11,0,0,0-3.13-.14c-5.71,0-7.52,3-7.52,6.83,0,3.27,1.36,6,4.92,6,4.87,0,5.73-3.73,5.73-10.07Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M315.54,442.69h15.52c.08,3.43,1.36,6.9,5.53,6.9,3.25,0,4.67-1.78,4.67-4.61,0-3.2-1.48-4.86-7.66-7.1-13.21-4.78-16.91-9.27-16.91-18.2,0-8.48,5.21-16.85,19.51-16.85,16.65,0,19.73,10.54,19.73,17.64H341c0-2.54-.37-6.47-4.7-6.47-2.61,0-4,1.63-4,4.12,0,2.94,1.67,4.37,8.2,6.72,12.11,4.4,16.74,9.19,16.74,18.16,0,11.37-6.65,18.14-21,18.14-15.59,0-20.62-9-20.74-18.45Z"
              transform="translate(-2 -2)"
            />
            <path
              className="cls-2"
              d="M405.31,446.29c0,3.85.25,11.06.43,13.89H390.81a25.89,25.89,0,0,1-.65-4.89c-2.77,3.77-6.72,5.85-12.7,5.85-10.09,0-15.11-7.7-15.11-17.36,0-12.32,8.38-18.5,22.2-18.5,1.66,0,3.37,0,4.52.07v-5.49c0-3-.44-5.6-4.49-5.6-3.77,0-4.42,2.36-4.63,6.38H364.44c.22-9.94,5.1-17.75,20.8-17.75,13.24,0,20.07,5.28,20.07,16.9Zm-16-10.6a22.11,22.11,0,0,0-3.13-.14c-5.71,0-7.52,3-7.52,6.83,0,3.27,1.36,6,4.92,6,4.87,0,5.73-3.73,5.73-10.07Z"
              transform="translate(-2 -2)"
            />
          </svg>
          <strong>&nbsp;Inicio&nbsp;&nbsp;</strong>
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
                  <a className="nav-link" onClick={()=>{window.location="/Activities"}}>
                    <strong>Actividades</strong>
                  </a>
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
                    <a className="dropdown-item" href="./Activities">
                      Ver todas
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

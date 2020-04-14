import React from "react";
import { Link } from "react-router-dom";
import imagenHome from "./imagenHome.png";

const About = () => {
  return (
    <div className="About">
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="img-container fluid col-5">
            <img src={imagenHome} width="100%"></img>
            <p>
              Fuente:{" "}
              <a href="https://www.freepik.com/free-photos-vectors/home">
                Freepik
              </a>
            </p>
          </div>

          <div className="col-7">
            <h1 id="TituloAbout">
              <strong>#QuédateEnCasa</strong>
            </h1>
            <h5 id="descripcionAbout">
              Durante estos tiempos de cuarentena obligatoria, tu salud mental
              es muy importante. Es por ello que en este sitio web te
              recomendamos una serie de actividades completamente gratuitas que
              puedes realizar desde la comodidad de tu hogar.
              <br />
              <br />
            </h5>
            <button
              type="button"
              id="botonVerActividades"
              className="btn btn-warning"
            >
              <Link to={"/Activities"}>
                <strong>Ver actividades</strong>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

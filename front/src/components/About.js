import React from "react";

const About = () => {
  return (
    <div className="Home">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1>
            <strong>#QuédateEnCasa</strong>
            <br />
          </h1>
        </div>
        <div className="container">
          <h5 id="descripcionAbout">
            Durante estos tiempos de cuarentena obligatoria, tu salud mental es
            muy importante. Es por ello que en este sitio web te recomendamos
            una serie de actividades completamente gratuitas que puedes realizar
            desde la comodidad de tu hogar.
            <br />
            <br />
            <br />
          </h5>
          <div className="row">
            <div className="col-5">
              <h5>Para comenzar, haz click en el siguiente botón:</h5>
            </div>
            <div>
              <button
                type="button"
                id="botonVerActividades"
                className="btn btn-info"
                onClick={() => (window.location = "./Activities")}
                autoFocus
              >
                <strong>Ver actividades</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;

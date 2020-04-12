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
          </h1>
        </div>
        <div className="container d-flex p-2">
          <h5 id="descripcionAbout">
            Durante estos tiempos de cuarentena obligatoria, tu salud mental es
            muy importante. Es por ello que en este sitio web te recomendamos
            una serie de actividades completamente gratuitas que puedes realizar
            desde la comodidad de tu hogar.
          </h5>
          <br />
        </div>
        <br />
        <button
          type="button"
          className="btn btn-info"
          onClick={() => (window.location = "./Activities")}
          autoFocus
        >
          Ver actividades
        </button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;

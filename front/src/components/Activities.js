import React, { useState, useEffect } from "react";

const Activities = (props) => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    let isSubscribed = true;
    fetch("/activities")
      .then((res) => res.json())
      .then((actividades) => {
        if (isSubscribed) {
          setActividades(actividades);
          console.log("fetched data from activities ", actividades);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  return (
    <div className="Activities">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1>
            <strong>#QuédateEnCasa</strong>
          </h1>
        </div>
      </div>
      {props.user !== null ? (
        <div className="container">
          <div className="row justify-content-center">
            {actividades.map((actividad) => (
              <div
                className="card border-primary mb-3 col-md-3"
                key={actividad._id}
              >
                <div className="card-header">
                  <div className="row">
                    <div className="col-12">
                      <h4>{actividad.titulo}</h4>
                    </div>
                    <div className="d-flex">
                      <button
                        type="button"
                        class="btn btn-dark ml-auto p-2"
                        onClick={() => {
                          window.location =
                            "http://localhost:3001/save/" +
                            props.user._id +
                            "/" +
                            actividad._id;
                        }}
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{actividad.descripcion}</p>
                  <p>
                    Accede a este contenido ingresando a{" "}
                    <a href={actividad.links} target="_blank">
                      {actividad.nombres_links}
                    </a>
                  </p>
                  <p className="card-text">
                    <strong>Categorías: </strong>
                    {actividad.categorias.replace(",", ", ")}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row justify-content-center">
            {actividades.map((actividad) => (
              <div
                className="card border-primary mb-3 col-md-3"
                key={actividad._id}
              >
                <div className="card-header">
                  <div className="row">
                    <h4>{actividad.titulo}</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{actividad.descripcion}</p>
                  <p>
                    Accede a este contenido ingresando a{" "}
                    <a href={actividad.links} target="_blank">
                      {actividad.nombres_links}
                    </a>
                  </p>
                  <p className="card-text">
                    <strong>Categorías: </strong>
                    {actividad.categorias.replace(",", ", ")}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <br />
      <br />
    </div>
  );
};

export default Activities;

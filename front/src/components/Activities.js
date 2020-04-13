import React, { useState, useEffect } from "react";

const Activities = (props) => {
  const [actividades, setActividades] = useState([]);

  const filtrarActividades = () => {
    let filtro = document.getElementById("barraBusquedaCategoria").value;

    // Oculta las actividades que no se desean ver y deja visibles las de interés
    actividades.forEach((actividad) => {
      if (actividad.categorias.includes(filtro)) {
        document.getElementById(actividad._id).style.visibility = "visible";
        document.getElementById(actividad._id).style.position = "relative";
      } else {
        document.getElementById(actividad._id).style.visibility = "hidden";
        document.getElementById(actividad._id).style.position = "absolute";
      }
    });
  };

  useEffect(() => {
    let isSubscribed = true;
    fetch("/activities")
      .then((res) => res.json())
      .then((actividades) => {
        if (isSubscribed) {
          setActividades(actividades);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  return (
    <div className="Activities">
      <div className="container">
        <h1>
          <br />
        </h1>
        <div className="row justify-content-between">
          <h1>
            <strong>Actividades gratuitas por realizar</strong>
          </h1>
          <div className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Categoría"
              aria-label="Search"
              id="barraBusquedaCategoria"
              autoFocus
            />
            <button
              onClick={filtrarActividades}
              className="btn btn-warning my-2 my-sm-0"
            >
              Filtrar
            </button>
          </div>
          <h1>
            <br />
          </h1>
        </div>
      </div>
      <br />
      <br />
      {props.user !== null ? (
        <div className="container">
          <div className="row justify-content-center">
            {actividades.map((actividad) => (
              <div
                className="card border-primary mb-3 col-md-3"
                key={actividad._id}
                id={actividad._id}
              >
                <div className="card-header">
                  <div>
                    <p className="card-text">
                      <strong>Categorías: </strong>
                      {actividad.categorias.replace(",", ", ")}.
                    </p>
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-12">
                      <h4>{actividad.titulo}</h4>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{actividad.descripcion}</p>
                  <p>
                    Accede a este contenido ingresando a{" "}
                    <a
                      href={actividad.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {actividad.nombres_links}
                    </a>
                  </p>
                  <div height="100%" className="row">
                    <div className="col align-self-end">
                      <div className="d-flex">
                        {!props.user.savedActivities
                          .toString()
                          .includes(actividad._id) ? (
                          <button
                            type="button"
                            className="btn btn-dark ml-auto p-2"
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
                        ) : (
                          <span className="yaGuardada ml-auto p-2">
                            Guardada
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
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
                id={actividad._id}
              >
                <div className="card-header">
                  <div>
                    <p className="card-text">
                      <strong>Categorías: </strong>
                      {actividad.categorias.replace(",", ", ")}.
                    </p>
                  </div>
                  <br></br>
                  <div className="row">
                    <h4>{actividad.titulo}</h4>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">{actividad.descripcion}</p>
                  <p>
                    Accede a este contenido ingresando a{" "}
                    <a
                      href={actividad.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {actividad.nombres_links}
                    </a>
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

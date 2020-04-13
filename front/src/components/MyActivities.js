import React, { useState, useEffect } from "react";

const MyActivities = (props) => {
  const [misactividades, setMisActividades] = useState([]);

  // Get all saved activities
  useEffect(() => {
    let isSubscribed = true;
    let ids = "";

    props.user.savedActivities.forEach((activity) => {
      ids += activity + "+";
    });

    fetch("/findActivitiesByIDs/" + ids)
      .then((res) => res.json())
      .then((misactividades) => {
        if (isSubscribed) {
          setMisActividades(misactividades);
          console.log("fetched data from activities ", misactividades);
        }
      });
    return () => (isSubscribed = false);
  }, []);

  return (
    <div className="MyActivities">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1>
            <strong>#QuédateEnCasa</strong>
          </h1>
        </div>
      </div>

      <div className="container">
        <h2>Actividades guardadas:</h2>
        <div className="row justify-content-center">
          {misactividades.map((basicas) => (
            <div
              className="card border-primary mb-3 col-md-3"
              key={basicas._id}
            >
              <div className="card-header">
                <div>
                <p className="card-text">
                  <strong>Categorías: </strong>
                  {basicas.categorias.replace(",", ", ")}.
                </p>
                </div>
                <br>
                </br>
                <div className="row">
                  <div className="col-12">
                    <h4>{basicas.titulo}</h4>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{basicas.descripcion}</p>
                <p>
                  Accede a este contenido ingresando a{" "}
                  <a href={basicas.links} target="_blank">
                    {basicas.nombres_links}
                  </a>
                </p>
                <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-dark ml-auto p-2"
                      onClick={() => {
                        window.location =
                          "http://localhost:3001/deleteSavedActivity/" +
                          props.user._id +
                          "/" +
                          basicas._id;
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
            
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Actividades creadas:</h2>
        <div className="row justify-content-center">
          {props.userActivities.map((guardadas, i) => (
            <div className="card border-primary mb-3 col-md-3" key={i}>
              <div className="card-header">
                <div>
                <p className="card-text">
                  <strong>Categorías: </strong>
                  {guardadas.categorias.replace(",", ", ")}.
                </p>
                </div>
                <br>
                </br>
                <div className="row">
                  <div className="col-12">
                    <h4>{guardadas.titulo}</h4>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">{guardadas.descripcion}</p>
                <p>
                 Link:{" "}
                  <a href={guardadas.link} target="_blank">
                    {guardadas.link}
                  </a>
                </p>
                <div className="d-flex">
                    <button
                      type="button"
                      className="btn btn-dark ml-auto p-2"
                      onClick={() => {
                        window.location =
                          "http://localhost:3001/deletePersonalActivity/" +
                          props.user._id +
                          "/" +
                          guardadas.titulo;
                      }}
                    >
                      Eliminar
                    </button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyActivities;

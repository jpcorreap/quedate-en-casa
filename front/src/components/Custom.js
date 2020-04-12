import React from "react";

const Custom = (props) => {
  const saveActivity = () => {
    let formulario = document.getElementById("formNuevaActividadPersonal");

    console.log("GetElementByID: ", formulario);

    fetch("/savePersonalActivity/123" /*+ "ESTÁ PENDIENTE TENER EL USUARIO DESDE AQUÍ"*/, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formulario,
    });
  };

  return (
    <div className="container justify-content-center">
      <br />
      <br />
      <br />
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">
            <strong>Crear una nueva actividad personal</strong>
          </h4>
          <h6 className="card-subtitle mb-2 text-muted">
            Esta actividad será añadida únicamente a tu perfil de usuario.
          </h6>

          <br />

          <form id="formNuevaActividadPersonal">
            <div className="form-group">
              <div className="row">
                <label className="col-4">Título:</label>
                <input
                  id="titulo"
                  className="form-control col"
                  type="text"
                  name="titulo"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label className="col-4">Descripción:</label>
                <input
                  id="descripcion"
                  className="form-control col"
                  type="text"
                  name="descripcion"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label className="col-4">
                  Categorías (separadas por comas):
                </label>
                <input
                  id="descripcion"
                  className="form-control col"
                  type="text"
                  name="categorias"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label className="col-4">Link:</label>
                <input
                  id="descripcion"
                  className="form-control col"
                  type="text"
                  name="link"
                />
              </div>
            </div>
          </form>
        </div>
        <button onClick={saveActivity} className="btn btn-primary">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Custom;

import React from "react";

const Custom = (props) => {
  const saveActivity = () => {
    let inTitulo = document.getElementById("titulo").value;
    let inDescripcion = document.getElementById("descripcion").value;
    let inCategorias = document.getElementById("categorias").value;
    let inLink = document.getElementById("link").value;

    const aux = JSON.stringify({
      titulo: inTitulo,
      descripcion: inDescripcion,
      categorias: inCategorias,
      link: inLink,
    });

    const aux3 = aux.replace(']"', "]");

    fetch("/savePersonalActivity/a+" + props.userId, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: aux3,
    }).then(() => (window.location = "/MyActivities"));
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
                  Categorías ( Categoría1[,Categoría2,...]):
                </label>
                <input
                  id="categorias"
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
                  id="link"
                  className="form-control col"
                  type="text"
                  name="link"
                />
              </div>
            </div>
          </form>
        </div>
        <button onClick={saveActivity} className="btn btn-warning">
          Guardar
        </button>
      </div>
    </div>
  );
};

export default Custom;

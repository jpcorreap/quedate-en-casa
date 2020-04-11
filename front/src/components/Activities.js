import React, { useState, useEffect } from "react";

const Activities = (props) => {

  const [actividades, setActividades]= useState([])
  
  useEffect(() => {
    fetch("/activities")
      .then((res) => res.json())
      .then((actividades) => {
        setActividades(actividades);
        console.log("fetched data from activities ", actividades);
      });
  }, []);


  return (
    <div className="Activities">
      <br />
      <br />
      <div className="container">
        <div className="row">
          <h1>#MeQuedoEnCasa</h1>
        </div>
      </div> 
      {props.user !== null ? ( 
      <div className="container">
        { actividades.map(post => (
          <div className="card border-primary mb-3" key={post.id}>
             <div className="card-header">{post.categorias}</div>
              <div className="card-body" >
              <h4 className="card-title">{post.titulo}</h4>
              <p className="card-text">{post.descripcion}</p>
              </div>
              <footer className="w3-container w3-blue">
              <button className="w3-button w3-black"> Agregar actividad </button>
              </footer>
          </div>
  ))}
</div> ):( 
      <div className="container">
        { actividades.map(post => (
          <div className="card border-primary mb-3" key={post.id}>
             <div className="card-header">{post.categorias}</div>
              <div className="card-body" >
              <h4 className="card-title">{post.titulo}</h4>
              <p className="card-text">{post.descripcion}</p>
              </div>
          </div>
  ))}
</div> )}   
      <br />
      <br />
    </div>
  );
};

export default Activities;

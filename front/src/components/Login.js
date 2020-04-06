import React from "react";

const Login = () => {
  return (
    <div className="Login">
      <form action="/login" method="post">
        <div class="form-group">
          <div class="row">
            <label>Usuario:</label>
            <input type="text" class="form-control" name="username" />
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <label>Contraseña:</label>
            <input type="password" class="form-control" name="password" />
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-primary">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

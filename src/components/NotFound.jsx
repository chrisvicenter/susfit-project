import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {

  return (
    <div className="container comp">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">¡Lo sentimos!</span> Página no encontrada.
        </p>
        <p class="lead">La página que buscas no existe.</p>
        <Link className="btn btn-primary" to="/">
          Inicio
        </Link>
      </div>
    </div>
  );
};

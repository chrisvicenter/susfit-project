import React from "react";
import gym01 from "../images/gym01.jpg";
import gym02 from "../images/gym02.jpg";

export const Gimnasio = () => {
  
  return (
    <div className="container comp">
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4 text-black">
                  <div>
                    <h6 className="mb-4">Matriz Quito</h6>
                    <div className="d-flex align-items-center justify-content-between mb-3"></div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={gym01}
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle border border-dark border-3"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">
                          El gimnasio parece estar poco concurrido
                        </p>
                        <ul className="mb-0 list-unstyled d-flex flex-row">
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-rounded btn-sm"
                          data-mdb-ripple-color="dark"
                        >
                          Reporte de visitas
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-success btn-rounded btn-block btn-lg"
                  >
                    <i className="far fa-clock me-2"></i>Gestionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-md-9 col-lg-7 col-xl-5">
              <div className="card">
                <div className="card-body p-4 text-black">
                  <div>
                    <h6 className="mb-4">Guayaquil</h6>
                    <div className="d-flex align-items-center justify-content-between mb-3"></div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={gym02}
                        alt="Generic placeholder image"
                        className="img-fluid rounded-circle border border-dark border-3"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <p className="mb-0 me-2">
                          El gimnasio se encuentra en capacidad máxima
                        </p>
                        <ul className="mb-0 list-unstyled d-flex flex-row">
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                          <li>
                            <i className="fas fa-star fa-xs"></i>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-dark btn-rounded btn-sm"
                          data-mdb-ripple-color="dark"
                        >
                          Reporte de visitas
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-success btn-rounded btn-block btn-lg"
                  >
                    <i className="far fa-clock me-2"></i>Gestionar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

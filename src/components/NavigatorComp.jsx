import { Link } from "react-router-dom";

export const NavigatorComp = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className=" nav-link " to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item ">
              <Link className=" nav-link " to="gimnasio">
                Gimnasios
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="cliente">
                Clientes
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link " to="informacion">
                Reportar un error
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

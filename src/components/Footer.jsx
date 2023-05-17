import React from "react";

export const Footer = () => {
  return (
    <footer>
      {" "}
      <div classNameName="container">
        {" "}
        <div className="row d-flex align-items-center">
          <div className="col">Christian Vicente - 2023</div>
          <div className="col d-flex justify-content-end">
            <a href="/" className="footer-end-link">
              Home{" "}
            </a>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <a href="#" className="footer-end-link">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Dependencies
import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./navBar.scss";

const NavBar = (): JSX.Element => {
  return (
    <>
      <div className="container-fluid d-flex p-3">
        <div className="textStyle">
          <span>Navbar</span>
        </div>

        <div className="ms-auto textStyle">
          <span>Heroes Anteriores</span>
          <span className="m-3"> ¿Cómo funciona?</span>
          <span>Iniciar Sesión</span>
        </div>
      </div>
    </>
  );
};

export default NavBar;

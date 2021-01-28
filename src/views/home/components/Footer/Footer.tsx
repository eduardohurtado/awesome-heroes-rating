// Dependencies
import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./scss/footer.scss";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="container footer">
        <hr />
        <div className="row">
          <div className="col">
            <span>Términos y condiciones</span>
            <span>&nbsp;&nbsp;Política de tratamiento de datos</span>
            <span>&nbsp;&nbsp;Contactenos</span>
          </div>

          <div className="col-md-auto">
            <span>
              Siguenos{" "}
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 20, marginRight: 5, cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ fontSize: 20, cursor: "pointer" }}
              />
            </span>
          </div>
        </div>
      </div>

      <div style={{ height: 50 }}></div>
    </>
  );
};

export default Footer;

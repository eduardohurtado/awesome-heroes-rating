// Dependencies
import React, { useState } from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./scss/title.scss";

const Title = (): JSX.Element => {
  const [hideAlert, setHideAlert] = useState(false);

  return (
    <>
      {!hideAlert && (
        <div className="alert alert-secondary row" role="alert">
          <div className="col-md-auto">
            <h3>
              <b>Uso:</b>
            </h3>
          </div>

          <div className="col-md alertButton2">
            <p>
              Por favor selecciona un heroe y procede a votar en el panel
              superior
            </p>
          </div>

          <div className="col-md-auto alertButton">
            <button
              onClick={() => {
                setHideAlert(true);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      )}

      <h4>Super Heroes anteriores</h4>
    </>
  );
};

export default Title;

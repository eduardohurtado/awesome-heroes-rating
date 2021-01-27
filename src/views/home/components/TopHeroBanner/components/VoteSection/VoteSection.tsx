// Dependencies
import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./voteSection.scss";

const VoteSection = (): JSX.Element => {
  return (
    <div className="voteSection">
      <span className="opinionText">Dinos tu opinion sobre</span>

      <h3>Ironman?</h3>

      <p className="opinionText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et eum
        accusamus explicabo. Harum enim obcaecati natus alias quibusdam tempora.
      </p>

      <a href="#" style={{ fontSize: 12 }}>
        <FontAwesomeIcon icon={faWikipediaW} />
        Más información
      </a>

      <div className="container-fluid mt-2 d-flex justify-content-around">
        <button className="btn btn-success buttonVote ">
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ color: "#eeeeee", fontSize: 20 }}
          />
        </button>
        <button className="btn btn-danger buttonVote">
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{ color: "#eeeeee", fontSize: 20 }}
          />
        </button>
      </div>
    </div>
  );
};

export default VoteSection;
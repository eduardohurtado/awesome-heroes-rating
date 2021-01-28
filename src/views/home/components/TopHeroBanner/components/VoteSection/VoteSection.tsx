// Dependencies
import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./scss/voteSection.scss";

const VoteSection = (): JSX.Element => {
  return (
    <div className="voteSection">
      <div className="mainContent">
        <span className="opinionText">Dinos tu opinion sobre</span>

        <h3>Ironman?</h3>

        <p className="opinionText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis et
          eum accusamus explicabo. Harum enim obcaecati natus alias quibusdam
          tempora.
        </p>

        <a href="#" style={{ fontSize: 12 }}>
          <FontAwesomeIcon icon={faWikipediaW} />
          Más información
        </a>
      </div>

      <div className="toBottom">
        <div className="buttonVoteUp">
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ color: "#eeeeee", fontSize: 20 }}
          />
        </div>

        <div className="buttonVoteDown">
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{ color: "#eeeeee", fontSize: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default VoteSection;

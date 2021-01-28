// Dependencies
import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./voteCount.scss";

const VoteCount = (): JSX.Element => {
  return (
    <div className="voteCount">
      <div className="positiveVotes">
        <FontAwesomeIcon icon={faThumbsUp} />
        &nbsp;30%
      </div>

      <div className="negativeVotes">
        <FontAwesomeIcon icon={faThumbsDown} />
        &nbsp;70%
      </div>
    </div>
  );
};

export default VoteCount;

// Dependencies
import React, { useState, useEffect } from "react";

//Global state REDUX
import { connect } from "react-redux";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./voteCount.scss";

// Interfaces
interface IProps {
  state?: {
    heroeSelected: IHero | null;
    isSelectingHero: boolean;
  };
}
interface IReduxState {
  heroeSelected: IHero | null;
  isSelectingHero: boolean;
}
interface IHero {
  _id: string;
  name: string;
  description: string;
  votesPositive: number;
  votesNegative: number;
  heroPhotoURL: string;
  heroBannerURL: string;
  moreInfoURL: string;
}

const VoteCount = (props: IProps): JSX.Element => {
  const [votesPositive, setVotesPositive] = useState<number | null>(null);
  const [votesNegative, setVotesNegative] = useState<number | null>(null);

  useEffect(() => {
    if (props.state?.isSelectingHero && props.state.heroeSelected) {
      const votes = getRatingPercentages(
        props.state.heroeSelected.votesPositive,
        props.state.heroeSelected.votesNegative
      );

      setVotesPositive(votes.positive);
      setVotesNegative(votes.negative);
    }
  }, [props.state]);

  const getRatingPercentages = (
    positiveVotes: number,
    negativeVotes: number
  ) => {
    if (positiveVotes + negativeVotes !== 0) {
      const positivePercentage =
        (positiveVotes * 100) / (positiveVotes + negativeVotes);
      const negativePercentage =
        (negativeVotes * 100) / (positiveVotes + negativeVotes);

      return {
        positive: Math.round(positivePercentage),
        negative: Math.round(negativePercentage)
      };
    } else {
      return {
        positive: 50,
        negative: 50
      };
    }
  };

  return (
    <div className="voteCountToBottom">
      <div
        className="voteCountPositiveVotes"
        style={{ width: votesPositive ? `${votesPositive}%` : "50%" }}
      >
        <FontAwesomeIcon icon={faThumbsUp} />
        &nbsp;
        {votesPositive ? `${votesPositive}%` : "50%"}
      </div>

      <div
        className="voteCountNegativeVotes"
        style={{ width: votesNegative ? `${votesNegative}%` : "50%" }}
      >
        <FontAwesomeIcon icon={faThumbsDown} />
        &nbsp;
        {votesNegative ? `${votesNegative}%` : "50%"}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => {
  return {
    //Passing the current state of "store.ts" because
    state //mapDispatchToProps don't work without
  }; //define mapStateToProps.
};

export default connect(mapStateToProps, null)(VoteCount);

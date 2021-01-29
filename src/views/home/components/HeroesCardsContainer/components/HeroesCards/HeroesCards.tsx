// Dependencies
import React, { useState, useEffect, Dispatch } from "react";

//Global state REDUX
import { connect } from "react-redux";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./scss/heroesCards.scss";

// Interfaces
interface IProps {
  state: {
    heroesInfo: IHero[] | [];
    isLoading: boolean;
  };
  setHeroSelected(heroID: string): void;
}
interface IReduxState {
  heroesInfo: IHero[] | [];
  isLoading: boolean;
}
interface IHero {
  _id: string;
  name: string;
  description: string;
  votesPositive: number;
  votesNegative: number;
  heroPhotoURL: string;
  moreInfoURL: string;
}

const HeroesCards = (props: IProps): JSX.Element => {
  const [heroInfo, setHeroInfo] = useState<IHero[]>();

  useEffect(() => {
    if (props.state.heroesInfo.length > 0) {
      setHeroInfo(props.state.heroesInfo);
    }
  }, [props.state.heroesInfo]);

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

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const Card = heroInfo?.map((item, index) => {
    const ratingPercentages = getRatingPercentages(
      item.votesPositive,
      item.votesNegative
    );

    return (
      <div className="col mt-3 d-flex justify-content-center" key={index}>
        <div
          className="card heroeCard"
          style={{ backgroundImage: `url(${item.heroPhotoURL})` }}
          onClick={() => {
            props.setHeroSelected(item._id);
            topFunction();
          }}
        >
          <div className="cardToBottom">
            <div className="cardToBottomInfo">
              <h4>{item.name}</h4>

              <p>{item.description}</p>

              <a href={item.moreInfoURL} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faWikipediaW} />
                Más información
              </a>
            </div>

            <div
              className="cardPositiveVotes"
              style={{ width: `${ratingPercentages.positive}%` }}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;{ratingPercentages.positive}%
            </div>

            <div
              className="cardNegativeVotes"
              style={{ width: `${ratingPercentages.negative}%` }}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              &nbsp;{ratingPercentages.negative}%
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="row">
      {props.state.isLoading && (
        <div className="loadingCards">Cargando lista de Heroes...</div>
      )}

      {Card}
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => {
  return {
    //Passing the current state of "store.ts" because
    state //mapDispatchToProps don't work without
  }; //define mapStateToProps.
};

const mapDispatchToProps = (
  dispatch: Dispatch<{ type: string; heroID: string }>
) => ({
  setHeroSelected(heroID: string) {
    dispatch({
      type: "SET_HERO_SELECTED",
      heroID
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesCards);

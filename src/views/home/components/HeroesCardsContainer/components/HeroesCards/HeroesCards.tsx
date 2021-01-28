// Dependencies
import React, { useState, useEffect } from "react";

// GraphQL
import { gql, useQuery } from "@apollo/client";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// Styles
import "./scss/heroesCards.scss";

// Queries/Mutations/Subscriptions
const GET_HEROE = gql`
  query {
    heroes {
      name
      description
      votesPositive
      votesNegative
      heroPhotoURL
      moreInfoURL
    }
  }
`;

// Interfaces
interface IHeroes {
  heroes: IHero[];
}
interface IHero {
  name: string;
  description: string;
  votesPositive: number;
  votesNegative: number;
  heroPhotoURL: string;
  moreInfoURL: string;
}

const HeroesCards = (): JSX.Element => {
  const [heroInfo, setHeroInfo] = useState<IHero[]>();
  const [loading, setLoading] = useState(true);

  // GraphQL fetch data
  const { error, data } = useQuery<IHeroes>(GET_HEROE);

  useEffect(() => {
    if (data) {
      setLoading(false);

      setHeroInfo(data.heroes);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error("GET MongoDB Hero information ERROR:", error.message);
    }
  }, [error]);

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
        >
          <div className="cardToBottom">
            <div className="cardToBottomInfo">
              <h4>{item.name}</h4>

              <p>{item.description}</p>

              <a href={item.moreInfoURL} target="_blank" rel="noreferrer">
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
      {loading && (
        <div className="loadingCards">Cargando lista de Heroes...</div>
      )}

      {Card}
    </div>
  );
};

export default HeroesCards;

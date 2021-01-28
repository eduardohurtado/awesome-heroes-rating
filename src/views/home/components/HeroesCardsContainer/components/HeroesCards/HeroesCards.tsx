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

  // GraphQL fetch data
  const { error, data } = useQuery<IHeroes>(GET_HEROE);

  useEffect(() => {
    if (data) {
      console.log("Data from mongo db:", data);

      setHeroInfo(data.heroes);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error("GET MongoDB Hero information ERROR:", error.message);
    }
  }, [error]);

  const Card = heroInfo?.map((item, index) => {
    return (
      <div className="col-sm mt-3 d-flex justify-content-center" key={index}>
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
            <div className="cardPositiveVotes">
              <FontAwesomeIcon icon={faThumbsUp} />
              &nbsp;30%
            </div>

            <div className="cardNegativeVotes">
              <FontAwesomeIcon icon={faThumbsDown} />
              &nbsp;70%
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{Card}</div>;
};

export default HeroesCards;

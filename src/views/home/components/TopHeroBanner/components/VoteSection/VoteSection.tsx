// Dependencies
import React, { useState, useEffect, Dispatch } from "react";

//Global state REDUX
import { connect } from "react-redux";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import { faWikipediaW } from "@fortawesome/free-brands-svg-icons";

// Styles
import "./scss/voteSection.scss";

// Interfaces
interface IProps {
  state?: {
    heroeSelected: IHero | null;
    isSelectingHero: boolean;
  };
  evaluateHeroUpAsync(): void;
  evaluateHeroDownAsync(): void;
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

const VoteSection = (props: IProps): JSX.Element => {
  const [heroToVote, setHeroToVote] = useState<IHero>();
  const [voted, setVoted] = useState(false);
  const [votedPositive, setVotedPositive] = useState(true);

  useEffect(() => {
    if (props.state?.isSelectingHero && props.state.heroeSelected) {
      setHeroToVote(props.state.heroeSelected);
    }
  }, [props.state]);

  const confirmVoteUp = () => {
    if (props.state?.isSelectingHero) {
      const option = confirm(
        `¿Quieres votar positivamente a ${heroToVote?.name}?`
      );

      if (option) {
        props.evaluateHeroUpAsync();
      }

      setVoted(true);
      setVotedPositive(true);
    }
  };

  const confirmVoteDown = () => {
    if (props.state?.isSelectingHero) {
      const option = confirm(
        `¿Quieres votar negativamente a ${heroToVote?.name}?`
      );

      if (option) {
        props.evaluateHeroDownAsync();
      }

      setVoted(true);
      setVotedPositive(false);
    }
  };

  return (
    <div className="voteSection">
      <div className="mainContent">
        <span className="opinionText">Dinos tu opinion sobre</span>

        {heroToVote?.name ? <h3>{heroToVote.name}?</h3> : <h3>Un Heroe</h3>}

        {/* View when the user has no voted yet */}
        {!voted &&
          (heroToVote?.description ? (
            <div>
              <p className="opinionText">{heroToVote.description}</p>
              <a
                href={heroToVote.moreInfoURL}
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: 13 }}
              >
                <FontAwesomeIcon icon={faWikipediaW} />
                Más información
              </a>
            </div>
          ) : (
            <p className="opinionText">
              Por favor selecciona un heroe de la lista inferior para poder
              darnos tu feedback, muchas grácias :)
            </p>
          ))}

        {/* View when the user just voted */}
        {voted && (
          <>
            <div className="row" style={{ padding: 20 }}>
              {/* Voted positive */}
              {votedPositive && (
                <>
                  <div className="col-sm-auto votedStylePositive">
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      style={{
                        color: "#eeeeee",
                        fontSize: 20
                      }}
                    />
                  </div>
                </>
              )}

              {/* Voted negative */}
              {!votedPositive && (
                <>
                  <div className="col-sm-auto votedStyleNegative">
                    <FontAwesomeIcon
                      icon={faThumbsDown}
                      style={{
                        color: "#eeeeee",
                        fontSize: 20
                      }}
                    />
                  </div>
                </>
              )}

              <div className="col" style={{ fontSize: 20 }}>
                Tu voto ha sido registrado!
              </div>
            </div>
            <span>Para regresar por favor presiona el boton inferior</span>
          </>
        )}
      </div>

      <div className="toBottom">
        {voted && (
          <button
            className="goBackToVoteButton"
            onClick={() => {
              setVoted(false);
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            <FontAwesomeIcon icon={faChevronLeft} /> Regresar
          </button>
        )}

        {!voted && (
          <>
            <div
              className="buttonVoteUp"
              onClick={() => {
                confirmVoteUp();
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{
                  color: "#eeeeee",
                  fontSize: 20
                }}
              />
            </div>

            <div
              className="buttonVoteDown"
              onClick={() => {
                confirmVoteDown();
              }}
            >
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{
                  color: "#eeeeee",
                  fontSize: 20
                }}
              />
            </div>
          </>
        )}
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

const mapDispatchToProps = (dispatch: Dispatch<{ type: string }>) => ({
  evaluateHeroUpAsync() {
    dispatch({
      type: "EVALUATE_HERO_UP"
    });
  },
  evaluateHeroDownAsync() {
    dispatch({
      type: "EVALUATE_HERO_DOWN"
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteSection);

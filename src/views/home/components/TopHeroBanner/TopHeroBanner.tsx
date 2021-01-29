// Dependencies
import React, { useState, useEffect } from "react";

//Global state REDUX
import { connect } from "react-redux";

// Components
import NavBar from "./components/NavBar/NavBar";
import VoteSection from "./components/VoteSection/VoteSection";
import VoteCount from "./components/VoteCount/VoteCount";

// Styles
import "./scss/topHeroBanner.scss";

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
  heroBannerURL: string;
}

const TopHeroBanner = (props: IProps): JSX.Element => {
  const [heroSelected, setHeroSelected] = useState<IHero>();

  const defaultURL =
    "https://i.pinimg.com/originals/45/6f/9e/456f9e13b59ad82f13fad61940c11385.jpg";

  useEffect(() => {
    if (props.state?.heroeSelected) {
      setHeroSelected(props.state.heroeSelected);
    }
  }, [props.state?.heroeSelected]);

  return (
    <div
      className="heroBannerImage"
      style={{
        backgroundImage: props.state?.isSelectingHero
          ? `url("${heroSelected?.heroBannerURL}")`
          : `url(${defaultURL})`
      }}
    >
      <div className="container">
        <NavBar />

        <VoteSection />
      </div>

      <VoteCount />
    </div>
  );
};

const mapStateToProps = (state: IReduxState) => {
  return {
    //Passing the current state of "store.ts" because
    state //mapDispatchToProps don't work without
  }; //define mapStateToProps.
};

export default connect(mapStateToProps, null)(TopHeroBanner);

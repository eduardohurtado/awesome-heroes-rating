// Dependencies
import React from "react";

// Components
import NavBar from "./components/NavBar/NavBar";
import VoteSection from "./components/VoteSection/VoteSection";
import VoteCount from "./components/VoteCount/VoteCount";

// Styles
import "./scss/topHeroBanner.scss";

const TopHeroBanner = (): JSX.Element => {
  return (
    <div className="heroBannerImage">
      <div className="container">
        <NavBar />

        <VoteSection />
      </div>

      <VoteCount />
    </div>
  );
};

export default TopHeroBanner;

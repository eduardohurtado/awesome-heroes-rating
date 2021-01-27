// Dependencies
import React from "react";

// Components
import NavBar from "./components/NavBar/NavBar";
import VoteSection from "./components/VoteSection/VoteSection";

// Styles
import "./topHeroBanner.scss";

const TopHeroBanner = (): JSX.Element => {
  return (
    <div className="heroBannerImage">
      <div className="container">
        <NavBar />

        <VoteSection />
      </div>
    </div>
  );
};

export default TopHeroBanner;

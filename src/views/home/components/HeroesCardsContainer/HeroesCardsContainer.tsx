// Dependencies
import React from "react";

// Components
import Title from "./components/Title/Title";
import HeroesCards from "./components/HeroesCards/HeroesCards";

const HeroesCardsContainer = (): JSX.Element => {
  return (
    <div className="container mt-4">
      <Title />

      <HeroesCards />
    </div>
  );
};

export default HeroesCardsContainer;

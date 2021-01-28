import React from "react";

// Components
import TopHeroBanner from "./components/TopHeroBanner/TopHeroBanner";
import HeroesCardsContainer from "./components/HeroesCardsContainer/HeroesCardsContainer";
import Footer from "./components/Footer/Footer";

const HomeLayout = (): JSX.Element => {
  return (
    <>
      <TopHeroBanner />

      <HeroesCardsContainer />

      <Footer />
    </>
  );
};

export default HomeLayout;

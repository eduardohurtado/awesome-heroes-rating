// Dependencies
import React, { useEffect, Dispatch } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

//Global state REDUX
import { connect } from "react-redux";

// GraphQL
import { gql, useQuery } from "@apollo/client";

// Global style
import "./sass/app.scss";
import "./sass/normalize.scss";

// Notification component
// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

// Views
import HomeLayout from "./views/home/HomeLayout";

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
interface IProps {
  state: {
    heroesInfo: IHero[] | [];
  };
  setHeroesInfoAsync(payload: IHero[]): void;
}
interface IReduxState {
  heroesInfo: IHero[] | [];
}
interface IHeroes {
  heroes: IHero[];
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

const App = (props: IProps): JSX.Element => {
  // GraphQL fetch data
  const { error, data } = useQuery<IHeroes>(GET_HEROE);

  useEffect(() => {
    if (data) {
      // Set data on Redux
      props.setHeroesInfoAsync(data.heroes);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      console.error("GET MongoDB Hero information ERROR:", error.message);
    }
  }, [error]);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <HomeLayout />;
        }}
      ></Route>
    </Router>
  );
};

const mapStateToProps = (state: IReduxState) => {
  return {
    //Passing the current state of "store.ts" because
    state //mapDispatchToProps don't work without
  }; //define mapStateToProps.
};

const mapDispatchToProps = (
  dispatch: Dispatch<{ type: string; payload: IHero[] }>
) => ({
  setHeroesInfoAsync(payload: IHero[]) {
    dispatch({
      type: "SAVE_HEROES_DATA",
      payload
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

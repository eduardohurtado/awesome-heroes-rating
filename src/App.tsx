// Dependencies
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Global style
import "./sass/app.scss";
import "./sass/normalize.scss";

// Notification component
// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

// Views
import HomeLayout from "./views/home/components/HomeLayout/HomeLayout";

const App: React.FC = () => {
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

export default App;

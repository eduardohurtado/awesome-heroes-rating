import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Global style
import "./sass/app.scss";
import "./sass/normalize.scss";

// Notification component
// import ReactNotification from "react-notifications-component";
// import "react-notifications-component/dist/theme.css";

const LOL = () => {
  return <div>LOL</div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return <LOL />;
        }}
      ></Route>
    </Router>
  );
};

export default App;

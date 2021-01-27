import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// GraphQL
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { SubscriptionClient } from "subscriptions-transport-ws";

// Global state Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/store";

// Apollo GraphQL Client
const GRAPHQL_SUBSCRIPTION_ENDPOINT = "ws://localhost:8080/subscriptions";
const clientS = new SubscriptionClient(GRAPHQL_SUBSCRIPTION_ENDPOINT, {
  reconnect: true,
});
const link = new WebSocketLink(clientS);
const client = new ApolloClient({
  link,
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

// Create store
const store = createStore(reducer);

// Font selector
import "./fonts/fontSelector.scss";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

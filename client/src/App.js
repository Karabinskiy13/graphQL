import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import MoviesList from "./components/MoviesList";

const client = new ApolloClient({
  uri: "http://localhost:3010/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <MoviesList />
      </div>
    </ApolloProvider>
  );
}

export default App;

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:3010/graphql",
  cache: new InMemoryCache(),
});

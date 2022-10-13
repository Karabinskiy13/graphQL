import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Grid, Container } from "@mui/material";

import { client } from "./utils";
import DirectorList from "./components/DirectorsList";

const App = () => (
  <ApolloProvider client={client}>
    <Container maxWidth="xl">
      <Grid container spacing={2} justifyContent="center">
        <DirectorList />
      </Grid>
    </Container>
  </ApolloProvider>
);

export default App;

import React, { useState } from "react";
import { Button } from "@mui/material";
import { Grid, Typography } from "@mui/material";

import MoviesList from "./MoviesList";
import { Images } from "../styled/MovieList";

const Director = ({ director }) => {
  const [showMovies, setShowMovies] = useState(false);
  return (
    <Grid item md={4} lg={10}>
      <Typography style={{ marginTop: "30px" }} variant="h5">
        {director.name}
      </Typography>
      <Typography>Age:{director.age}</Typography>
      <Images src={director.image} alt="director" />
      <Button
        style={{ marginLeft: "40px" }}
        variant="outlined"
        onClick={() => setShowMovies(!showMovies)}
      >
        Show films
      </Button>
      {showMovies && <MoviesList key={director.id} movies={director.movies} />}
    </Grid>
  );
};

export default Director;

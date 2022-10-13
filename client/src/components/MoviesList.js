import React from "react";
import { Content, Images } from "../styled/MovieList";
import { Typography } from "@mui/material";

const MoviesList = ({ movies }) =>
  movies.map(({ name, image, genre }) => (
    <Content key={name}>
      <Typography variant="h6">{name}</Typography>
      <Images src={image} alt="poster" />
      <Typography variant="h6" style={{ marginTop: "15px" }}>
        Genre:{genre}
      </Typography>
    </Content>
  ));

export default MoviesList;

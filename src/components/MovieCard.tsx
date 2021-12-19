import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Movie } from "../store/playlist/types";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const classes = useStyles();

  return (
    <Box className={classes.movieCard}>
      <img src={movie.Poster} className={classes.image} alt={movie.Title} />
      <Typography>
        {movie.Title} - {movie.Year}
      </Typography>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    movieCard: {
      margin: "1.5rem 2.5rem",
      maxWidth: "10rem",
    },
    image: {
      width: "9.375rem",
    },
  })
);

export default MovieCard;

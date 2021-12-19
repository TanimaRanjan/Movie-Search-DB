import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../store/playlist/types";
import MovieCard from "./MovieCard";
import { Box, Button } from "@material-ui/core";
import { getMovies } from "../store/movies/selectors";
import React from "react";

const Movies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);

  const addToPlaylist = (movie: Movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  return (
    <>
      {movies &&
        movies.map((movie: Movie, index: number) => (
          <Box display={"flex"} flexDirection={"column"}>
            <MovieCard movie={movie} key={movie.imdbID + index} />
            <Button
              className={classes.button}
              onClick={() => addToPlaylist(movie)}
            >
              Add to Playlist
            </Button>
          </Box>
        ))}
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: "100%",
      textAlign: "center",
      width: "100%",
      backgroundColor: "#255c99",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      margin: "auto",
    },
    button: {
      backgroundColor: "lightgrey",
      width: "10rem",
      alignSelf: "center",
    },
    header: {
      display: "flex",
      padding: "2rem 0",
      justifyContent: "space-evenly",
      alignItems: "baseline",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "2rem",
    },
    movieList: {
      display: "flex",
      maxWidth: "63.5rem",
      flexWrap: "wrap",
      margin: "auto",
    },
  })
);

export default Movies;

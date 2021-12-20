import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Movie } from "../store/playlist/types";
import MovieCard from "./MovieCard";
import { Box } from "@material-ui/core";
import { getMovies } from "../store/movies/selectors";
import React from "react";

const Movies = () => {
  const classes = useStyles()
  const movies = useSelector(getMovies);


  return (
    <>
      {movies &&
        movies.map((movie: Movie, index: number) => (
          <Box display={"flex"} flexDirection={"column"} key={movie.imdbID+index} >
            <MovieCard movie={movie} />

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

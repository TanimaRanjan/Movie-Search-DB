import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Movie } from "../store/playlist/types";
import MovieCard from "./MovieCard";
import { Box, Button } from "@material-ui/core";
import { getPlaylist } from "../store/playlist/selectors";
import Footer from "./Footer";

const Playlist = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const playlist = useSelector(getPlaylist);

  const deleteFromPlaylist = (movie: Movie) => {
    dispatch({ type: "DELETE_MOVIE", payload: movie.imdbID });
  };

  const confirmPlaylist = () => {
    dispatch({ type: "CONFIRM_PLAYLIST" });
  };

  return (
    <Box className={classes.container}>
        <header className={classes.header}>
            <h1>Your movie playlist</h1>
            <Link className={classes.link} to="/">
                Home
            </Link>
        </header>
      <Box className={classes.playlist}>
        {playlist && playlist.length > 0 ? (
          playlist.map((movie: Movie, index: number) => (
            <Box display={"flex"} flexDirection={"column"}>
              <MovieCard movie={movie} key={movie.imdbID + index} />
              <Button
                className={classes.button}
                onClick={() => deleteFromPlaylist(movie)}
              >
                Delete
              </Button>
            </Box>
          ))
        ) : (
          <Box>
            <h2>You have no items in your playlist</h2>
          </Box>
        )}
      </Box>
      {playlist && playlist.length > 0 && (
        <Button className={classes.button} onClick={confirmPlaylist}>
          Confirm Playlist
        </Button>
      )}
      <Footer />
    </Box>
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
    playlist: {
      display: "flex",
      maxWidth: "63.5rem",
      flexWrap: "wrap",
      margin: "auto",
    },
    button: {
      backgroundColor: "lightgrey",
      width: "10rem",
      alignSelf: "center",
    },
  })
);

export default Playlist;

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
      <Box className={classes.innerContainer}>
        <header className={classes.header}>
            <h1>Your movie playlist</h1>
            <Link className={classes.link} to="/">
                Home
            </Link>
        </header>
      <Box className={classes.playlist}>
        {playlist && playlist.length > 0 ? (
          playlist.map((movie: Movie, index: number) => (
            <Box display={"flex"} flexDirection={"column"} key={movie.imdbID + index}>
              <MovieCard movie={movie}  />
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
        <Button className={classes.confirmButton} onClick={confirmPlaylist}>
          Confirm Playlist
        </Button>
      )}
      
      </Box>
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
      color: 'white',
      display: "flex",
      flexDirection: "column",
      padding: "0",
      margin: "auto",
    },
    innerContainer: {
      color: 'white',
      display: "flex",
      flexDirection: "column",
      padding: "0",
      margin: "auto",
      width: "63.5rem",
    },
    header: {
      width: '63.5rem',
      margin: 'auto',
      display: "flex",
      padding: "2rem 0",
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    link: {
      color: "white",
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
      marginTop: '2rem',
      backgroundColor: "lightgrey",
      width: "10rem",
      alignSelf: "flex-start",
    },
    confirmButton: {
        margin: '2rem 0',
        backgroundColor: "lightgrey",
        width: "10rem",
        alignSelf: "center",
    }
  })
);

export default Playlist;

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
  const {playlist, message} = useSelector(getPlaylist);

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
            </Box>
          ))
        ) : (
          <Box>
            <h2>{message}</h2>
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
      paddingLeft: "2rem",
      margin: "auto",
      maxWidth: "63.5rem",
      '@media (max-width: 768px)': {
        width: "100%",
      },
    },
    header: {
      maxWidth:'100%',
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

import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { getPlaylistCount } from "../store/playlist/selectors";

const Header = () => {
  const classes = useStyles();
  const playlistCount = useSelector(getPlaylistCount);

  return (
    <header className={classes.header}>
      <h1>Let's find some movies</h1>
      <Link className={classes.link} to="/playlist">
        Playlist ({playlistCount})
      </Link>
    </header>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
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
    },
  })
);

export default Header;

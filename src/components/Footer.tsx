import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <h1>My favorite color is blue</h1>
    </footer>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      backgroundColor: "blue",
      padding: "2rem 0",
    },
  })
);

export default Footer;

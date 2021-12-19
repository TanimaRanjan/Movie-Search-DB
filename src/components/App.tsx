import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import { Box, Container } from "@material-ui/core";
import Movies from "./Movies";
import Header from "./Header";

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  return (
    <Container disableGutters className={classes.container}>
      <Header />
      <SearchBar setErrorMessage={setErrorMessage} setLoading={setLoading} />
      <Box className={classes.movieList}>
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <Movies />
        )}
      </Box>
    </Container>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      maxWidth: "100%",
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "#255c99",
      display: "flex",
      flexDirection: "column",
      padding: "0",
      margin: "auto",
    },
    movieList: {
      display: "flex",
      maxWidth: "63.5rem",
      flexWrap: "wrap",
      margin: "auto",
    },
  })
);

export default App;

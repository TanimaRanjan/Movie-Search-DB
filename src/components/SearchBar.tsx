import { useState } from "react";
import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import InputBase from "@material-ui/core/InputBase";

interface Props {
  setErrorMessage: (text: string | null) => void;
  setLoading: (status: boolean) => void;
}

const SearchBar: React.FC<Props> = ({ setErrorMessage, setLoading }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e: any) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const handleUpdateSearchQuery = (e: any) => {
    e.preventDefault();
    setSearchValue(searchValue);
    search(searchValue);
    resetInputField();
  };

  const search = (searchValue: string) => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({ type: "ADD_MOVIES", payload: jsonResponse.Search });
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  // Search End

  return (
    <Box className={classes.searchContainer}>
      <Box className={classes.form}>
        <form className="search">
          <Box display={"flex"}>
            <InputBase
              autoFocus
              type="search"
              className={classes.searchField}
              value={searchValue}
              onChange={handleSearchInputChanges}
            />
            <input
              onClick={handleUpdateSearchQuery}
              type="submit"
              value="SEARCH"
              className={classes.searchButton}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      backgroundColor: "white",
      maxWidth:'90%',
      width: "50rem",
      '@media (max-width: 768px)': {
        width: "100%",
      },
    },
    searchContainer: {
      maxWidth:'90%',
      width: '63.5rem',
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0",
      margin: "0 auto 2rem 0",
      backgroundColor: "#255c99",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    searchField: {
      backgroundColor: "white",
      marginLeft: "1rem",
      flex: 1,
    },
    searchButton: {
      backgroundColor: "lightgrey",
      border: "none",
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      padding: "1em 3.7em",
    },
  })
);

export default SearchBar;

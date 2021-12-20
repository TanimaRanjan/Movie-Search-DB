import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Movie } from "../store/playlist/types";
import { useSelector , useDispatch} from "react-redux";
import { getMovieByID } from "../store/playlist/selectors";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movieInPlaylist = useSelector(state =>
    getMovieByID(state, movie.imdbID)
  )

  const addToPlaylist = (movie: Movie) => {
    dispatch({ type: "ADD_MOVIE", payload: movie });
  };

  const deleteFromPlaylist = (movie: Movie) => {
    dispatch({ type: "DELETE_MOVIE", payload: movie.imdbID });
  };

  return (
    <Box className={classes.movieCard}>
      <img src={movie.Poster} className={classes.image} alt={movie.Title} />
      <Typography>
        {movie.Title} - {movie.Year}
      </Typography>
      {movieInPlaylist ? 
       <Button
              className={classes.button}
              onClick={() => deleteFromPlaylist(movie)}
            >
              Delete from Playlist
            </Button>:
             <Button
              className={classes.button}
              onClick={() => addToPlaylist(movie)}
            >
              Add to Playlist
            </Button> 
            }
     
    </Box>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    movieCard: {
      margin: "2.5rem 2.5rem 1.5rem 0",
      maxWidth: "10rem",
    },
    image: {
      width: "9.375rem",
    },
    button: {
      backgroundColor: "lightgrey",
      width: "10rem",
      alignSelf: "flex-start",
    },
  })
);

export default MovieCard;

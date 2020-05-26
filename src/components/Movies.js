import React from "react";
import { MovieContainer, Movie } from '../styles/movies.styles';


// Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
// Title: "Iron Man"
// Type: "movie"
// Year: "2008"
// imdbID: "tt0371746"
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movies = ({movies}) => {
  let parsed = movies;
  if (!Array.isArray(movies)) {
    parsed = [movies];
  }
  if (parsed.length === 0) {
    return <div>..loading</div>
  } else {
    return (
      <MovieContainer>
        { parsed.map(movie => {
          const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
          return (
            <Movie>
              <h2>{movie.Title}</h2>
              <div className="img__container" >
                <img
                  width="200"
                  alt={`The movie titled: ${movie.Title}`}
                  src={poster}
                />
              </div>
              <p>({movie.Year})</p>
              </Movie>
            )
          })
        }
        </MovieContainer>
    )}
};

export default Movies;
import React, { useState } from "react";
import axios from 'axios';
import { MovieContainer, Movie } from '../styles/movies.styles';
import Modal from './Modal';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movies = ({movies}) => {
  const [showModal, setModal] = useState(false);
  const [movieDetails, setMovieDetails] = useState({});
  
  const shouldRenderModal = () => {
    console.log(Object.entries(movieDetails))
    if (showModal && Object.entries(movieDetails).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  const getMovieDetails = (q) => {
    console.log("q", q);
    axios.get(`https://www.omdbapi.com/?t=${q}&apikey=4a3b711b`)
    .then(success => {
      console.log("movie detial success", success.data)
      setMovieDetails(success.data);
      console.log(Object.entries(movieDetails).length)
      document.body.classList.add('modal-open');
      setModal(true);
      })
      .catch(error => {
        console.error("error", error);
      })
  }

  let parsed = movies;

  if (!Array.isArray(movies)) {
    parsed = [movies];
  }

  if (parsed.length === 0) {
    return <div>..loading</div>
  } else {
    return (
      <>
      <MovieContainer>
        { parsed.map(movie => {
          const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
          return (
            <Movie>
              <h2>{movie.Title}</h2>
              <div className="img__container" onClick={() => getMovieDetails(movie.Title)}>
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
        {
          shouldRenderModal()? <Modal {...movieDetails} setModal={setModal} /> : null
        }
        </>
    )}
};

export default Movies;
import React from 'react';
import { ModalContainer, ModalContent } from '../styles/modal.styles';
/*
Actors: "Henry Cavill, Amy Adams, Michael Shannon, Diane Lane"
Awards: "7 wins & 46 nominations."
BoxOffice: "N/A"
Country: "USA, UK"
DVD: "N/A"
Director: "Zack Snyder"
Genre: "Action, Adventure, Sci-Fi"
Language: "English"
Metascore: "55"
Plot: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth."
Poster: "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
Production: "N/A"
Rated: "PG-13"
Ratings: (3) [{…}, {…}, {…}]
Released: "14 Jun 2013"
Response: "True"
Runtime: "143 min"
Title: "Man of Steel"
Type: "movie"
Website: "N/A"
Writer: "David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)"
Year: "2013"
imdbID: "tt0770828"
imdbRating: "7.0"
imdbVotes: "671,513"
*/
const Modal = ({Title, Year, Genre, Director, Awards, Actors, Plot, Poster, Runtime, setModal}) => {
  const handleClose = () => {
    document.body.classList.remove('modal-open');
    setModal(false);
  }

  return (
    <ModalContainer className="modal__container">
      <ModalContent className="modal__content">
        <div className="modal__content--left">
          <img
            alt={`The movie titled: ${Title}`}
            src={Poster}
          />
        </div>
        <div className="modal__content--right">
          <button onClick={handleClose}>&times;</button>
          <h2>{Title} ({Year})</h2>
          <h3>Director: {Director} Genre: {Genre} </h3>
          <div className="modal__container--details">
            <p>Summary: <br/> {Plot}</p>
            <div className="modal__container--closing-notes">
              <p>Actors: {Actors}</p>
              <p>Awards: {Awards}</p>
            </div>
          </div>
        </div>
      </ModalContent>
      
    </ModalContainer>
  )
};

export default Modal;
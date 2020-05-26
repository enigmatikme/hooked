import styled from 'styled-components';

const MovieContainer = styled.div`
  border: 2px solid purple;
  display: flex;
  flex-wrap: wrap;
`;

const Movie = styled.div`
  margin: 1rem;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    &:hover {
      border: 3px solid red;
    }
  }
`;


export { MovieContainer, Movie };
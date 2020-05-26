import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Movie = styled.div`
  margin: 3rem;
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    box-shadow: 0 1.5rem 4rem rgba(0,0,0,0.17);
    transition: all .3s;

    &:hover {
      transform: translateY(-.6rem);
    }

    &:focus, &:active {
      transform: translateY(.1rem);
    }
  }
`;


export { MovieContainer, Movie };
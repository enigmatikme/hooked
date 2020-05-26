import styled, { createGlobalStyle } from 'styled-components';

//1rem = 10px 10px/16px = 62.5%
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    &.modal-open {
      overflow: hidden;
    }
  }
`;

const HeaderContainer = styled.header`
  text-transform: uppercase;
  font-size: 5rem;
  background-color: black;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
`;

export { GlobalStyle, HeaderContainer, };
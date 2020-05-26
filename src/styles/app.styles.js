import styled, { createGlobalStyle } from 'styled-components';

//1rem = 10px 10px/16px = 62.5%
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
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

const Header = styled.header`
  text-transform: uppercase;
  border: 2px solid blue; 
  display: block;
  font-size: 1rem;
`;


export { GlobalStyle, HeaderContainer, Header };
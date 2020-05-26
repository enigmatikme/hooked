import React from 'react';
// import { Header } from '../styles/app.styles';
import { HeaderContainer } from '../styles/app.styles';


const Header = (props) => {
  return (
    <HeaderContainer>{props.text}</HeaderContainer>
  )
}


export default Header;
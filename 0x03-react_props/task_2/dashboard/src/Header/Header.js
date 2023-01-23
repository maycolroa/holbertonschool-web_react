import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

function Header() {
  return (
    <>
      <img className="imagen-holberton" src={require("../assets/holberton_logo.jpg")} alt="logo holberton" />
    </>
  );
}

export default Header;

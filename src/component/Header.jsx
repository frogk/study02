import React from 'react';
import {Link} from 'react-router-dom';
import Nav from './Nav'
import './../css/Header.css'

const Header = ({title}) => {
  return (
    <div id='header'>
      <div className='header-box'>
        <h1><Link to='/' />{title}</h1>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
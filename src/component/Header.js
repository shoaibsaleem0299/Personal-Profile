import React from 'react'
import '../appAndHeader.css';

function Header() {
  return (
<header>
    <div id="logo">Shoaib Saleem</div>
    <div className='headerItem'></div>
    <div className='headerItem'></div>
    <div id="menu">
      <a href="#about">About</a>
      <a href="#service">Service</a>
      <a href="#projects">Projects</a>
    </div>
  </header>
  )
}

export default Header
import React from 'react'
import '../styleSheet.css';

function Header() {
  return (
    <div className='custom-header row'>
      <div className='col-xl-6 col-lg-6 col-sm-12 title'><h2>Shoaib Saleem</h2></div>
      <div className='links-container col-xl-6 col-lg-'>
        <a className='links' href='#about'>About</a>
        <a className='links' href='#work'>Service</a>
        <a className='links' href='#projects'>Projects</a>
      </div>
    </div>
  )
}

export default Header
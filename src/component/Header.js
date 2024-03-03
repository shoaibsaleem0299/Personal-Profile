import React, { useState, useEffect } from 'react';

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollingDown = prevScrollPos < currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(!scrollingDown || currentScrollPos < 10); // Adjust the threshold as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`navbar bg-body-tertiary Header ${visible ? 'visible' : 'invisible'}`}
    >
      <div className="container-fluid px-4">
        <span className="navbar-brand mb-0 h1">Shoaib Saleem</span>
        <div>
          <span className="navbar-brand mb-0">
            <a className='links px-2' href='#'>About</a>
          </span>
          <span className="navbar-brand mb-0">
            <a className='links px-2' href='#'>Work</a>
          </span>
          <span className="navbar-brand mb-0">
            <a className='links px-2' href='#'>Projects</a>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;

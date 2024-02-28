import React from 'react';
import './styleSheet.css';

function InnerLeftContainer() {
  return (
    <div className="innerLeftContainer">
      <img src={require('./images/profile.png')} />
    </div>
  );
}

function InnerRightContainer() {
  return (
    <div className="innerRightContainer">
      <h1>Hi, I'm Shoaib Saleem,</h1>
      <h1>A full stack developer</h1>
      <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
    </div>
  );
}

function Container() {
  return (
    <div className="container">
      <InnerLeftContainer />
      <InnerRightContainer />
    </div>
  );
}

export default Container;
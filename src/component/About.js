import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../aboutStyle.css';

function InnerLeftContainer() {
  return (
    <div className="innerLeftContainer">
      <img src={require('../images/profile.png')} alt="Profile" />
    </div>
  );
}

function InnerRightContainer() {
  return (
    <div data-aos="fade-right" className="innerRightContainer">
      <h1>Hi, I'm Shoaib Saleem,</h1>
      <h1>A full stack developer</h1>
      <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
    </div>
  );
}

function About() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []); // Run only once after component mount

  return (
    <div id='about' className="about-container">
      <InnerLeftContainer />
      <InnerRightContainer />
    </div>
  );
}

export default About;

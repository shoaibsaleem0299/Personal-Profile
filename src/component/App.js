import React from 'react';
import '../appAndHeader.css';
import { FaGithubAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { TypeAnimation } from 'react-type-animation';




function App() {

  return (
    <div class="startSection ">
      <h1>
        <TypeAnimation
          sequence={[
            'Shoaib, Software Engineer.',
            1000,
            'Shoaib, Software Developer.',
            1000,
            'Shoaib, Web Developer.',
            1000,
            'Shoaib, Mobile App Developer.',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h1>
      <ul className='socialLinks'>
        <li><a href="https://github.com/shoaibsaleem0299/"><FaGithubAlt /></a></li>
        <li><a href="https://linkedin.com/in/codewizshoaib/"><CiLinkedin /></a></li>
        <li><a href="mailto:your.shoaib0299@gmail.com"><BiLogoGmail  /></a></li>
      </ul>
    </div>

  );
}

export default App;

import React from 'react';
import '../styleSheet.css';
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
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
        <li><a href="https://github.com/shoaibsaleem0299/"><LuGithub style={{ fontSize: '1.8em' }} /></a></li>
        <li><a href="https://linkedin.com/in/codewizshoaib/"><FaLinkedinIn style={{ fontSize: '1.8em' }} /></a></li>
        <li><a href="mailto:your.shoaib0299@gmail.com"><MdOutlineMailOutline style={{ fontSize: '1.8em' }} /></a></li>
      </ul>
    </div>

  );
}

export default App;

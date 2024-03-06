import React from 'react';
import '../styleSheet.css';
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Typewriter from "./Typewriter";




function App() {

  const { text } = useTyp

  return (

    <div class="startSection">
      <h1 id='topHeading'>Shoaib, <Typewriter text="software engineer" delay={100} />
        {/* <span>
          {text}
        </span> */}
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

import './styleSheet.css';
import { LuGithub } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";


function App() {
  return (

    <div class="startSection">

      <h1 data-aos="fade-right" id='topHeading'>Software Engineer</h1>
      <ul className='socialLinks'>
        <li><a href="#"><LuGithub /></a></li>
        <li><a href="#"><FaLinkedinIn /></a></li>
        <li><a href="#"><MdOutlineMailOutline /></a></li>
      </ul>

    </div>

  );
}

export default App;

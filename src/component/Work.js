import React from 'react';
import '../styleSheet.css';
import { BsCodeSlash } from "react-icons/bs";
import { TbBrandStripe } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";
import { BsFileRuled } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiPhotoCamera } from "react-icons/gi";






function TopContainer() {
    return (
        <div className="topContainer">
            <div data-aos="fade-right" className='items'>
                <BsCodeSlash style={{ fontSize: '3em', color: '#FFD700', fontWeight: 'bold' }} />
                <h1>Web Development</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
            <div data-aos="flip-up" className='items'>
                <TbBrandStripe style={{ fontSize: '2.5em', color: '#FFD700' }} />
                <h1>Brand Identity</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
            <div data-aos="fade-left" className='items'>
                <FaMagic style={{ fontSize: '2.5em', color: '#FFD700' }} />
                <h1>Web Design</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
        </div>
    );
}

function BottomContainer() {
    return (
        <div className="bottomContainer ">
            <div data-aos="fade-right" className='items'>
                <BsFileRuled style={{ fontSize: '2.5em', color: '#FFD700' }} />
                <h1>Mobile App</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
            <div data-aos="flip-up" className='items'>
                <IoAnalyticsOutline style={{ fontSize: '2.5em', color: '#FFD700' }} />
                <h1>Analytics</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
            <div data-aos="fade-left" className='items'>
                <GiPhotoCamera style={{ fontSize: '2.5em', color: '#FFD700' }} />
                <h1>Photography</h1>
                <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications. With expertise in HTML, CSS, JavaScript, and frameworks like React and Node.js, I create innovative solutions that marry design with functionality. Let's work together to bring your digital ideas to life!</p>
            </div>
        </div>
    );
}

function Work() {
    return (
        <div id='work' className="iDoContainer">
            <div><h1 className='iDoHeading'>what i Do</h1></div>
            <TopContainer />
            <BottomContainer />
        </div>
    );
}

export default Work;

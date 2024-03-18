import React from 'react';
import '../workStyle.css';
import { BsCodeSlash } from "react-icons/bs";
import { TbBrandStripe } from "react-icons/tb";
import { FaMagic } from "react-icons/fa";
import { BsFileRuled } from "react-icons/bs";
import { IoAnalyticsOutline } from "react-icons/io5";
import { GiPhotoCamera } from "react-icons/gi";






function HeadingContainer() {
    return (
        <div className='Heading'>
            <h1>What I Do</h1>
        </div>
    );
}


function TopContainer() {
    return (


        <div className="topContainer">

            <div data-aos="fade-right" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <BsCodeSlash style={{ fontSize: '3em', color: '#FFD700', fontWeight: 'bold' }} />
                    <h3>Web Development</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

            <div data-aos="flip-up" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <TbBrandStripe style={{ fontSize: '2.5em', color: '#FFD700' }} />
                    <h3>Brand Identity</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

            <div data-aos="fade-left" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <FaMagic style={{ fontSize: '2.5em', color: '#FFD700' }} />
                    <h3>Web Design</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

        </div>
    );
}

function BottomContainer() {
    return (
        <div className="bottomContainer ">

            <div data-aos="fade-right" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <BsFileRuled style={{ fontSize: '2.5em', color: '#FFD700' }} />
                    <h3>Mobile App</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

            <div data-aos="flip-up" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <IoAnalyticsOutline style={{ fontSize: '2.5em', color: '#FFD700' }} />
                    <h3>Analytics</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

            <div data-aos="fade-left" class="card" style={{ width: "22rem" }}>
                <div class="card-body">
                    <GiPhotoCamera style={{ fontSize: '2.5em', color: '#FFD700' }} />
                    <h3>Photography</h3>
                    <p>I'm a dedicated full-stack web developer, skilled in crafting dynamic and responsive web applications.</p>
                </div>
            </div>

        </div>
    );
}

function Work() {
    return (
        <div id='work' className="work-container">
            <HeadingContainer />
            <TopContainer />
            <BottomContainer />
        </div>
    );
}

export default Work;

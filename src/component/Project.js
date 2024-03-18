import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../projectStyle.css'


function Project() {

    const [project, setProject] = useState([]);

    useEffect(() => {

    },
        []);



    return (
        <div class="card">
            <img src={require('../images/card.jpg')} alt="Project Image" class="project-image" />
            <div class="card-content">
                <h2 class="project-title">Project Title</h2>
                <p class="project-description">Project Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec eros at urna varius ullamcorper.</p>
                <div class="links">
                    <a href="github_link" class="github-link">GitHub</a>
                    <a href="live_preview_link" class="live-preview-link">Live Preview</a>
                </div>
            </div>
        </div>
    )
}

export default Project
import React, { useEffect, useState } from 'react';
import projectsData from '../data.json'; // Importing project data from data.json

function Project() {
    // State to hold project data
    const [projects, setProjects] = useState([]);

    // Fetch project data from data.json when component mounts
    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <>
            <h1>Projects</h1>
            <div className='projectContainer'>
                {projects.map(project => (
                    <div className="card" key={project.id} style={{ width: '18rem', margin: '10px' }}>
                        <img className="card-img-top" alt={project.title} />
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <a href={project.link} className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Project;
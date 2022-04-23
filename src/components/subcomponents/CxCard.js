import React from 'react'

const CxCard = ({ project, i }) => {
    return (
        <div key={i} className='cx-card'>
            <h2> {project.name}</h2>
            <p>{project.description}</p>
            <p>({project.stack})</p>
            <a href={`${project.url}`} target="_blank">View Here</a>
        </div>
    )
}

export default CxCard
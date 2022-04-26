import React, { useState, useEffect } from 'react'
import '../components/projects.css'
import { Container, Row, Col } from 'react-bootstrap'
import { projectsData } from '../data'



const Projects = () => {

    const [data, setData] = useState([])

    useEffect(
        () => {
            setData(projectsData)
        }, [data]
    )

    return (

        <Container fluid className='projects-container' style={{ minHeight: "100vh" }}>
            <Row >
                <Col>
                    < h2 className='h2-all' style={{ color: 'white', marginTop: "150px", marginBottom: "50px" }}>
                        Projects
                    </h2>
                </Col>
            </Row>
            <Row>
                <Col >

                    {data.map((project, i) => {
                        return (
                            <div style={{ border: "1px solid white", display: "inline-block", margin: "10px" }}>
                                <CxCard project={project} key={i} />
                            </div>
                        )
                    })}

                </Col>

            </Row>
        </Container >


    )
}

const CxCard = ({ project, i }) => {
    return (
        <div key={i} className='cx-card'>
            <div className='cx-card-image'>
                <img src={project.image} alt={project.name} />
            </div>
            <div className='cx-card-title'>
                <h2> {project.name}</h2>
            </div>
            <div className='cx-card-description'>
                <p>{project.description}</p>
            </div>
            <p>({project.stack})</p>
            <a href={`${project.url}`} target="_blank">View Here</a>
        </div>
    )
}


export default Projects
import React, { useState, useEffect } from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { projectsData } from '../data'
import { Link } from 'react-router-dom'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, FadeIn, ZoomIn } from "react-scroll-motion";

const Projects = () => {

    const [data, setData] = useState([])


    useEffect(
        () => {
            setData(projectsData)
        }, [data]
    )

    return (

        <Container fluid className='projects-container'>
            <Row >
                <Col>
                    < h2 className='h2-all' style={{ color: 'rgb(255, 192, 76)', marginTop: "150px", marginBottom: "50px" }}>
                        Projects
                    </h2>
                </Col>
            </Row>
            <Row>
                <ScrollContainer>
                    <ScrollPage page={2}>
                        <Animator animation={FadeIn()}>
                            <Col>
                                {data.map((project, i) => {
                                    return (
                                        <CxCard project={project} key={i} />
                                    )
                                })}
                            </Col>
                        </Animator>
                    </ScrollPage >
                </ScrollContainer >
            </Row>
        </Container >

    )
}

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


export default Projects
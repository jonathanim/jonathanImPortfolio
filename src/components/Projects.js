import React, { useState, useEffect } from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { projectsData } from '../data'
import CxCard from './subcomponents/CxCard'

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
                    < h2 className='h2-about' style={{ color: 'rgb(255, 192, 76)', marginTop: "150px", marginBottom: "50px" }}>
                        Projects
                    </h2>
                </Col>
            </Row>
            <Row>
                <ScrollContainer>
                    <ScrollPage page={1}>
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


export default Projects
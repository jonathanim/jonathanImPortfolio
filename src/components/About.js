import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../App.css'

const About = () => {
    return (
        <Container fluid className="about-container">
            <Row>
                <Col>
                    <h2 className='h2-about'>
                        Hi There, I'm
                    </h2>
                    <h1 className='h1-about'>
                        <span style={{ color: "aquamarine" }}>J</span>onathan <span style={{ color: "aquamarine" }}>I</span>m
                    </h1>
                    <h2 className='h2-about'>
                        Front End Developer
                    </h2>
                    <Button>See My Work</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default About
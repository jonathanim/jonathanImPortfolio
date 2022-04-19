import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../App.css'

const About = () => {
    return (
        <Container style={{ height: "100vh" }}>
            <Row style={{ margin: '0 auto', textAlign: "center" }}>
                <Col>
                    <div className='top-div'>
                        <h2 className='h2-about'>
                            Hi There, I'm
                        </h2>
                        <h1 className='h1-about'>
                            <span style={{ color: "aquamarine" }}>J</span>onathan <span style={{ color: "aquamarine" }}>I</span>m
                        </h1>
                        <h2 className='h2-about'>
                            Front End Developer
                        </h2>
                    </div>
                    <div className='short-summary'>
                        <h3 className='h3-about'>
                            I am passionate about solving problems though
                            human-center design.
                            Finding new possibilities to conquer the unknown.

                        </h3>
                    </div>

                    <div>
                        <Button >See More</Button>
                    </div>
                </Col>

            </Row>
        </Container >
    )
}

export default About
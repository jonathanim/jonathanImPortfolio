import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut } from "react-scroll-motion";
import '../App.css'

const About = () => {
    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <Container fluid className="about-container">
                    <Row>
                        <Col sm={12}>
                            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                                <h2 className='h2-all'>
                                    Hi There, I'm
                                </h2>
                                <h1 className='h1-about animate-character'>
                                    <span style={{ color: "aquamarine" }}>J</span>onathan<span style={{ color: "aquamarine" }}> I</span>m
                                </h1>
                                <div className="typewriter">
                                    <h2 className='h2-all'>
                                        A Full-Stack Engineer  <span className='devEmoji'>👨🏻‍💻</span>
                                    </h2>
                                </div>
                                <div className='d-flex justify-content-center mt-5'>



                                </div>
                            </Animator>
                        </Col>
                    </Row>
                </Container >
            </ScrollPage>
        </ScrollContainer >
    )
}

export default About
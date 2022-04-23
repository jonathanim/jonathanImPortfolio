import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import '../App.css'

const About = () => {


    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <Container fluid className="about-container">
                    <Row>
                        <Col>
                            <Animator animation={batch(Fade(), MoveOut(0, -500))}>
                                <h2 className='h2-about'>
                                    Hi There, I'm
                                </h2>

                                <h1 className='h1-about animate-character'>
                                    <span style={{ color: "aquamarine" }}>J</span>onathan<span style={{ color: "aquamarine" }}> I</span>m
                                </h1>
                                <div class="typewriter">
                                    <h2 className='h2-about'>
                                        Front End Developer  <span className='devEmoji'>👨🏻‍💻</span>
                                    </h2>
                                </div>

                                <div>
                                    <Row>
                                        <Col><Button>hi</Button></Col>
                                        <Col><Button>hi2</Button></Col>
                                    </Row>
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
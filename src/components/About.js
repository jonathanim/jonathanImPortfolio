import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import '../App.css'

const About = () => {


    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <Container fluid className="about-container">
                    <Row>
                        <Col>
                            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -50))}>
                                <h2 className='h2-about'>
                                    Hi There, I'm
                                </h2>

                                <h1 className='h1-about'>
                                    <span style={{ color: "aquamarine" }}>J</span>onathan<span style={{ color: "aquamarine" }}> I</span>m
                                </h1>
                                <h2 className='h2-about'>
                                    Front End Developer
                                </h2>
                            </Animator>
                        </Col>
                    </Row>
                </Container >
            </ScrollPage>
        </ScrollContainer>
    )
}

export default About
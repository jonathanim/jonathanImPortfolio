import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, MoveIn } from "react-scroll-motion";

import '../App.css'


const Contact = () => {
    return (
        <ScrollContainer>
            <ScrollPage page={3}>
                <Container fluid className='about-container' >
                    <Animator animation={batch(MoveIn(0, 0), FadeIn())}>
                        <Row>
                            <Col>
                                <h2 className='h2-about' style={{ color: 'rgb(255, 192, 76)', marginTop: "150px", marginBottom: "50px" }}>
                                    Contact
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <div className='form'>

                            </div>
                        </Row>
                    </Animator>
                </Container >
            </ScrollPage >
        </ScrollContainer >

    )
}

export default Contact
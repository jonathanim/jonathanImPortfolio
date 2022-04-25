import React from 'react'
import '../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Animator, ScrollContainer, ScrollPage, batch, FadeIn, ZoomIn } from "react-scroll-motion";



const Skills = () => {

    const skills = [
        "Javascript", "HTML", "CSS", "React", "React Native", "Redux", "Express.js",
        "Node.js", "MongoDB", "MySQL", "Ruby", "Ruby on Rails", "Android Studio"]
    return (
        <ScrollContainer>
            <ScrollPage page={2}>
                <Container fluid className='skills-container' >
                    <Row>
                        <Col>
                            <h2 className='h2-about' style={{ color: 'rgb(255, 192, 76)', marginTop: "150px", marginBottom: "50px" }}>
                                Skills
                            </h2>
                        </Col>
                    </Row>
                    {/* <Row>

                        <Animator animation={batch(ZoomIn(), FadeIn())}>

                            {skills.map((skill, i) => {
                                let bg = ""
                                let color = ""
                                let border = ""

                                if (i % 2 === 0) {
                                    bg = " rgb(255, 192, 76)"
                                    color = "black"
                                    border = "white"
                                } else {
                                    bg = "white"
                                    color = "black"
                                    border = " rgb(255, 192, 76)"
                                }
                                return <CxPills key={i} text={skill} bg={bg} color={color} border={border} >
                                </CxPills>
                            })}
                            )

                        </Animator>

                    </Row> */}

                </Container >
            </ScrollPage>
        </ScrollContainer >


    )
}

export default Skills
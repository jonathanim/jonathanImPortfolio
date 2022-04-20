import React from 'react'
import '../App.css'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

const Skills = () => {

    const skills = [
        "Javascript", "HTML", "CSS", "React", "React Native", "Redux", "Express.js",
        "Node.js", "MongoDB", "MySQL"]

    return (
        <Container fluid className='skills-container' >
            <Row>
                <h3>
                    Skills
                </h3>
            </Row>
            <Row>

                {skills.map(skill => {

                    return <Col>
                        <Badge pill className='cx-pill'>
                            {skill}
                        </Badge>
                    </Col>
                })}


            </Row>

        </Container >
    )
}

export default Skills
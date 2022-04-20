import React from 'react'
import '../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Skills = () => {

    const skills = [
        "Javascript", "HTML", "CSS", "React", "React Native", "Redux", "Express.js",
        "Node.js", "MongoDB", "MySQL"]

    return (
        <Container className='skills-container' >
            <Row>
                <h3>
                    Skills
                </h3>
            </Row>
            <Row>
                <Col>
                    {skills.map(skill => {
                        return <Card pill className='cx-pill'>
                            {skill}
                        </Card>

                    })}

                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container >
    )
}

export default Skills
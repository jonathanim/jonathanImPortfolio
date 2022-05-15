import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './aboutme.css'

const AboutMe = () => {
    return (
        <Container fluid className="about-container">
            <Row>
                <Navbar variant="dark" className='cxCss' fixed='top' id={"#top"} expand='md'>
                    <Container style={{ justifyContent: "center" }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link to="/" className="cx-nav-links">Home</Link>
                                <Link to="/aboutMe" className="cx-nav-links">About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Col className='d-flex justify-content-center align-content-center flex-column'>
                <div className='about-header'>
                    <h3>About</h3>
                </div>
                <div className="whoami">
                    <p>
                        Hi!! I'm Jonathan, I am originally from Buenos Aires, Argentina.
                    </p>
                    <p>
                        I always admired Technology and after having the opportunity to move the U.S. I am able to pursue my dream of being an Software Engineer.
                    </p>
                    <p>
                        When coding, I am in my own little world, I love creating animations and effects.
                    </p>
                    <p>
                        On my free time, I love the outdoors, I play disc golf, tennis and others sports.
                    </p>
                    <p>
                        Also I been learning new libraries, and continue to expand my skills in programming.
                    </p>
                </div>
            </Col>
        </Container >
    )
}

export default AboutMe
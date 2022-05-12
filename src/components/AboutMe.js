import React from 'react'
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../App.css'
import './aboutme.css'

const AboutMe = () => {
    return (
        <Container fluid className="about-container">
            <Row>
                <Navbar variant="dark" className='cxCss' fixed='top' id={"#top"} expand='md'>
                    <Container style={{ justifyContent: "center" }}>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                            <Nav className="mx-auto">
                                <Link to="/" className="cx-nav-links">Home</Link>
                                <Link to="/aboutMe" className="cx-nav-links">About</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Row>
            <Col>
                <div className="whoami">
                    <h2>lorem ipsum</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam atque obcaecati delectus consectetur molestias minima odio nobis enim, labore maxime ipsum quia iusto eos ad repellendus dolorum adipisci hic sit vitae sapiente? Dignissimos tempore minus ad enim quaerat veniam eaque atque consectetur reiciendis, magnam explicabo hic recusandae molestiae, sint aliquam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur id modi ratione tenetur, laboriosam labore. Praesentium rerum tempore laboriosam minima! Quasi aut modi beatae quae vero, ex, blanditiis nam laboriosam delectus fugit in omnis molestias impedit ab ipsum praesentium error minima quaerat adipisci officiis. In praesentium id minima facilis dolorem ab beatae suscipit animi debitis facere! Perferendis, ex? Cupiditate, ad.
                    </p>
                </div>
            </Col>
            <Col>

            </Col>
            <Row>


            </Row>
        </Container >
    )
}

export default AboutMe
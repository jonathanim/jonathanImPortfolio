import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'


const MyNavbar = () => {
    return (

        <Navbar variant="dark" className='cxCss' >
            <Container >
                <Nav className="mx-auto">
                    <Link className="cx-nav-links " to="/about">HOME</Link>
                    <Link className="cx-nav-links " to="/projects">PROJECTS</Link>
                    <Link className="cx-nav-links" to="/contact">CONTACT</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
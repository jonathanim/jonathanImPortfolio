import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import '../App.css'


const MyNavbar = () => {
    return (

        <Navbar variant="dark" className='cxCss' fixed='top' id={"#top"} expand='md'>
            <Container style={{ justifyContent: "center" }}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
                    <Nav className="mx-auto">
                        <HashLink to="#top" className="cx-nav-links">Home</HashLink>
                        <HashLink to="#toolkit" className="cx-nav-links">Toolkit</HashLink>
                        <HashLink to="#projects" className="cx-nav-links">Projects</HashLink>
                        <HashLink to="#contact" className="cx-nav-links">Contact</HashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
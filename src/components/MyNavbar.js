import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import '../App.css'


const MyNavbar = () => {
    return (

        <Navbar variant="dark" className='cxCss' fixed='top' id={"#top"}>
            <Container >
                <Nav className="mx-auto">
                    <HashLink to="#top" className="cx-nav-links">Home</HashLink>
                    <HashLink to="#toolkit" className="cx-nav-links">Toolkit</HashLink>
                    <HashLink to="#projects" className="cx-nav-links">Projects</HashLink>
                    <HashLink to="#contact" className="cx-nav-links">Contact</HashLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
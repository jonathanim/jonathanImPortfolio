import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css'


const MyNavbar = () => {
    return (

        <Navbar variant="dark" className='cxCss' sticky='top'>
            <Container >
                <Link to="/home" className="animate-character">Jonathan Im</Link>
                <Nav className="mr-auto">
                    <Link className="cx-nav-links" to="/about">About</Link>
                    <Link className="cx-nav-links" to="/projects">Projects</Link>
                    <Link className="cx-nav-links" to="/contact">Contact</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
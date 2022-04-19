import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../App.css'


const MyNavbar = () => {
    return (
        <Navbar variant="dark" className='cxCss'>
            <Container >
                <Navbar.Brand
                    href="#home"
                    style={{ color: "aquamarine", fontSize: "30px", letterSpacing: "10px", border: "2px solid aquamarine", padding: "10px 15px" }}
                >
                    JI
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar
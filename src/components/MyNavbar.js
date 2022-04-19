import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'


const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container >
                <Navbar.Brand href="#home">Jonathan Im</Navbar.Brand>
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
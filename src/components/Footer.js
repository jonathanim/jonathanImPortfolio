import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <Col>
                    {/* {links} */}
                    <Link to="/" >Link one</Link>
                    <Link to="/" >Link one</Link>
                    <Link to="/" >Link one</Link>
                </Col>
                <Col>
                    {/* {social media} */}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {



    return (
        <footer className="footer">
            <Container className="mt-5">
                <Row>
                    <Col md={5}>
                        <h5><i className="mt-5"></i> Jonathan Im</h5>
                        <Row>
                            <Col sm={6}>
                                <ul className="list-unstyled" style={{ display: "flex", flexDirection: "column" }}>
                                    <Link to="#top" className='footer-link'>About</Link>
                                    <Link to="#top" className='footer-link'>Projects</Link>
                                    <Link to="#top" className='footer-link'>Skills</Link>
                                </ul>
                            </Col>

                        </Row>

                        <br />
                    </Col>
                    <Col md={2}>
                        <h5 className="text-md-right">Message Me</h5>
                        <hr />
                    </Col>
                    <Col md={5}>
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="emailInput" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="messageInput" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group text-center mt-4">
                                <Button type="submit" variant="primary btn btn-lg">Send</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
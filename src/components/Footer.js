import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './footer.css'



const Footer = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);


    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };
    const submit = () => {
        if (name != "" && isValidEmail(email) && message != "") {
            const serviceId = 'service_9twbrfc';
            const templateId = 'template_qqz33ps';
            const userId = 'user_nhGwTflhvgRhjhYBiGpvo';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
            alert("Thank you for the message.")
        } else {
            alert('Please input correct email and message.');
        }
    }

    return (
        <footer className="footer">
            <Container className="mt-3">
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
                        <div id="contact-form" style={{ textAlign: "center" }}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                            </div>
                            <button className="btn-submit" onClick={submit}>Send Message</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer >
    )
}

export default Footer

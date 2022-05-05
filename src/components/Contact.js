import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap'





const Contact = () => {

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

    return (<Container>


        <Row>

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
    )
}

export default Contact

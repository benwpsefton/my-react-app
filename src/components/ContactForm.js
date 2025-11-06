import React, { use } from "react"
import { useState } from "react"
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted:", formData)
        alert(`Your request has been submitted!`)
    }

    return (
        <Container className="col-md-8">
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Label>Name:</Form.Label>
                            <InputGroup id="name" className="mb-3">
                                <InputGroup.Text><i class="bi bi-person"></i></InputGroup.Text>
                                <Form.Control
                                type="name"
                                placeholder="mario"
                                value={formData.name}
                                onChange={handleChange}
                                ></Form.Control>
                            </InputGroup>
                        </Col>
                        <Col>
                            <Form.Label>Email:</Form.Label>
                            <InputGroup id="email" className="mb-3" onChange={handleChange}>
                                <InputGroup.Text><i class="bi bi-envelope"></i></InputGroup.Text>
                                <Form.Control
                                type="email"
                                placeholder="mario@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                ></Form.Control>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Form.Label>Subject:</Form.Label>
                    <InputGroup id="subject" className="mb-3" onChange={handleChange}>
                        <Form.Control
                        type="subject"
                        placeholder="Sydney Rental Enquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        ></Form.Control>
                    </InputGroup>
                </Container>
                <Container>
                    <Form.Label>Message:</Form.Label>
                    <InputGroup id="message" className="mb-3" onChange={handleChange}>
                        <Form.Control
                        as={"textarea"}
                        rows={4}
                        placeholder="Please type your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        ></Form.Control>
                    </InputGroup>
                </Container>
                <Container id="submit" className="text-center">
                    <Button type="submit" variant="secondary">Submit</Button>
                </Container>
            </Form>
        </Container>
    )
}
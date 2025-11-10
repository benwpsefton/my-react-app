import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function RentalSearchFinder() {
    const [formData, setFormData] = useState({
        arrival: "",
        length: "",
        bedrooms: "",
        location: ""
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
        localStorage.setItem("RentalFormData", JSON.stringify(formData));
        alert(`Your request has been submitted!`)
        window.location.reload(); // temporary
    }

    return(
        <Container className="wrapper">
            <Row>
                <Col sm={12}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={3}>
                                <InputGroup>
                                    <Form.Control
                                        size="sm"
                                        name="arrival"
                                        placeholder="Arrive on..."
                                        type="date"
                                        data-date-format="DD/MM/YYYY"
                                        value={formData.arrival}
                                        onChange={handleChange}
                                        required
                                    ></Form.Control>
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Form.Select
                                        size="sm"
                                        name="length"
                                        value={formData.length}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value={""}>Stay...</option>
                                        {[...Array(14)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1} Night{ i + 1 > 1 ? "s" : ""}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Form.Select
                                        size="sm"
                                        name="bedrooms"
                                        value={formData.bedrooms}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value={""}>Bedrooms</option>
                                        {[0,1,2,3,4,5, "5plus"].map(val => (
                                            <option key={val} value={val}>{val}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Col>
                            <Col sm={3}>
                                <InputGroup>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, State, Country, etc..."
                                        required
                                    ></Form.Control>
                                    <Button type="submit" variant="primary">
                                        Search
                                    </Button>
                                </InputGroup>   
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
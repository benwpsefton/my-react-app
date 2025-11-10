import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RentalSearchFinder() {
    const navigate = useNavigate();
    
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
        
        navigate("/search-results", { state: formData });
    }

    return (
        <Container className="wrapper">
            <Row>
                <Col sm={12}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={3}>
                            <Container>
                                <InputGroup>
                                    <Form.Control
                                        name="arrival"
                                        placeholder="Arrive on..."
                                        type="date"
                                        data-date-format="DD/MM/YYYY"
                                        value={formData.arrival}
                                        onChange={handleChange}
                                        required
                                    />
                                </InputGroup>
                            </Container>
                            </Col>
                            <Col sm={3}>
                            <Container>
                                <InputGroup>
                                    <Form.Select
                                        name="length"
                                        value={formData.length}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" selected hidden>Length of Stay...</option>
                                        {[...Array(14)].map((_, i) => (
                                            <option key={i + 1} value={i + 1}>{i + 1} Night{ i + 1 > 1 ? "s" : ""}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Container>
                            </Col>
                            <Col sm={3}>
                            <Container>
                                <InputGroup>
                                    <Form.Select
                                        name="bedrooms"
                                        value={formData.bedrooms}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" selected hidden># of Bedrooms</option>
                                        {[0,1,2,3,4,5, "5plus"].map(val => (
                                            <option key={val} value={val}>{val}</option>
                                        ))}
                                    </Form.Select>
                                </InputGroup>
                            </Container>
                            </Col>
                            <Col sm={3}>
                            <Container>
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Link to="/SearchResults.js" className="text-decoration-none">
                                        <Button type="submit" variant="primary"> Search </Button>
                                    </Link>
                                </InputGroup>   
                            </Container>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
import React from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

export default function RentalSearchFinder() {
    // Initialise state for form inputs
    const [formData, setFormData] = useState({
        arrival: "",
        length: "",
        bedrooms: "",
        location: ""
    })

    function handleChange(event) {
        const { arrival, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [arrival]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("Form submitted:", formData)
        localStorage.setItem("contactFormData", JSON.stringify(formData));
        alert(`Your request has been submitted!`)
        window.location.reload();
    }

    return(
        <Container className="wrapper">
            <Row>
                <Col sm={12}>
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Form.Control
                                size="sm"
                                placeholder="Arrive on..."
                                type="text"
                                data-date-format="DD/MM/YYYY"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            ></Form.Control>
                            <InputGroup.Text>
                                <span class="glyphicon glyphicon-calendar"></span>
                            </InputGroup.Text>
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                size="sm"
                            >
                                <select
                                    id="search-status"
                                    name="search-status"
                                    data-placeholder="Stay..."
                                >
                                    <option value={""}></option>
                                    <option value={"1"}>1 Night</option>
                                    <option value={"2"}>2 Nights</option>
                                    <option value={"3"}>3 Nights</option>
                                    <option value={"4"}>4 Nights</option>
                                    <option value={"5"}>5 Nights</option>
                                    <option value={"6"}>6 Nights</option>
                                    <option value={"7"}>7 Night</option>
                                    <option value={"8"}>8 Nights</option>
                                    <option value={"9"}>9 Nights</option>
                                    <option value={"10"}>10 Nights</option>
                                    <option value={"11"}>11 Nights</option>
                                    <option value={"12"}>12 Nights</option>
                                    <option value={"13"}>13 Nights</option>
                                    <option value={"14"}>14 Nights</option>
                                </select>
                            </Form.Control>
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                size="sm"
                            >
                                <select
                                    id="search-bedrooms"
                                    name="search-bedrooms"
                                    data-placeholder="Bedrooms"
                                >
                                    <option value={""}></option>
                                    <option value={"0"}>0</option>
                                    <option value={"1"}>1</option>
                                    <option value={"2"}>2</option>
                                    <option value={"3"}>3</option>
                                    <option value={"4"}>4</option>
                                    <option value={"5"}>5</option>
                                    <option value={"5plus"}>5+</option>
                                </select>
                            </Form.Control>
                        </InputGroup>
                        <InputGroup>
                            <Form.Control
                                size="lg"
                            >
                                <input
                                    type="text"
                                    name="location"
                                    placeholder="City, State, Country, etc..."
                                >
                                <Button type="submit" variant="primary">
                                    Search
                                </Button>
                                </input>
                            </Form.Control>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
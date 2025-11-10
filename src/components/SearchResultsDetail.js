import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { rentals } from "../data/rentals";
import GetImage from "./GetImage";
import { useSearchParams } from "react-router-dom";

export default function SearchResultsDetail() {
    const location = useLocation();

    const [searchParams] = useSearchParams();
    const cityQuery = searchParams.get("city");


    // Load form data from router state or localStorage fallback
    const formData =
        location.state ||
        JSON.parse(localStorage.getItem("RentalFormData")) ||
        null;
    
    const data = cityQuery
        ? { location: cityQuery, bedrooms: 0, length: 1 } // minimal requirements
        : formData;

    if (!data) {
        return (
            <Container className="mt-5 text-center">
                <h3>No search data found.</h3>
                <Link to="/">
                    <Button className="mt-3">Back to Home</Button>
                </Link>
            </Container>
        );
    }
    
    const bedrooms = data.bedrooms === "5plus" ? 5 : Number(data.bedrooms);
    const stayLength = Number(data.length);

    // Filter rentals based on user input
    const filtered = rentals.filter((item) => {
        const locationMatch =
            item.city.toLowerCase().includes(data.location.toLowerCase()) ||
            item.state.toLowerCase().includes(data.location.toLowerCase()) ||
            item.region.toLowerCase().includes(data.location.toLowerCase());

        const bedroomsMatch = item.bedrooms >= (data.bedrooms ? Number(data.bedrooms) : 0);
        const lengthMatch = item.minNights <= (data.length ? Number(data.length) : 14);

        return locationMatch && bedroomsMatch && lengthMatch;
    });

    const [results] = useState(filtered);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Search Results</h2>

            {results.length === 0 ? (
                <h4>No properties found matching your criteria.</h4>
            ) : (
                <Row>
                    {results.map((rental) => (
                        <Col md={4} key={rental.id} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <Card.Img
                                    variant="top"
                                    className="rental-card-img"
                                    src={GetImage("rentals", rental)}
                                    alt={rental.title}
                                ></Card.Img>

                                <Card.Body>
                                    <Card.Title>{rental.title}</Card.Title>

                                    <Card.Text>
                                        <strong>Location:</strong> {rental.location} <br />
                                        <strong>Bedrooms:</strong> {rental.bedrooms} <br />
                                        <strong>Min Nights:</strong> {rental.minNights} <br />
                                        <strong>Price:</strong> ${rental.price}/night
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="bg-white border-0">
                                    <Button variant="primary" className="w-100">
                                        View Property
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

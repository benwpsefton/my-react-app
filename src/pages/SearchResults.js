import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { rentals } from "../data/rentals"

export default function SearchResults() {
    const location = useLocation();
    const data =
        location.state ||
        JSON.parse(localStorage.getItem("RentalFormData")) ||
        null;

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

    const filtered = rentals.filter(item =>
        item.location.includes(data.location) &&
        item.bedrooms >= Number(data.bedrooms) &&
        item.minNights <= Number(data.length)
    );

    useEffect(() => {
        fetch(`/api/search?location=${data.location}&bedrooms=${data.bedrooms}`)
            .then(r => r.json())
            .then(setSearchResults);
    }, []);

    {results.length === 0 ? (
        <h4>No properties found matching your criteria.</h4>
    ) : (
        <Row>
            {results.map((rental) => (
                <Col md={4} key={rental.id} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/assets/rentals/${rental.image}`}
                        alt={rental.title}
                        style={{ height: "200px", objectFit: "cover" }}
                        />

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
                            <Button
                                variant="primary"
                                className="w-100"
                            >
                                View Property
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )}
}

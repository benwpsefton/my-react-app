import React from "react"
import { regions } from "../data/regions"
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GetImage from "./GetImage";

export default function RegionDisplayComponent() {
    const regionItems = regions.map(region =>
        <Col key={region.id} md={6} className="text-center d-flex justify-content-center">
            <Link to={`/search-results?city=${encodeURIComponent(region.city)}`} className="text-decoration-none">
                <Card className="card-regions text-center mb-3 p-0">
                    <Row className="g-0">
                        <Col md={4}>
                            <img src={GetImage("regions", region)} alt="region image" className="card-regions-img img-fluid rounded-start"></img>
                        </Col>
                        <Col md={8}>
                            <Card.Body>
                                <Card.Title className="fs-4 mb-3">{region.city}</Card.Title>
                                <Card.Subtitle>{region.state}</Card.Subtitle>
                                <br></br>
                                <Card.Subtitle>Click to find available rentals!</Card.Subtitle>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Link>
        </Col>
    )

    return <Row className="justify-content-center align-items-center px-5 py-2">{regionItems}</Row>
}
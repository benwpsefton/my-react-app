import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { articles } from "../data/articles"
import GetImage from "./GetImage";

export default function NewsArticleList() {
    const listItems = articles.map(article =>
        <Col key={article.id} md={6}>
            <Link to="/article">
                <Card className="text-center">
                    <Card.Title>{article.title}</Card.Title>
                    <Container>
                        <img className="card-img-top card-news-img" src={GetImage(article)} alt="preview"></img>
                        <Button className="btn-primary">Read More</Button>
                    </Container>
                    <Card.Body className="mx-auto text-start mb-2">
                        <Card.Subtitle>{article.date}</Card.Subtitle>
                        <Card.Subtitle>{article.comments}</Card.Subtitle>
                        <Card.Subtitle>{article.tags}</Card.Subtitle>
                    </Card.Body>

                    <Card.Subtitle>{article.author}</Card.Subtitle>
                </Card>
            </Link>
        </Col>
    )

    return <Row>{listItems}</Row>
}
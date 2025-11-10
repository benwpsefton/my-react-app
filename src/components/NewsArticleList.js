import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { articles } from "../data/articles"
import GetImage from "./GetImage";

export default function NewsArticleList() {
    const listItems = articles.map(article =>
        <Col key={article.id} md={6}>
            <Link to={`/articles/${article.id}.js`} className="text-decoration-none">
                <Card className="text-center mb-5">
                    <Card.Title className="fs-4 mb-3">{article.title}</Card.Title>
                    <Container>
                        <img className="card-img-top card-news-img mb-3" src={GetImage("articles", article)} alt="preview"></img>
                        <Button variant="primary" className="fs-5 mt-1 border-0">Read More</Button>
                    </Container>
                    <Row className="mb-2 py-4 news-row">
                        <Col xs="auto" className="d-flex flex-column align-items-end p-0 ms-2">
                            <span><i className="bi bi-calendar-event-fill"></i></span>
                            <span><i className="bi bi-chat-left-dots-fill"></i></span>
                            <span><i className="bi bi-tags-fill"></i></span>
                            <br></br>
                            <span><i className="bi bi-pencil-square"></i></span>
                        </Col>
                        <Col xs="auto" className="d-flex flex-column align-items-start p-0 m-0">
                            <span>{article.date}</span>
                            <span>{article.comments}</span>
                            <span>{article.tags}</span>
                            <br></br>
                            <span>{article.author}</span>
                        </Col>
                    </Row>
                </Card>
            </Link>
        </Col>
    )

    return <Row className="justify-content-center align-items-center">{listItems}</Row>
}
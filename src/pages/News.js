import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap";
import NewsArticleList from "../components/NewsArticleList";

export default function News() {
    return (
        <>
            <Container className="wrapper">
                <Container>
                    <NewsArticleList></NewsArticleList>
                </Container>
            </Container>
        </>
    )
}
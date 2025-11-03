import React from "react"
import { useParams, Link } from "react-router-dom"
import { articles } from "../data/articles"
import GetImage from "../components/GetImage"
import { Container, Col, Row, Button } from "react-bootstrap"

export default function ArticleDetail() {
  const { id } = useParams()
  const article = articles.find(a => a.id === parseInt(id))

  if (!article) {
    return (
      <Container className="text-center mt-5">
        <h2>Article not found</h2>
        <Link to="/news">
          <Button variant="primary" className="mt-3">Back to News</Button>
        </Link>
      </Container>
    )
  }

  return (
    <Container className="my-5">
      <Col sm={8}>
        <h1 className="mb-4">{article.title}</h1>
        <img
          src={GetImage(article)}
          alt={article.title}
          className="img-fluid mb-4"
        ></img>
        <p><strong>Date:</strong> {article.date}</p>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Tags:</strong> {article.tags}</p>
        <p className="mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          You can replace this with your article’s real content.
        </p>
        <Link to="/news">
          <Button variant="primary" className="mt-4 border-0">Back to News</Button>
        </Link>
      </Col>
    </Container>
  )
}

import React from "react"
import { Link } from "react-router-dom"
import NewsArticleList from "../components/NewsArticleList"
import { Card, Col, Container, Row } from "react-bootstrap"

export default function News() {
    return (
        <>
        <div className="wrapper articles-wrapper">
            {/* News - Hero Section */}
            <div className="news-container-1">
                <div className="container text-center">
                    <h1 className="h2">Gallery</h1>
                    <h2 className="p lead text-muted">Browse all our works</h2>
                </div>
            </div>

            {/* News - Articles List*/}
            <div className="news-container-2 bg-light">
                <div className="news-row">
                    <div className="news-article">
                        <Link to="/article" className="card card-news border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news-img" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                    <div className="news-article">
                        <Link to="/article" className="card card-news border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news-img" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <NewsArticleList category={category}></NewsArticleList>
        </>
    )
}
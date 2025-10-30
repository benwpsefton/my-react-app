import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NewsArticleList() {
    return (
        <section id="products">
            <div className="container-lg">
                <div className="text-center">
                    <h1 className="h2">Gallery</h1>
                    <h2 className="p lead text-muted">Browse all our works</h2>
                </div>

                <div className="row my-5 align-items-center justify-content-center g-3">
                    <div className="col-lg-6 col-xl-6">
                        <Link to="/article" className="card border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <Link to="/article" className="card border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="row my-5 align-items-center justify-content-center g-3">
                    <div className="col-lg-6 col-xl-6">
                        <Link to="/article" className="card border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6 col-xl-6">
                        <Link to="/article" className="card border-0">
                            <h3 className="card-title text-center text-dark py-3">How to get your dream property for the best price?</h3>
                            <p className="lead text-center">Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen. Aliquam fermem tum nulla felis, sed molestie libero porttitor in.</p>
                            <img src="http://placehold.it/766x515" className="card-news" alt=""></img>
                            <div className="card-body mx-auto text-start mb-2">
                                <p className="lead card-subtitle mt-2 text-dark fs-4"><i class="bi bi-calendar-event-fill"></i> July 30th, 2014</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-chat-left-dots-fill"></i> 2</p>
                                <p className="lead card-subtitle text-dark fs-4"><i class="bi bi-tags-fill"></i> properties, prices, best deals</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
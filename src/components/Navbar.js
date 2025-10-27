import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark sticky-top align-items-center justify-content-center">
            <div className="container-xl justify-content-start">
                <Link to="index.html" className="navbar-brand">
                    <div className="container align-items-center">
                        <img src="images/bazaar-logo.jpg" alt="logo" className="logo me-1 rounded d-inline"></img>
                        <p className="fw-bold text-light d-inline">One Ring Rentals</p>
                    </div>
                </Link>
                {/* toggle button for mobile nav */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/home" id="current" className="nav-link text-light me-4">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/news" id="current" className="nav-link text-light me-4">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/regions" id="current" className="nav-link text-light me-4">Regions</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" id="current" className="nav-link text-light me-4">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function Customlink({ to, children, ...props}) {
    const path = window.location.pathname

    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
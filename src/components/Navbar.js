import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Container, Nav, Button } from "react-bootstrap"

export default function Navbar() {
    return (
        <Nav className="navbar navbar-expand-md navbar-dark sticky-top align-items-center justify-content-center">
            <Container className="container-xl justify-content-start">
                <Link to="index.html" className="navbar-brand">
                    <Container className="container align-items-center">
                        <img src="images/bazaar-logo.jpg" alt="logo" className="logo me-1 rounded d-inline"></img>
                        <p className="fw-bold text-light d-inline">One Ring Rentals</p>
                    </Container>
                </Link>
                {/* toggle button for mobile nav */}
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end" id="main-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <CustomLink to="/" className="nav-link text-light me-4">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/news" className="nav-link text-light me-4">News</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/regions" className="nav-link text-light me-4">Regions</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/contact" className="nav-link text-light me-4">Contact</CustomLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </Nav>
    )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })


    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
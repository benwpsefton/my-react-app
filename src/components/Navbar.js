import React from "react"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Container, Nav, Button } from "react-bootstrap"

export default function Navbar() {
    return (
        <Nav className="navbar navbar-expand-md sticky-top align-items-center justify-content-center">
            <Container className="justify-content-start">
                <Link to="/" className="navbar-brand">
                    <Container className="align-items-center">
                        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} className="logo d-inline" alt="logo"></img>
                    </Container>
                </Link>
                {/* toggle button for mobile nav */}
                <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                {/* navbar links */}
                <div className="collapse navbar-collapse justify-content-end" id="main-nav">
                    <ul className="nav navbar-nav">
                        <li className="nav-item">
                            <CustomLink to="/" className="nav-link me-4">Home</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/news" className="nav-link me-4">News</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/regions" className="nav-link me-4">Regions</CustomLink>
                        </li>
                        <li className="nav-item">
                            <CustomLink to="/contact" className="nav-link me-4">Contact</CustomLink>
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
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Finance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/articles">Articles</Nav.Link>
                        <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
                        <Nav.Link as={Link} to="/booking">Book</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container>
                <Row>
                    <Col className="text-center">
                    <p>&copy; 2024 Finance</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
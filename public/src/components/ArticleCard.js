import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleCard = ({ title, content, image, link}) => {
    return (
        <Card className="my-3">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <Button variant="primary" as={Link}>Read More</Button>
            </Card.Body>
        </Card>
    );
};
export default ArticleCard;
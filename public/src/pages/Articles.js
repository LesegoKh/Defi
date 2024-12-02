import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArticleCard from '../components/ArticleCard';

const Articles = () => {
    return(
        <Container>
            <h1 className='my-4'>Articles</h1>
            <Row>
                <Col md={4}>
                <ArticleCard 
                title="Understanding Financial Strategies"
                content="Learn the basic financial strategies"
                image="https://www.investopedia.com/thmb/IHGQW0fmMoBlrZobyQ7RlMYEMr8=/680x440/filters:no_upscale():max_bytes(150000):strip_icc()/budgeting_shutterstock_479095678-5bfc2f9146e0fb0083c1343a.jpg"
                link="/articles/1"
                />
                </Col>

                <Col md={4}>
                <ArticleCard 
                title="Understanding Saving"
                content="Learn the basics of saving"
                image="https://www.filwebasia.com/wp-content/uploads/2023/03/employee-strategically-saving-money-from-her-salary.webp"
                link="/articles/2"
                />
                </Col>

                <Col md={4}>
                <ArticleCard 
                title="Understanding Taxes"
                content="Learn the basics of tax"
                image="https://www.australaccounting.co.za/wp-content/uploads/2023/10/22.jpg"
                link="/articles/3"
                />
                </Col>
            </Row>

            
        </Container>
    );
};

export default Articles; 
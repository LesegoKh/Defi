import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ArticleCard from '../components/ArticleCard';
import VideoPlayer from '../components/VideoPlayer';

const Home = () => {
    return (
        <Container>
            <h1 className='text-center my-4'>Heading Here!</h1>

            <h2>Featured Articles</h2>
            <Row>
                <Col md={4}>
                <ArticleCard
                title="Incorporating Financial Strategies"
                content="Learn the basics of finance"
                image="https://i.ytimg.com/vi/KM6_55eW0DE/sddefault.jpg"
                link="/articles/1"
                />
                </Col>

                <Col md={4}>
                <ArticleCard
                title="Article Title"
                content="Intro paragraph snippet"
                image="https://miro.medium.com/v2/resize:fit:800/1*O75ZhYng1D5T88Hk27PGPg.jpeg"
                link="/articles/1"
                />
                </Col>

                <Col md={4}>
                <ArticleCard
                title="Article Title"
                content="Intro paragraph snippet"
                image="https://expatmoneyshow.com/wp-content/uploads/2024/05/Podcast-4.jpg"
                link="/articles/1"
                />
                </Col>

            </Row>

            <h2>Featured Videos</h2>
            <VideoPlayer url="/Welcome.mp4" />
            <h5>Title here</h5>
                <p>Description here!</p>
        </Container>
    );
};

export default Home; 
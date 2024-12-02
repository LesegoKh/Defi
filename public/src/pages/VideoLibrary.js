import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPlayer from '../components/VideoPlayer';

const VideoLibrary = () => {
    return (
        <Container>
            <h1 className='my-4'>Video Library</h1>
            <Row>
                <Col md={4} >
                <h3>Intro to finance</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Basic introduction to financial literacy</h5>
                <p>Description here!</p>
                </Col>
            
                <Col md={4} mb={6}>
                <h3>Intro to finance pt.2</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Title here</h5>
                <p>Description here!</p>
                </Col>

                 <Col md={4}>
                <h3>Intro to finance pt.3</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Title here</h5>
                <p>Description here!</p>
                </Col>
            </Row>
            
            <hr></hr>
           
            <Row>
                <h2 mb={6}>Intermediate Concepts</h2>
                <br></br><br></br>
                <Col md={4} mb={4} >
                <h3>Intermediate finance</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Introduction to financial topics</h5>
                <p>Description here!</p>
                </Col>
            
                <Col md={4} mb={6}>
                <h3>Finance Concepts</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Title here</h5>
                <p>Description here!</p>
                </Col>

                 <Col md={4} mb={8}>
                <h3>Finance concepts pt.2</h3>
                <VideoPlayer url="/Welcome.mp4" /> 
                <h5>Title here</h5>
                <p>Description here!</p>
                </Col>
            </Row>
        
        </Container>
    );
};

export default VideoLibrary;
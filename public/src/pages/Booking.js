import React from 'react';
import { Container } from 'react-bootstrap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    return (
        <Container>
            <h1 className='my-4'>Book a Consultation</h1>
            <BookingForm />
        </Container>
    );
};

export default Booking;
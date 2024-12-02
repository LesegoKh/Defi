import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date) {
            alert('Please select a date & time for your booking');
            return;
        }

        alert(`Booking confirmed for ${name} on ${date.toLocaleString()}`); 
    };
     
    return (
        <Form onSubmit={handleSubmit} className="my-4">
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="email" className='my-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>

            <Form.Group controlId="date" className="my-3">
                <Form.Label>Select Date & Time</Form.Label>
                    <DatePicker 
                    selected={date}
                    onChange={(selectDate) => setDate(selectDate)}
                    showTimeSelect 
                    timeFormat="HH:mm"
                    timeIntervals={15} //15-minute type interval sh*t
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Click to select a Time & Date"
                    className='form-control'
                    />
                     </Form.Group>
            
            <Button variant="primary" type="submit">Book</Button>
        </Form>
    );
};

export default BookingForm;
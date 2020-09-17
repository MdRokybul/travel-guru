import React, {useContext, useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PlaceName, StayingDate} from '../../App';
import placeData from '../../FakeData/Place';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Booking.css'

const Booking = () => {
    const [place, setPlace] = useContext(PlaceName);
    const [date, setDate] = useContext(StayingDate);

    //This is for showing Place data from FakeData
    const [singlePlace, setSinglePlace] = useState({});
    const placeName = singlePlace.placeName;
    useEffect(() => {
        const selectedPlace = placeData.find(placeName => placeName.category === place);
        setSinglePlace(selectedPlace);
    }, [place])

    //This is for Date count
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    useEffect(() => {
        const remaining = Math.abs(endDate - startDate);
        const diffDays = Math.ceil(remaining / (1000 * 60 * 60 * 24));
        setDate(diffDays);
    })
    return (
        <div className="containerStyle">
            <Container>
                <Row>
                    <Col md={5}>
                        <p style={{fontSize: "58px", textTransform:"uppercase"}}> {placeName} </p>
                        <p className="text-justify"> {singlePlace.description} </p>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={5}>
                        <div>
                            <Form className="text-left formStyle">
                                <Form.Group controlId="formOrigin">
                                    <Form.Label> Origin</Form.Label>
                                    <Form.Control type="email" value="Dhaka" disabled/>
                                </Form.Group>
                                <Form.Group controlId="formDestination">
                                    <Form.Label>Destination</Form.Label>
                                    <Form.Control type="text" value={singlePlace.placeName} disabled/>
                                </Form.Group>
                                <Form.Group controlId="formDestination">
                                    <Row>
                                        <Col>
                                            <Form.Label>From</Form.Label>
                                                <DatePicker
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                                selectsStart
                                                startDate={startDate}
                                                endDate={endDate}/>
                                        </Col>
                                        <Col>
                                            <Form.Label>To</Form.Label>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={date => setEndDate(date)}
                                                selectsEnd
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={startDate}/>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Link to="/search"><Button className="submitButton" variant="primary" type="submit">
                                    Start Booking
                                </Button></Link>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;
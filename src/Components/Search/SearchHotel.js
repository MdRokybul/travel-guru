import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { StayingDate } from '../../App';

const hotelImage = {
    width: "255px",
    height: "177px"
}

const SearchHotel = (props) => {
    const {image, title, facility, cancellation, rating, price} = props.hotel;
    const [date, setDate] = useContext(StayingDate);
    const totalCost = price * date;
    return (
        <div className="mb-4">
            <Row>
                <Col md={5}>
                    <img style={hotelImage} src={image} alt=""/>
                </Col>
                <Col md={6} className="text-left ml-4">
                    <p style={{fontSize: "18px", fontWeight: "bold"}}> {title} </p>
                    <p> {facility} </p>
                    <p> {cancellation} </p>
                    <Row>
                        <Col md={3} className="text-left" style={{fontWeight: "bold"}}>
                            <p > {rating} </p>
                        </Col>
                        <Col md={5} className="p-0 text-center">
                            <span style={{fontWeight: "bold"}}> ${price}/</span><span>night</span>   
                        </Col>
                        <Col md={4} className="p-0 text-center">
                        <span> Total: ${totalCost} </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default SearchHotel;
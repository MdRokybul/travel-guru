import React, { useContext } from 'react';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PlaceName } from '../../App';
import placeData from '../../FakeData/Place';
import './Main.css'


const Main = () => {
    const [place, setPlace] = useContext(PlaceName);
    console.log(place)
    const placedata = placeData.map(singlePlace => singlePlace)
    return (
        <div className="areaStyle">
            <Container>
                <Row>
                    <div className="d-flex justify-content-center" style={{margin:"50px auto"}}>
                        {
                            placeData.map(singlePlace => 
                                <CardDeck style={{margin: "10px 20px"}}>
                                    <Link to="/booking">
                                        <Card onClick={() => setPlace(singlePlace.category)}>
                                            <Card.Img variant="top" src={singlePlace.image} />
                                            <Card.Body>
                                                <Card.Title> {singlePlace.placeName} </Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </CardDeck>
                            )
                        }
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Main;
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
            {/* <div className="d-flex justify-content-center">
                <Link to="/booking" onClick={() => setPlace("coxsbazar")}>
                    <div className="boxStyle coxsbazar">
                        <h3 className="text-light titleStyle"> COX'S BAZAR </h3>
                    </div>
                </Link>
                <Link to="/booking" onClick={() => setPlace("sreemangal")}>
                    <div className="boxStyle sreemangal">
                        <h3 className="text-light titleStyle"> SREEMANGAL </h3>
                    </div>
                </Link>
                <Link to="/booking" onClick={() => setPlace("sundarban")}>
                    <div className="boxStyle sundarban">
                        <h3 className="text-light titleStyle">SUNDARBAN</h3>
                    </div>
                </Link>
            </div> */}


            <Container>
                    <Row>
            <div className="d-flex justify-content-center" style={{margin:"10% auto"}}>
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
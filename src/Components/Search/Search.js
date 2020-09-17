import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PlaceName } from '../../App';
import hotelData from '../../FakeData/Hotel';
import SearchHotel from './SearchHotel';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';



const Search = (props) => {
    const [place, setPlace] = useContext(PlaceName);
    const [hotel, setHotel] = useState([]);
    const [displayPlace, setDisplayPlace] = useState("");
    const [location, setLocation] = useState({
        coxsbazar : false,
        sreemangal: false,
        sundarban: false,
    });
    useEffect(() => {
        const match = hotelData.filter(selectedHotel => selectedHotel.category === place)
        setHotel(match);
    },[place])

    useEffect(() => {
        if (place === "coxsbazar") {
            const displayPlace = "Cox's Bazar";
            setDisplayPlace(displayPlace);
            const newLocation = {...location};
            newLocation.coxsbazar = true;
            setLocation(newLocation);
        }
        if (place === "sreemangal") {
            const displayPlace = "Sreemangal";
            setDisplayPlace(displayPlace);
            const newLocation = {...location};
            newLocation.sreemangal = true;
            setLocation(newLocation);
        }
        if (place === "sundarban") {
            const displayPlace = "Sundarban";
            setDisplayPlace(displayPlace);
            const newLocation = {...location};
            newLocation.sundarban = true;
            setLocation(newLocation);
        }
    }, [])

    return (
        <Container>
            <h4 className="text-left mt-4">Stay in {displayPlace} </h4>
            <Row>
                <Col md={6}>
                    {
                        hotel.map(singleHotel =>  <SearchHotel hotel={singleHotel} key={singleHotel.id} ></SearchHotel>)
                    }
                </Col>
                <Col md={6} style={{width:'500px', height:'775px'}}>
                    {
                        location.coxsbazar && 
                        <Map
                            google={props.google}
                            initialCenter={{lat: 21.433920, lng: 91.987030}}
                            zoom={13}>
                            <Marker
                                name={'Dolores park'}
                                position={{lat: 21.433920, lng: 91.987030}} />
                            <Marker />
                        </Map>
                    }
                    {
                        location.sreemangal && 
                        <Map
                            google={props.google}
                            initialCenter={{lat: 24.310577, lng: 91.725136}}
                            zoom={13}>
                            <Marker
                                name={'Dolores park'}
                                position={{lat: 24.310577, lng: 91.725136}} />
                            <Marker />
                        </Map>
                    }
                    {
                        location.sundarban && 
                        <Map
                            google={props.google}
                            initialCenter={{lat: 21.968519, lng: 89.784058}}
                            zoom={13}>
                            <Marker
                                name={'Dolores park'}
                                position={{lat: 21.968519, lng: 89.784058}} />
                            <Marker />
                        </Map>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDklSagYkrYhOE4wpOelb6-rgxrHBcqCPI")
  })(Search)
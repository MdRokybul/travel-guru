import React, { useContext } from 'react';
import {Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Container > 
            <Navbar bg="transparent" expand="xl">
                <Navbar.Brand href="/">
                    <div className="navbarStyle">
                        <img src="https://firebasestorage.googleapis.com/v0/b/mdrokybul-travel-guru.appspot.com/o/Logo.png?alt=media&token=dc289308-08c5-47ef-ac1b-3452cdf9c17f" alt=""></img>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto navStyle">
                        <Link to="/">Home</Link>
                        <Link to="/">Destination</Link>
                        <Link to="#">Blog</Link>
                        <Link to="#">Contact</Link>
                        {
                            user.name ? <Link className="loginStyle" href="#link"> {user.name} </Link>
                            : <Link className="loginStyle" href="/login">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </Container>
    );
};

export default Header;
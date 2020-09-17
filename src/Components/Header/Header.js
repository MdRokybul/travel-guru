import React from 'react';
import {Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Container > 
            <Navbar bg="transparent" expand="xl">
                <Navbar.Brand href="/">
                    <div className="navbarStyle">
                        <img src="https://firebasestorage.googleapis.com/v0/b/my-app-login-14a73.appspot.com/o/Logo.png?alt=media&token=cba59d73-16c7-41ed-989c-edac78ef9374" alt=""></img>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav className="ml-auto navStyle">
                        <Nav.Link href="#">News</Nav.Link>
                        <Nav.Link href="#">Destination</Nav.Link>
                        <Nav.Link href="#">Blog</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                        <Nav.Link className="loginStyle" href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
      </Container>
    );
};

export default Header;
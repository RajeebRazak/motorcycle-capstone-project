/* eslint-disable react/jsx-no-undef */

import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";





function CustomNavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand to="#home">Hero</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link> 
            <Nav.Link as={Link} to="/spare">Spare's</Nav.Link> 
            <Nav.Link as={Link} to="/price">Service cost</Nav.Link>
            </Nav>
            <Nav>
            <Button className="ml-auto" variant="outline-primary">log out</Button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default CustomNavbar;

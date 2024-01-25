import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Admin() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Hero</Navbar.Brand>
            <Nav>
            <Button className="ml-auto" variant="outline-primary">log out</Button>
          </Nav>
            </Container>
            </Navbar>
    </>
  )
}

export default Admin
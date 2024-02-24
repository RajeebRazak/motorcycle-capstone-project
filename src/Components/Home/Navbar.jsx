/* eslint-disable react/jsx-no-undef */

import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link ,useNavigate } from "react-router-dom";
import { useState , useEffect  } from "react";
import axios from "axios";


function CustomNavbar() {
  const [firstName, setFirstName ] = useState('');
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchFirstName = async () => {
      try {
        const token = localStorage.getItem('token');
        if(!token){
          throw new Error ('Token not found');
        }
        // Fetch the first's name from the database 
        const response = await axios.get('/api', {
          headers: {
            Authorization: `Bearer ${token}` 
          },
        });
        setFirstName(response.data.firstName);
      } catch (error) {
        console.error("Error fetching first name",error);
        // Handle error gracefully, e.g., redirect to login page if unauthorized
        if (error.response && error.response.status === 401) {
          navigate('/login');
        }
      }
    };

    // Call the fetchFirstName function when the component mounts
    fetchFirstName();
  }, [navigate]);

  const handleLogout = async () => {
    try {
       // Perform logout actions, e.g., clearing local storage, redirecting to login page, etc.
      localStorage.removeItem('token');
    navigate('/login');
    } catch (error) {
      console.error("Error logging out",error);
      
    }
  };

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
            {firstName && (
              <Nav>
                <Navbar.Text className="text-light">
                  Welcome, {firstName}!
                </Navbar.Text>
              </Nav>
            )}
            <Nav>
            <Button className="ml-auto" variant="outline-primary" onClick={handleLogout}>log out</Button>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default CustomNavbar;

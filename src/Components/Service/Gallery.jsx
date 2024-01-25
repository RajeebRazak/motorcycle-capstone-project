import React from 'react'
import mechanic1 from '../Images/mechanic1.jpeg'
import mechanic2 from '../Images/mechanic2.jpeg'
import mechanic3 from '../Images/mechanic3.jpeg'
import mechanic4 from '../Images/mechanic4.jpeg'
import mechanic5 from '../Images/mechanic5.jpeg'
import mechanic6 from '../Images/mechanic6.jpeg'
import { Link } from 'react-router-dom'
import { Container , Navbar , Nav  } from 'react-bootstrap'


function Gallery() {
  return (<>
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Hero</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/service">Service</Nav.Link>
              <Nav.Link as={Link} to="/spare">Spare's</Nav.Link> 
              <Nav.Link as={Link} to="/price">Service cost</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    <div>
    <div class="row">
      <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
          src={mechanic1}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
    
        <img
          src={mechanic2}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>
    
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={mechanic3}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />
    
        <img
          src={mechanic4}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
      </div>
    
      <div class="col-lg-4 mb-4 mb-lg-0">
        <img
          src={mechanic5}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />
    
        <img
          src={mechanic6}
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
    </div>
    </>
  )
}

export default Gallery
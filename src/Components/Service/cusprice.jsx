import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Pricelist } from '../Price/Pricelist';



function Cusprice() {
  return (
    <div>
      <div>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Hero</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
          <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
          <Nav.Link as={Link} to="/service">Service</Nav.Link>
          <Nav.Link as={Link} to="/spare">Spare's</Nav.Link> 
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </div>
  <section className="py-1 bg-light">
            <div className="container px-4 px-lg-5 mt-1">
                <h2 className="fw-bolder mb-1">Price List</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-evenly">
                { Pricelist.map(service => (
                <div key={service.id} className="col mb-5">
                        <div className="card h-100">
                        
                            <img className="card-img-top" src={service.image} alt="..." />
                         
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">{service.serviceType}</h5>
                                    {service.details && ( <p>{service.details.join(', ')}</p>
                                    )}
                              
                                    ${service.price.toFixed(2)} 
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                </div>
                </section>
  </div>
  )
}

export default Cusprice
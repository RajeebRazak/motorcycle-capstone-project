import React from "react";
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Productlist } from "../Price/Productlist";

function Spare() {
  return (
    <>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">Hero</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
              <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/service">Service</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/price">Service cost</Nav.Link>
            </Nav>
            <Nav>
              <Button className="ml-auto" variant="outline-primary" typeof="submit">
                {" "}
                <i className="bi-cart-fill me-1"></i>
                Cart{" "}
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div>
      
      <section className="py-1 bg-light">
            <div className="container px-4 px-lg-5 mt-1">
                <h2 className="fw-bolder mb-1">Spare's</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-evenly">
                    { Productlist.map( product => (
                    <div key={product.id} className="col mb-5">
                        <div className="card h-100">
                        
                            <img className="card-img-top" src={product.image} alt="..." />
                         
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">{product.name}</h5>
                              
                                    ${product.price} 
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><Link className="btn btn-outline-dark mt-auto" to="#">Add to cart</Link></div>
                            </div>
                        </div>
                    </div>
                    
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
}

export default Spare;

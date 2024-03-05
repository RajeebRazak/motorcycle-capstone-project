import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Hero
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/contactus">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={Link} to="/service">
                  Service
                </Nav.Link>
                <Nav.Link as={Link} to="/spare">
                  Spare's
                </Nav.Link>
                <Nav.Link as={Link} to="/price">
                  Service cost
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="bg-white-900 text-black">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="https://media.istockphoto.com/id/488150958/photo/garage-owner.jpg?s=612x612&w=0&k=20&c=fmcJeM6iJMGC-rjxHrZgf6vaPkKDLb6ktzk-SVRzN7M="
                alt="Image"
                className="rounded-lg shadow-lg  w-full md:w-auto"
              />
            </div>

            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Us</h1>
              <h2 className="text-2xl mb-6">Hero Service Center</h2>
              <p className="mb-6">
                In the heart of Riding Renovation, a hidden gem emerges – the
                Heroic Bike Revival Center. A haven for two-wheel enthusiasts,
                this service center transcends the ordinary. Mechanics weave
                magic, transforming worn-out bikes into sleek road warriors.
                Here, every repair is a heroic tale, and every ride, a triumph
                reborn.
              </p>
              <ul className="mb-6">
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle"></i> Full Service
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle"></i> Washing
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle"></i> Wiring kit service
                </li>
                <li className="flex items-center space-x-2">
                  <i className="far fa-check-circle"></i> Engine repair
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="py-12 bg-cover bg-center"
          style={{ backgroundImage: "url('img/facts.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <i className="fa fa-map-marker-alt text-4xl mb-2"></i>
                <div>
                  <h3 className="text-3xl font-bold mb-2">25</h3>
                  <p>Service Points</p>
                </div>
              </div>
              <div className="text-center">
                <i className="fa fa-user text-4xl mb-2"></i>
                <div>
                  <h3 className="text-3xl font-bold mb-2">350</h3>
                  <p>Engineers & Workers</p>
                </div>
              </div>
              <div className="text-center">
                <i className="fa fa-users text-4xl mb-2"></i>
                <div>
                  <h3 className="text-3xl font-bold mb-2">1500</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="text-center">
                <i className="fa fa-check text-4xl mb-2"></i>
                <div>
                  <h3 className="text-3xl font-bold mb-2">5000</h3>
                  <p>Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <p className="text-lg">Meet Our Team</p>
            <h2 className="text-4xl font-bold">Our Engineers & Workers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://media.istockphoto.com/id/1283710598/photo/executive-businessman-studio-portrait.jpg?s=612x612&w=0&k=20&c=8fOAmSgWhEBd6jbEgmZdPYyGWESNFep3Zwz4i6LgGGM="
                  alt="Team Image"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Donald John</h2>
                <p>Engineer</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                  alt="Team Image"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Adam Phillips</h2>
                <p>Engineer</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://media.istockphoto.com/id/495827884/photo/you-are-the-creator-of-your-own-success.jpg?s=612x612&w=0&k=20&c=85c3fiwXwTIscqx2O00C2P4MIoWLtmyXRCWoQ5LZ1Cw="
                  alt="Team Image"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Thomas Olsen</h2>
                <p>Worker</p>
              </div>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <img
                  src="https://media.istockphoto.com/id/1848942451/photo/portrait-of-formal-business-man-confident-successful-indian-businessman-or-manager-in-light.jpg?s=1024x1024&w=is&k=20&c=KJqYv2q3QfZiW-mLlhMFV-OFupYM7ACDH1m5Iv6I4Bo="
                  alt="Team Image"
                  className="rounded-full w-32 h-32 mx-auto mb-4"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">James Alien</h2>
                <p>Worker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;

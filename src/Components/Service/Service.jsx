import React from 'react'
import { Link } from 'react-router-dom'
import { Container , Navbar , Nav } from 'react-bootstrap'
import { useState } from 'react'

function Service() {
 const [formData, setFormData] = useState([]);

 const handleFormSubmit = (data) => {
  setFormData((prevFormData) => [...prevFormData, data]);
  console.log("Form data added to state:", data);
};

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">Hero</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
        <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
        <Nav.Link as={Link} to="/spare">Spare's</Nav.Link> 
        <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        <Nav.Link as={Link} to="/price">Service cost</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  
  <div className="overflow-x-auto">
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b">Date Of Booking</th>
        <th className="py-2 px-4 border-b">Category Of Vehicle</th>
        <th className="py-2 px-4 border-b">Bike Model</th>
        <th className="py-2 px-4 border-b">Year</th>
        <th className="py-2 px-4 border-b">Type Of Service</th>
        <th className="py-2 px-4 border-b">Customer Complaints</th>
        <th className="py-2 px-4 border-b">Status</th>
        <th className="py-2 px-4 border-b">Payment</th>
      </tr>
    </thead>
    <tbody>
      {formData.map((data, index) => (
      <tr key={index}> 
        <td className="py-2 px-4 border-b">{data.dateofbooking}</td>
        <td className="py-2 px-4 border-b">{data.categoryofvehicle}</td>
        <td className="py-2 px-4 border-b">{data.bikemodel}</td>
        <td className="py-2 px-4 border-b">{data.year}</td>
        <td className="py-2 px-4 border-b">{data.typeofservice}</td>
        <td className="py-2 px-4 border-b">{data.customercomplaint.join(", ")}</td>
        <td className="py-2 px-4 border-b">{data.status}</td>
        <td className="py-2 px-4 border-b">{data.payment}</td>
      </tr>
      ))}
    </tbody>
  </table>
</div>
 

  </div>
  )
}

export default Service
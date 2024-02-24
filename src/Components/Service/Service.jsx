import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

function Service() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3005/form/forms");
        console.log("Response data:", response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial

  const handleApproval = async (index) => {
    try {
      const updatedFormData = [...formData];
      updatedFormData[index].status = "approved";
      setFormData(updatedFormData);

      // Update status in backend
      await axios.put(
        `http://localhost:3005/form/forms/${updatedFormData[index]._id}`,
        {
          status: "approved",
        }
      );
    } catch (error) {
      console.error("Error updating form data", error);
    }
  };

  const handlePayment = async (index) => {
    try {
    } catch (error) {}
  };

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Hero
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/aboutus">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/spare">
              Spare's
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/price">
              Service cost
            </Nav.Link>
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
                <td className="py-2 px-4 border-b">
                  {data.customerComplaints
                    ? data.customerComplaints.join(", ")
                    : ""}
                </td>
                <td className="py-2 px-4 border-b">{data.status}</td>
                <td className="py-2 px-4 border-b">
                  {data.status === "pending" && (
                    <Button
                      variant="success"
                      onClick={() => handleApproval(index)}
                    >
                      Approve
                    </Button>
                  )}
                  {data.status === "approved" && (
                    <Button
                      variant="primary"
                      onClick={() => handlePayment(index)}
                    >
                      Pay Now
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Service;

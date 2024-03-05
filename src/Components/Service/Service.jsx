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
        const response = await axios.get("http://localhost:3001/form/forms");
        console.log("Response data:", response.data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data", error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once after initial

  const handlePayment = async (index) => {
    try {
      // Fetch updated data from the backend
      const response = await axios.get("http://localhost:3001/form/forms");
      const updatedFormData = response.data;

      // Assuming your data structure has a field named 'status'
      // Check if the status is 'approved'
      if (updatedFormData[index].status === "approved") {
        // Update the payment status locally
        const updatedFormDataCopy = [...updatedFormData];
        updatedFormDataCopy[index].paymentStatus = "paid";
        setFormData(updatedFormDataCopy);

        // Process the payment
        // You can add your payment processing logic here
        console.log("Payment processed successfully");
      } else {
        console.log("Cannot process payment for pending requests");
      }
    } catch (error) {
      console.error("Error processing payment", error);
    }
  };

  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" expand="md">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Hero
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
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
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Date Of Booking
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Category Of Vehicle
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Bike Model
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Year
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Type Of Service
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Customer Complaints
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {formData.map((data, index) => (
              <tr key={index}>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.dateofbooking}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.categoryofvehicle}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.bikemodel}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">{data.year}</td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.typeofservice}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.customerComplaints
                    ? data.customerComplaints.join(", ")
                    : ""}
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  <span
                    className={
                      data.status === "pending"
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {data.status === "pending" ? "Pending" : "Approved"}
                  </span>
                </td>
                <td className="py-4 px-4 whitespace-nowrap">
                  {data.status === "approved" &&
                    data.paymentStatus !== "paid" && (
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500"
                        onClick={() => handlePayment(index)}
                      >
                        Pay Now
                      </button>
                    )}
                  {data.paymentStatus === "paid" && (
                    <span className="text-green-500">Paid</span>
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

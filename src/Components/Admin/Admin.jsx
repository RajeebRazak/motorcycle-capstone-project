import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState([]);

  const [status, setStatus] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from backend API
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3004/form/forms");
        console.log("Response data", response.data);
        const data = response.data;
        setStatus(response.data);
        console.log(data);
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching form data", error);
      }
    };
    fetchData();
  }, []);

  const handleApproval = async (index, status) => {
    console.log(status);

    try {
      const updatedFormData = formData.map((item, i) =>
        i === index ? { ...item, status: "approved" } : item
      );
      setFormData(updatedFormData);
      console.log(updatedFormData[index]);

      // Update the status in backend data
      const serviceIdToUpdate = updatedFormData[index].serviceId; // Get the serviceId of the form entry
      const response = await axios.put(
        `http://localhost:3004/admin/forms/${serviceIdToUpdate}`,
        {
          status: "approved",
        }
      );
      // Update only the status in formData with the response status
      const updatedFormDataWithStatus = updatedFormData.map((item, i) =>
        i === index ? { ...item, status: response.data.status } : item
      );
      setFormData(updatedFormDataWithStatus);
    } catch (error) {
      console.error("Error updating from data", error);
    }
  };

  const handleLogout = () => {
    try {
      // Perform logout actions, e.g., clearing local storage, redirecting to login page, etc.
      //localStorage.removeItem("token");
      console.log("logged out");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Hero
          </Navbar.Brand>
          <Nav>
            <Button
              className="ml-auto"
              variant="outline-primary"
              onClick={handleLogout}
            >
              Admin Log out
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-300 divide-y divide-gray-200">
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
                    <button
                      onClick={() => handleApproval(index, data.status)}
                      className="bg-blue-500 hover:bg-blue-700 text-black py-1 px-2 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    >
                      {data.status}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;

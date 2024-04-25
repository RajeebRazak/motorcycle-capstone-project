import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cusform() {
  const [formData, setFormData] = useState([]);

  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    dateofbooking: Yup.string().required("Required"),
    categoryofvehicle: Yup.string().required("Required"),
    bikemodel: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
    typeofservice: Yup.string().required("Required"),
    customerComplaint: Yup.string().min(1,
      "At least one complaint is required"
    ),
  });

  const onSubmit = async (values) => {
    try {
      // Send the form data to the backend using axios.
      const response = await axios.post(
        "http://localhost:3004/form/forms/submit",
        values
      );
      console.log("Response from server", response.data);
      alert("Service booked successfully");
      navigate("/service");
      console.log("Form reset completed");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("service booking failed. Please try again");
    }
  };

  return (
    <Formik
      initialValues={{
        dateofbooking: "",
        categoryofvehicle: "",
        bikemodel: "",
        year: "",
        typeofservice: "",
        customerComplaints: [],
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      <div className="min-w-md mx-auto max-h-screen overflow-center">
        <Form className="flex flex-col space-y-4">
          <div className="mb-0">
            <label htmlFor="dateofbooking" className="block font-bold">
              Date Of Booking
            </label>
            <Field
              type="date"
              name="dateofbooking"
              className="form-input"
              placeholder="Select Booking Date"
              id="dateofbooking"
            />
            <ErrorMessage
              name="dateofbooking"
              component="div"
              className="text-red-500 text-sm"
            />

            <label htmlFor="categoryofvehicle" className="block font-bold">
              Category Of Vehicle
            </label>
            <Field
              as="select"
              name="categoryofvehicle"
              className="form-select"
              id="categoryofvehicle"
            >
              <option value="">Select The Category</option>
              <option value="Bike">Bike</option>
              <option value="Scooty">Scooty</option>
            </Field>
            <ErrorMessage
              name="categoryofvehicle"
              component="div"
              className="text-red-500 text-sm"
            />

            <label htmlFor="bikemodel" className="block font-bold">
              Bike Model
            </label>
            <Field
              as="select"
              name="bikemodel"
              className="form-select"
              id="bikemodel"
            >
              <option value="">Select BikeModel</option>
              <option value="Hero Splendor Plus Xtec">
                Hero Splendor Plus Xtec
              </option>
              <option value="Hero HF Deluxe">Hero HF Deluxe</option>
              <option value="Hero Xpulse 200 4V">Hero Xpulse 200 4V</option>
              <option value="Hero Super Splendor">Hero Super Splendor</option>
              <option value="Hero Glamour">Hero Glamour</option>
              <option value="Hero Xtreme 160R">Hero Xtreme 160R</option>
              <option value="Hero Pleasure Plus">Hero Pleasure Plus</option>
              <option value="Hero Xoom 110">Hero Xoom 110</option>
              <option value="Hero Passion Plus">Hero Passion Plus</option>
              <option value="Hero Karizma XMR">Hero Karizma XMR</option>
            </Field>
            <ErrorMessage
              name="bikemodel"
              component="div"
              className="text-red-500 text-sm"
            />

            <label htmlFor="year" className="block font-bold">
              Year
            </label>
            <Field as="select" name="year" className="form-select" id="year">
              <option value="">Select the Year</option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
            </Field>
            <ErrorMessage
              name="year"
              component="div"
              className="text-red-500 text-sm"
            />

            <label htmlFor="typeofservice" className="block font-bold">
              Type Of Service
            </label>
            <Field
              as="select"
              name="typeofservice"
              className="form-select"
              id="typeofservice"
            >
              <option value="">Select Type Of Service </option>
              <option value="engineoilchange">Engine Oil Change only</option>
              <option value="checkupservice">Check up service</option>
              <option value="brakeinspection">
                Brake Inspection and replacements
              </option>
              <option value="chainsprocketkit">
                Chain Sprocket Kit replacement
              </option>
              <option value="sparkplugreplacement">
                Spark Plug Replacement
              </option>
              <option value="fullservice">Full Service</option>
              <option value="washingonly">Washing Only</option>
              <option value="enginerepair">Engine Repair</option>
              <option value="wiringkitservice">wiring kit service</option>
            </Field>
            <ErrorMessage
              name="typeofservice"
              component="div"
              className="text-red-500 text-sm"
            />

            <label htmlFor="customerComplaint" className="block font-bold">
              Additional Complaints
            </label>
            <Field
              as="textarea"
              className="form-textarea"
              name="customerComplaint"
              id="customerComplaint"
              placeholder="Write Your Additional Complaints"
              rows="5"
            />
            <ErrorMessage
              name="customerComplaint"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <Button
            type="submit"
            className="btn bg-blue-500 text-black py-1 px-4 rounded-md w-full mt-1"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Formik>
  );
}
export default Cusform;

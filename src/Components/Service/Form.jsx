import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function Cusform() {
  const [formData, setFormData] = useState([]);

  const SignupSchema = Yup.object().shape({
    dateofbooking: Yup.string().required("Required"),
    categoryofvehicle: Yup.string().required("Required"),
    bikemodel: Yup.string().required("Required"),
    year: Yup.string().required("Required"),
    typeofservice: Yup.string().required("Required"),
    customerComplaint: Yup.array().required(
      "At least one complaint is required"
    ),
  });

  const onSubmit = async (values, actions) => {
    try {
      console.log("Form values:", values);
      setFormData((prevFormData) => [...prevFormData, values]); // Add form data to state
      window.alert("Form submitted successfully!");
      actions.resetForm();
      console.log("Form reset completed");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      dateofbooking: "",
      categoryofvehicle: "",
      bikemodel: "",
      year: "",
      typeofservice: "",
      customerComplaint: "",
    },
    validationSchema: SignupSchema,
    onSubmit: onSubmit,
  });

  return (
    <Formik
      initialValues={formik.initialValues}
      validationSchema={formik.validationSchema}
      onSubmit={formik.onSubmit}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="dateofbooking">Date Of Booking</label>
          <Field
            type="date"
            name="dateofbooking"
            className="form-control"
            placeholder="Select Booking Date"
            id="dateofbooking"
          />
          <ErrorMessage
            name="dateofbooking"
            component="div"
            className="invalid-feedback "
          />
        </div>
        <div className="form-group">
          <label htmlFor="categoryofvehicle"> Category Of Vehicle</label>
          <select
            className="form-control"
            id="categoryofvehicle"
            name="categoryofvehicle"
          >
            <option value="">Select The Category</option>
            <option value="Bike">Bike</option>
            <option value="Scooty">Scooty</option>
          </select>
          <ErrorMessage
            name="categoryofvehicle"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bikemodel">Bike Model</label>
          <select name="bikemodel" className="form-control" id="bikemodel">
            <option value="">Select BikeModel</option>
            <option value="Hero Splendor Plus Xtec">
              Hero Splendor Plus Xtec
            </option>
            <option value="Hero HF Deluxe">Hero HF Deluxe</option>
            <option value="Hero Xpulse 200 4V">Hero Xpulse 200 4V</option>
            <option value="4Hero Super Splendor">4Hero Super Splendor</option>
            <option value="5Hero Glamour">5Hero Glamour</option>
            <option value="6Hero Xtreme 160R">6Hero Xtreme 160R</option>
            <option value="7Hero Pleasure Plus">7Hero Pleasure Plus</option>
            <option value="Hero Xoom 110">Hero Xoom 110</option>
            <option value="Hero Passion Plus">Hero Passion Plus</option>
            <option value="10Hero Karizma XMR">10Hero Karizma XMR</option>
          </select>
          <ErrorMessage
            name="bikemodel"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <select name="year" className="form-control" id="year">
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
          </select>
          <ErrorMessage
            name="year"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label htmlFor="typeofservice">Type Of Service</label>
          <select
            name="typeofservice"
            className="form-control"
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
            <option value="sparkplugreplacement">Spark Plug Replacement</option>
            <option value="fullservice">Full Service</option>
            <option value="washingonly">Washing Only</option>
            <option value="enginerepair">Engine Repair</option>
            <option value="wiringkitservice">wiring kit service</option>
          </select>
          <ErrorMessage
            name="typeofservice"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <div className="form-group">
          <label className="block mb-2 font-bold mx-2 ">
            Additional Complaints
          </label>

          <Field
            as="textarea"
            className="form-control"
            name="customerComplaint"
            id="customerComplaint"
            placeholder="Write Your Additional Complaints"
            rows="5"
          />
          <ErrorMessage
            name="customerComplaint"
            component="div"
            className="invalid-feedback"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mx-2 my-2 cursor-pointer"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}
export default Cusform;

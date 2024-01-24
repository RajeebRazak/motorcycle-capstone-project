import React from "react";
import mech from "../Images/mech.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../Service/Popup";

function Footer() {
   
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleBookNowClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleFormSubmit = (values, actions) => {
    console.log('Form submitted with values:', values);
    // Custom logic after form submission
    alert('Form submitted successfully!');
    // Reset the form after submission
    actions.resetForm();
    // Close the popup
    setPopupOpen(false);
  };
  return (
    <div className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col md-6 head">
            <h4>Riding Renovation: Heroic Bike Revival Center</h4>
            <p className="cont">
              In the heart of Riding Renovation, a hidden gem emerges – the
              Heroic Bike Revival Center. A haven for two-wheel enthusiasts,
              this service center transcends the ordinary. Mechanics weave
              magic, transforming worn-out bikes into sleek road warriors. Here,
              every repair is a heroic tale, and every ride, a triumph reborn.
            </p>
           
            <div>
          <Link to="#" className="book" onClick={handleBookNowClick}>
            Book Now
          </Link>
          {isPopupOpen && (
            <Popup isOpen={isPopupOpen} onClose={handlePopupClose} onSubmit={handleFormSubmit} />
          )}
        </div>
          </div>
          <div className="col md-6">
            <div className="relative group">
              <img
                src={mech}
                alt="mechanic"
                className="transition-transform transform-gpu group-hover:-translate-y-1 bg-black"
              />
            </div>
          </div>
        </div>
       
        <div className="col ">
          <div className="row">
            <div className="col md-6">
              <h5 className="text-2xl font-bold mb-4">Contact Us</h5>
              <form>
                <label className="block mb-1">Email</label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="Your email here"
                />
                <label className="block mb-1">Name</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your name"
                />
                <label className="block mb-1">Contact Number</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Contact number"
                />
                <button className="btn bg-blue-500 text-black py-2 px-4 rounded">
                  Submit
                </button>
              </form>
            </div>

            <div className="col md-6 ">
              <h5>Address</h5>
              <p className="cont">
                1234 Main St, Suite 100
                <br />
                San Francisco, CA 94103
                <br />
                +12 0983985
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

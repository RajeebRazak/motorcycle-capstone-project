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
    console.log("Form submitted with values:", values);
    // Custom logic after form submission
    alert("Form submitted successfully!");
    // Reset the form after submission
    actions.resetForm();
    // Close the popup
    setPopupOpen(false);
  };
  return (
    <div className="footer bg-gray-100">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="head">
            <h4 className="text-xl md:text-2xl font-bold">
              Riding Renovation: Heroic Bike Revival Center
            </h4>
            <p className="cont text-sm md:text-base mt-4 md:mt-6">
              In the heart of Riding Renovation, a hidden gem emerges – the
              Heroic Bike Revival Center. A haven for two-wheel enthusiasts,
              this service center transcends the ordinary. Mechanics weave
              magic, transforming worn-out bikes into sleek road warriors. Here,
              every repair is a heroic tale, and every ride, a triumph reborn.
            </p>
            <div className="mt-6">
              <button
                onClick={handleBookNowClick}
                className="book bg-blue-500 text-white py-2 px-6 rounded-md"
              >
                Book Now
              </button>
              {isPopupOpen && (
                <Popup
                  isOpen={isPopupOpen}
                  onClose={handlePopupClose}
                  onSubmit={handleFormSubmit}
                />
              )}
            </div>
          </div>
          <div className="relative group ml-0">
            <img
              src={mech}
              alt="mechanic"
              className="w-full md:max-w-none md:h-auto transition-transform transform-gpu group-hover:-translate-y-1 bg-black rounded-lg ml-0"
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h5 className="text-xl font-bold mb-4">Contact Us</h5>
              <form>
                <label className="block mb-2">Email</label>
                <input
                  className="form-input mb-4 w-full border-gray-300 rounded-md"
                  type="email"
                  placeholder="Your email here"
                  id="email"
                />
                <label className="block mb-2">Name</label>
                <input
                  className="form-input mb-4 w-full border-gray-300 rounded-md"
                  type="text"
                  placeholder="Your name"
                  id="name"
                />
                <label className="block mb-2">Contact Number</label>
                <input
                  className="form-input mb-4 w-full border-gray-300 rounded-md"
                  type="text"
                  placeholder="Contact number"
                  id="contact"
                />
                <button className="btn bg-blue-500 text-white py-2 px-4 rounded-md">
                  Submit
                </button>
              </form>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-4">Address</h5>
              <p className="cont text-sm md:text-base">
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

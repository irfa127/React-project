import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaBirthdayCake,
} from "react-icons/fa";
import { NavLink, useParams } from "react-router-dom";
import { flightDetailsData } from "../../data/data";
import SwitchAirline from "./SwitchAirline";

const PassengerForm = () => {
  const [gender, setGender] = useState("Male");
  const { id } = useParams();

  // Selected Flight
  const flight =
    flightDetailsData.find((item) => item.id === Number(id)) ||
    flightDetailsData[0];

  // Price Calculation
  const baseFare = Number(flight.price.replace(/[₹,]/g, ""));
  const taxes = Number(flight.taxes.replace(/[₹,]/g, ""));
  const seatCharge = 0;

  const total = baseFare + taxes + seatCharge;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
       
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-md space-y-8">
       
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Passenger Details
            </h2>
            <p className="text-gray-500 mt-1">
              Fill in traveler information carefully.
            </p>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-500">
                FULL NAME *
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
                <FaUser className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Enter full name"
                  defaultValue="Irfana"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">AGE</label>

              <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
                <FaBirthdayCake className="text-gray-400 mr-3" />

                <input
                  type="number"
                  placeholder="Age"
                  defaultValue="20"
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>

        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium text-gray-500">
                EMAIL *
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
                <FaEnvelope className="text-gray-400 mr-3" />

                <input
                  type="email"
                  placeholder="Enter email"
                  defaultValue="irfana@gmail.com"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-500">
                PHONE *
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 mt-2">
                <FaPhone className="text-gray-400 mr-3" />

                <input
                  type="text"
                  placeholder="Phone number"
                  defaultValue="9876543210"
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>

     
          <div>
            <label className="text-sm font-medium text-gray-500 block mb-3">
              GENDER
            </label>

            <div className="flex flex-wrap gap-3">
              {["Male", "Female", "Other"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setGender(item)}
                  className={`px-5 py-2 rounded-xl border transition ${
                    gender === item
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

         
          <div className="bg-yellow-50 border border-yellow-300 text-yellow-700 p-4 rounded-xl">
            Please verify passenger name exactly as per ID proof.
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Price Breakdown
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex justify-between">
              <p>Base Fare</p>
              <p>₹{baseFare.toLocaleString("en-IN")}</p>
            </div>

            <div className="flex justify-between">
              <p>Taxes & Fees</p>
              <p>₹{taxes.toLocaleString("en-IN")}</p>
            </div>

            <div className="flex justify-between">
              <p>Seat Selection</p>
              <p>₹{seatCharge}</p>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-xl font-bold text-gray-900">
            <p>Total</p>
            <p>₹{total.toLocaleString("en-IN")}</p>
          </div>

          <p className="text-gray-400 text-sm mt-2">
            1 passenger · all inclusive
          </p>

     
          <NavLink to={`/payment/${id}`}>
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
              Proceed to Payment →
            </button>
          </NavLink>

          <p className="text-gray-500 text-sm mt-5 flex items-center justify-center gap-2">
            <FaLock className="text-green-500" />
            Secure booking & free cancellation before 24h
          </p>
        </div>
      </div>

   
      <SwitchAirline />
    </div>
  );
};

export default PassengerForm;

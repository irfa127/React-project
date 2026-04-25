import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaCreditCard,
  FaLock,
  FaPlane,
  FaPlaneDeparture,
  FaPlaneArrival,
  FaClock,
  FaChair,
  FaRupeeSign,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import { flightDetailsData } from "../data/data";

const ConfirmPayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] =
    useState("Credit Card");

  const flight =
    flightDetailsData.find(
      (item) => item.id === Number(id)
    ) || flightDetailsData[0];

  const handlePayNow = () => {
    const baseFare = Number(
      flight.price.replace(/[₹,]/g, "")
    );

    const taxes = Number(
      flight.taxes.replace(/[₹,]/g, "")
    );

    const total = baseFare + taxes;

    const bookingId = `AERO-${Date.now()}`;

    const seatRows = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];

    const seatCols = ["A", "B", "C", "D", "E", "F"];

    const randomSeat =
      seatRows[
        Math.floor(Math.random() * seatRows.length)
      ] +
      seatCols[
        Math.floor(Math.random() * seatCols.length)
      ];

    const today = new Date();

    const dateStr = `${String(
      today.getDate()
    ).padStart(2, "0")}/${String(
      today.getMonth() + 1
    ).padStart(2, "0")}/${today.getFullYear()}`;

    const newBooking = {
      id: bookingId,
      flightId: flight.id,

      airline: (
        <div className="flex items-center gap-2">
          <FaPlane className="text-blue-500" />
          <span>{flight.aircraft}</span>
        </div>
      ),

      code: `${flight.from}-${flight.to}`,

      from: (
        <div className="flex items-center gap-2">
          <FaPlaneDeparture className="text-green-500" />
          <span>
            {flight.from} {flight.departTime}
          </span>
        </div>
      ),

      to: (
        <div className="flex items-center gap-2">
          <FaPlaneArrival className="text-red-500" />
          <span>
            {flight.arriveTime} {flight.to}
          </span>
        </div>
      ),

      time: (
        <div className="flex items-center gap-2">
          <FaClock className="text-blue-500" />
          <span>
            {flight.departTime} → {flight.arriveTime}
          </span>
        </div>
      ),

      duration: flight.duration,

      seat: (
        <div className="flex items-center gap-2">
          <FaChair className="text-orange-500" />
          <span>{randomSeat}</span>
        </div>
      ),

      price: (
        <div className="flex items-center gap-2">
          <FaRupeeSign className="text-green-600" />
          <span>
            {total.toLocaleString("en-IN")}
          </span>
        </div>
      ),

      payment: (
        <div className="flex items-center gap-2">
          <FaCreditCard className="text-blue-500" />
          <span>{paymentMethod}</span>
        </div>
      ),

      status: (
        <div className="flex items-center gap-2 text-green-600">
          <FaCheckCircle />
          <span>Confirmed</span>
        </div>
      ),

      color: "blue",

      date: (
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-gray-500" />
          <span>{dateStr}</span>
        </div>
      ),

      fromCode: flight.from,
      toCode: flight.to,
      departTime: flight.departTime,
      arriveTime: flight.arriveTime,
    };

    const existingBookings =
      JSON.parse(
        localStorage.getItem("myBookings")
      ) || [];

    existingBookings.push(newBooking);

    localStorage.setItem(
      "myBookings",
      JSON.stringify(existingBookings)
    );

    navigate(`/booking-success/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Payment Details
        </h1>

        {/* Flight Summary */}
        <div className="bg-blue-50 rounded-xl p-4 mb-6">
          <p className="text-sm text-gray-500">
            Selected Flight
          </p>

          <p className="font-semibold text-lg">
            {flight.aircraft}
          </p>

          <p className="text-gray-600">
            {flight.from} → {flight.to}
          </p>

          <p className="text-sm text-gray-500">
            {flight.departTime} - {flight.arriveTime}
          </p>
        </div>

        {/* Payment Method */}
        <div className="mb-5">
          <p className="text-sm font-medium mb-3">
            PAYMENT METHOD
          </p>

          <div className="flex gap-3">
            {[
              "Credit Card",
              "Debit Card",
              "UPI",
            ].map((method) => (
              <button
                key={method}
                onClick={() =>
                  setPaymentMethod(method)
                }
                className={`px-4 py-2 rounded-xl border ${
                  paymentMethod === method
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Card Holder Name"
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-3 rounded-xl"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="border p-3 rounded-xl"
            />

            <input
              type="text"
              placeholder="CVV"
              className="border p-3 rounded-xl"
            />
          </div>
        </div>

        {/* Pay */}
        <button
          onClick={handlePayNow}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700"
        >
          Pay Now
        </button>

        <p className="text-sm text-gray-500 mt-4 flex justify-center items-center gap-2">
          <FaLock className="text-green-500" />
          100% Secure Payment
        </p>
      </div>
    </div>
  );
};

export default ConfirmPayment;
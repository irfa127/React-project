import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { flightDetailsData } from "../data/data";

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const flight =
    flightDetailsData.find((f) => f.id === Number(id)) || flightDetailsData[0];

  const total =
    Number(flight.price.replace(/[₹,]/g, "")) +
    Number(flight.taxes.replace(/[₹,]/g, ""));

  const handlePay = async () => {
    const bookingData = {
      // Fields expected by Mongoose Model:
      name: "AeroTrip Passenger", // hardcoded as UI doesn't have these inputs yet
      email: "passenger@aerotrip.com",
      source: flight.from,
      destination: flight.to,
      date: new Date(),
      passengers: 1,
      price: total,
      
      // Extra fields for UI compatibility if needed by BookingCard:
      id: `AERO-${Date.now()}`,
      airline: "AeroTrip Airlines",
      code: "FL-2024",
      fromCode: flight.from.substring(0, 3).toUpperCase(),
      toCode: flight.to.substring(0, 3).toUpperCase(),
      time: `${flight.departTime} → ${flight.arriveTime}`,
      payment: paymentMethod,
      status: "Confirmed",
    };

    try {
      // 1. Send data to MongoDB
      const response = await fetch("http://localhost:8000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // 2. Fallback for success page
        const old = JSON.parse(localStorage.getItem("myBookings")) || [];
        localStorage.setItem("myBookings", JSON.stringify([...old, bookingData]));
        
        // 3. Navigate to success
        navigate(`/booking-success/${id}`);
      } else {
        alert("Booking failed: " + result.message);
      }
    } catch (error) {
      console.error("Error saving booking:", error);
      alert("Error connecting to server!");
    }
  };

  return (
    <div className=" min-h-screen  flex items-center justify-center p-6 bg-[url('/image.png')]  bg-cover bg-center">
      <div className="absolute inset-0 z-0"></div>

      <div className="relative bg-white p-8 rounded-3xl shadow-2xl w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Payment Details</h1>

        <div className="bg-white/20 p-4 rounded-xl mb-6">
          <p className="text-sm">Flight</p>

          <p className="font-bold text-lg">{flight.aircraft}</p>

          <p>
            {flight.from} TO {flight.to}
          </p>

          <p className="text-sm">
            {flight.departTime} - {flight.arriveTime}
          </p>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-2xl">Payment Method</p>

          <div className="flex gap-3">
            {["Credit Card", "Debit Card", "UPI"].map((m) => (
              <button
                key={m}
                onClick={() => setPaymentMethod(m)}
                className={`px-3 py-2 rounded-lg border ${
                  paymentMethod === m ? "bg-blue-200" : "bg-white/20"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <input
            className="w-full p-3 rounded-xl text-black"
            placeholder="Card Holder Name"
          />

          <input
            className="w-full p-3 rounded-xl text-black"
            placeholder="Card Number"
          />

          <div className="grid grid-cols-2 gap-3">
            <input className="p-3 rounded-xl text-black" placeholder="MM/YY" />
            <input className="p-3 rounded-xl text-black" placeholder="CVV" />
          </div>
        </div>

        <div className="flex justify-between mt-6 font-bold text-lg">
          <p>Total</p>
          <p>₹{total.toLocaleString("en-IN")}</p>
        </div>

        <button
          onClick={handlePay}
          className="w-full mt-6 bg-blue-300 py-3 rounded-xl font-bold hover:bg-blue-700 hover:text-white"
        >
          Pay Now
        </button>

        <p className="text-xs text-center mt-3 flex items-center justify-center gap-2">
          <FaLock /> 100% Secure Payment
        </p>
      </div>
    </div>
  );
};

export default PaymentPage; 

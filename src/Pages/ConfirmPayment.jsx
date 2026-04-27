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

  const clean = (val) => Number(val.replace(/[₹,]/g, ""));

  const total = clean(flight.price) + clean(flight.taxes);

  const handlePay = () => {
    const booking = {
      id: `AERO-${Date.now()}`,
      from: flight.from,
      to: flight.to,
      time: `${flight.departTime} → ${flight.arriveTime}`,
      price: total,
      payment: paymentMethod,
      status: "Confirmed",
      date: new Date().toLocaleDateString("en-IN"),
    };

    const old = JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem("bookings", JSON.stringify([...old, booking]));

    navigate(`/booking-success/${id}`);
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
            {flight.from} → {flight.to}
          </p>

          <p className="text-sm">
            {flight.departTime} - {flight.arriveTime}
          </p>
        </div>

        {/* payment methods */}
        <div className="mb-5">
          <p className="mb-2 text-sm">Payment Method</p>

          <div className="flex gap-3">
            {["Credit Card", "Debit Card", "UPI"].map((m) => (
              <button
                key={m}
                onClick={() => setPaymentMethod(m)}
                className={`px-3 py-2 rounded-lg border ${
                  paymentMethod === m ? "bg-blue-600" : "bg-white/20"
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
          className="w-full mt-6 bg-green-600 py-3 rounded-xl font-bold hover:bg-green-700"
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

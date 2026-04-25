
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { FaCheckCircle, FaPlaneDeparture } from "react-icons/fa";


const BookingSuccess = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);

  useEffect(() => {
   
    const storedBookings =
      JSON.parse(localStorage.getItem("myBookings")) || [];

    if (storedBookings.length > 0) {
     
      setBooking(storedBookings[storedBookings.length - 1]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl p-10 text-center">
    
        <div className="flex justify-center mb-5">
          <FaCheckCircle className="text-green-500 text-7xl" />
        </div>

     
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Booking Confirmed!
        </h1>

        <p className="text-gray-500 text-lg mb-6">
          Your flight ticket has been booked successfully.
        </p>

      
        <div className="bg-gray-50 rounded-2xl p-5 mb-6 space-y-3">
          <div className="flex justify-between">
            <p className="text-gray-500">Booking ID</p>
            <p className="font-semibold">
              {booking ? booking.id : `AERO-${id}X2026`}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Flight</p>
            <p className="font-semibold">
              {booking
                ? `${booking.airline} · ${booking.code}`
                : "—"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Route</p>
            <p className="font-semibold">
              {booking
                ? `${booking.fromCode} → ${booking.toCode}`
                : "—"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Seat</p>
            <p className="font-semibold">
              {booking ? booking.seat : "—"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Amount Paid</p>
            <p className="text-blue-600 font-semibold">
              {booking ? booking.price : "—"}
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Status</p>
            <p className="text-green-600 font-semibold">
              Confirmed
            </p>
          </div>

          <div className="flex justify-between">
            <p className="text-gray-500">Payment</p>
            <p className="text-blue-600 font-semibold">
              Successful
            </p>
          </div>
        </div>

       
        <div className="space-y-3">
          <NavLink to="/mybookings">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
              View My Bookings
            </button>
          </NavLink>

          <NavLink to="/">
            <button className="w-full border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition mt-3">
              Back to Home
            </button>
          </NavLink>
        </div>

     
        <p className="text-sm text-gray-400 mt-6 flex items-center justify-center gap-2">
          <FaPlaneDeparture />
          Have a safe journey <FaPlaneDeparture/>
        </p>
      </div>
    </div>
  );
};

export default BookingSuccess;
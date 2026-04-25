import React from "react";
import { useParams } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import FlightDetails from "../../Components/ConfirmBooking/FlightDetails";
import Footer from "../../Components/Footer/Footer";
import { flightDetailsData } from "../../data/data";

const ConfirmBookings = () => {
  const { id } = useParams();

  const flight =
    flightDetailsData.find((item) => item.id === Number(id)) ||
    flightDetailsData[0];

  const seats = [
    {
      type: "Business",
      count: 8,
      price: "+₹2000",
      color: "text-purple-600",
      border: "border-purple-300",
      bg: "bg-purple-50",
    },
    {
      type: "Premium",
      count: 12,
      price: "+₹800",
      color: "text-blue-600",
      border: "border-blue-300",
      bg: "bg-blue-50",
    },
    {
      type: "Preferred",
      count: 23,
      price: "+₹300",
      color: "text-green-600",
      border: "border-green-300",
      bg: "bg-green-50",
    },
    {
      type: "Economy",
      count: 47,
      price: "Included",
      color: "text-gray-700",
      border: "border-gray-300",
      bg: "bg-gray-50",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
  
      <div className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 md:px-20 py-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
     
          <div className="bg-white text-blue-700 w-20 h-20 rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg">
            {flight.from}
          </div>

        
          <div>
            <h1 className="text-3xl font-bold">{flight.aircraft}</h1>
            <p className="text-lg font-medium mt-1">
              {flight.from} - {flight.to}
            </p>
            <p className="text-sm text-blue-100">
              {flight.departTime} - {flight.arriveTime}
            </p>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-6 py-8">
        <FlightDetails />
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-10 space-y-8 relative bottom-158">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500 font-semibold mb-6 text-lg">
            SEAT AVAILABILITY
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {seats.map((seat, index) => (
              <div
                key={index}
                className={`rounded-xl p-5 text-center border ${seat.border} ${seat.bg}`}
              >
                <h3 className={`font-semibold text-lg ${seat.color}`}>
                  {seat.type}
                </h3>

                <h1 className="text-3xl font-bold mt-2">{seat.count}</h1>

                <p className="text-gray-500 text-sm">Seats Left</p>

                <p className={`mt-2 font-semibold ${seat.color}`}>
                  {seat.price}
                </p>
              </div>
            ))}
          </div>
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-gray-500 font-semibold mb-6 text-lg">
            CANCELLATION POLICY
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2 text-gray-600">
                <FaCircle className="text-green-400 text-xs" />
                Before 24 hours
              </p>
              <p className="text-green-600 font-medium">
                ₹500 cancellation fee
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2 text-gray-600">
                <FaCircle className="text-orange-400 text-xs" />
                24h to 4h before
              </p>
              <p className="text-orange-500 font-medium">
                ₹1,500 cancellation fee
              </p>
            </div>

            <div className="flex justify-between items-center">
              <p className="flex items-center gap-2 text-gray-600">
                <FaCircle className="text-red-400 text-xs" />
                Within 4 hours
              </p>
              <p className="text-red-500 font-medium">Non-refundable</p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default ConfirmBookings;
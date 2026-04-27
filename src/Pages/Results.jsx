
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // If user directly opens /results without search
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">
          No Search Data Found
        </h1>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  const { from, to, date, passengers } = state;

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      {/* HEADER */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">

        <h1 className="text-3xl font-bold mb-4">
          Flight Results
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

          <div>
            <p className="text-gray-500">From</p>
            <p className="font-semibold">{from}</p>
          </div>

          <div>
            <p className="text-gray-500">To</p>
            <p className="font-semibold">{to}</p>
          </div>

          <div>
            <p className="text-gray-500">Date</p>
            <p className="font-semibold">{date}</p>
          </div>

          <div>
            <p className="text-gray-500">Passengers</p>
            <p className="font-semibold">{passengers}</p>
          </div>

        </div>
      </div>

      {/* FLIGHT CARDS */}
      <div className="space-y-4">

        {/* Card 1 */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">

          <div>
            <h2 className="font-bold text-lg">Indigo Airlines</h2>
            <p className="text-gray-500 text-sm">
              {from} → {to}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">₹5,499</p>
            <p className="text-sm text-gray-500">2h 30m</p>
          </div>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-xl">
            Book
          </button>

        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">

          <div>
            <h2 className="font-bold text-lg">Air India</h2>
            <p className="text-gray-500 text-sm">
              {from} → {to}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">₹6,200</p>
            <p className="text-sm text-gray-500">2h 45m</p>
          </div>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-xl">
            Book
          </button>

        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">

          <div>
            <h2 className="font-bold text-lg">SpiceJet</h2>
            <p className="text-gray-500 text-sm">
              {from} → {to}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xl font-bold text-blue-600">₹4,799</p>
            <p className="text-sm text-gray-500">2h 20m</p>
          </div>

          <button className="px-5 py-2 bg-blue-600 text-white rounded-xl">
            Book
          </button>

        </div>

      </div>

    </div>
  );
};

export default Results;
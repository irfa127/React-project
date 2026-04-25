import React from "react";
import { NavLink } from "react-router-dom";

const SwitchAirline = () => {
  const airlines = [
    {
      id: 1,
      code: "AI",
      name: "Air India AI-101",
      time: "09:30 → 12:00 · 2h 30m",
      price: "₹5,800",
      color: "bg-red-500",
    },
    {
      id: 2,
      code: "UK",
      name: "Vistara UK-821",
      time: "14:45 → 17:00 · 2h 15m",
      price: "₹6,100",
      color: "bg-purple-600",
    },
    {
      id: 3,
      code: "SG",
      name: "SpiceJet SG-203",
      time: "18:00 → 20:30 · 2h 30m",
      price: "₹3,999",
      color: "bg-red-400",
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">
          Switch to Another Airline?
        </h2>

        <p className="text-gray-500 mb-6">
          Same route — compare alternatives before booking
        </p>

        <div className="space-y-4">
          {airlines.map((airline) => (
            <div
              key={airline.id}
              className="flex justify-between items-center border rounded-xl p-4 hover:shadow-sm transition"
            >
            
              <div className="flex items-center gap-4">
                <div
                  className={`${airline.color} text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold`}
                >
                  {airline.code}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {airline.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {airline.time}
                  </p>
                </div>
              </div>

           
              <div className="text-right">
                <h2 className="font-bold text-lg">
                  {airline.price}
                </h2>

                <NavLink to={`/airlines/${airline.id}`}>
                  <p className="text-blue-500 text-sm cursor-pointer hover:text-blue-700 font-medium">
                    Switch →
                  </p>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchAirline;
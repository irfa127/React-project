import React from "react";

const Popuor = () => {
  const routes = [
    {
      id: 1,
      from: "Mumbai",
      to: "Delhi",
      flights: 24,
      price: "₹3,999",
    },
    {
      id: 2,
      from: "Delhi",
      to: "Bangalore",
      flights: 18,
      price: "₹4,100",
    },
    {
      id: 3,
      from: "Mumbai",
      to: "Kolkata",
      flights: 12,
      price: "₹5,200",
    },
    {
      id: 4,
      from: "Mumbai",
      to: "Goa",
      flights: 20,
      price: "₹2,999",
    },
    {
      id: 5,
      from: "Delhi",
      to: "Hyderabad",
      flights: 15,
      price: "₹3,799",
    },
    {
      id: 6,
      from: "Bangalore",
      to: "Mumbai",
      flights: 22,
      price: "₹3,500",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 px-10 py-10">
      {routes.map((e) => {
        return (
          <div
            key={e.id}
            className="flex justify-between items-center bg-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
        
            <div>
              <h1 className="font-semibold text-lg">
                {e.from} <span className="text-gray-400">→</span> {e.to}
              </h1>
              <p className="text-sm text-gray-500">{e.flights} flights daily</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm">from</p>
              <h1 className="text-blue-500 font-bold text-lg">{e.price}</h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popuor;

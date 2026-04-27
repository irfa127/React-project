import React from "react";
import { routes } from "../../data/data";
const Popular = () => {
  return (
    <div className="grid grid-cols-3 gap-6 px-10 py-10">
      {routes.map((e) => {
        return (
          <div
            key={e.id}
            className="flex justify-between items-center bg-gray-100 p-5 rounded-2xl transition duration-300"
          >
            <div>
              <h1 className="font-semibold text-lg">
                {e.from} <span className="text-gray-400">to</span> {e.to}
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

export default Popular;

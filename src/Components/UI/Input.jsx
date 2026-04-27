import React, { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";

const airports = [
  { id: 1, name: "Chennai International Airport", city: "Chennai", code: "MAA" },
  { id: 2, name: "Indira Gandhi International Airport", city: "Delhi", code: "DEL" },
  { id: 3, name: "Chhatrapati Shivaji Maharaj International Airport", city: "Mumbai", code: "BOM" },
  { id: 4, name: "Kempegowda International Airport", city: "Bangalore", code: "BLR" },
];

const FlightSearchInput = ({ label, value, setValue }) => {
  const [open, setOpen] = useState(false);

  const search = (value || "").toLowerCase();

  const filteredAirports = airports.filter((item) => {
    const name = (item.name || "").toLowerCase();
    const city = (item.city || "").toLowerCase();
    const code = (item.code || "").toLowerCase();

    return (
      name.includes(search) ||
      city.includes(search) ||
      code.includes(search)
    );
  });

  const handleSelect = (airport) => {
    setValue(`${airport.city} (${airport.code})`);
    setOpen(false);
  };

  return (
    <div className="relative w-full">

      {/* Label */}
      <label className="block text-sm font-semibold mb-2 text-gray-600">
        {label}
      </label>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder={`Search ${label}`}
          className="w-full border px-4 py-3 rounded-xl outline-none focus:border-blue-500"
        />

        <IoMdArrowDropdownCircle
          onClick={() => setOpen(!open)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl text-blue-500 cursor-pointer"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto">

          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport) => (
              <div
                key={airport.id}
                onMouseDown={() => handleSelect(airport)}
                className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex justify-between"
              >
                <div>
                  <p className="font-medium text-sm">
                    {airport.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {airport.name}
                  </p>
                </div>

                <span className="text-xs font-bold bg-gray-100 px-2 py-1 rounded">
                  {airport.code}
                </span>
              </div>
            ))
          ) : (
            <div className="p-3 text-sm text-gray-400">
              No airports found
            </div>
          )}

        </div>
      )}
    </div>
  );
};

export default FlightSearchInput;
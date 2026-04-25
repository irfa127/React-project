import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const airports = [
  {
    id: 1,
    name: "Chhatrapati Shivaji Maharaj International Airport",
    city: "Mumbai, India",
    code: "BOM",
  },
  {
    id: 2,
    name: "Indira Gandhi International Airport",
    city: "Delhi, India",
    code: "DEL",
  },
  {
    id: 3,
    name: "Kempegowda International Airport",
    city: "Bangalore, India",
    code: "BLR",
  },
  {
    id: 4,
    name: "Chennai International Airport",
    city: "Chennai, India",
    code: "MAA",
  },
];

const Input = ({ type }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const wrapperRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", close);

    return () =>
      document.removeEventListener("mousedown", close);
  }, []);

  const filteredAirports = airports.filter(
    (item) =>
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.city.toLowerCase().includes(value.toLowerCase()) ||
      item.code.toLowerCase().includes(value.toLowerCase())
  );


  const handleSelect = (airport) => {
    setValue(`${airport.name} (${airport.code})`);
    setOpen(false);
  };


  const handleSearch = () => {
    const found = airports.find(
      (item) =>
        value.includes(item.code) ||
        value.toLowerCase().includes(item.name.toLowerCase())
    );

    if (found) {
      navigate(`/airlines/${found.id}`);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={wrapperRef}>
      <label className="text-lg font-semibold mb-2 block">
        {type}
      </label>

      <div className="relative">
        <input
          type="text"
          value={value}
          placeholder={`Select ${type}`}
          onChange={(e) => {
            setValue(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          className="w-full border px-4 py-3 rounded-xl"
        />

    
        <IoMdArrowDropdownCircle
          onClick={handleSearch}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-blue-500 cursor-pointer hover:scale-110 transition"
        />
      </div>

  
      {open && (
        <div className="absolute w-full bg-white shadow-xl rounded-xl mt-2 z-50 max-h-72 overflow-y-auto">
          {filteredAirports.map((airport) => (
            <div
              key={airport.id}
              onMouseDown={() => handleSelect(airport)}
              className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex justify-between"
            >
              <div>
                <p className="font-semibold text-sm">
                  {airport.name}
                </p>
                <p className="text-xs text-gray-500">
                  {airport.city}
                </p>
              </div>

              <span className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">
                {airport.code}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Input;
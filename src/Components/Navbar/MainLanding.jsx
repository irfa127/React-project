import React, { useState } from "react";
import { MdFlightLand } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar_Full = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Flights", path: "/" },
    { name: "Airlines", path: "/airlines/1" },
    { name: "My Booking", path: "/mybookings" },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
   
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <Link to="/" className="flex items-center gap-2">
          <MdFlightLand className="text-4xl text-blue-600" />

          <h1 className="text-3xl font-bold text-gray-800">
            Aero <span className="text-blue-600">Trip</span>
          </h1>
        </Link>

      
        <nav className="hidden lg:flex gap-8 items-center">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium transition hover:text-blue-600 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

    
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-700"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar_Full;
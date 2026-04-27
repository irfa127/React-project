import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Airline from "../../Components/Airlines/Airline";
import Popular from "../../Components/Popular/Popular";
import About from "../../Components/About/About";
import FlightSearchInput from "../../Components/UI/Input";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import Video from "../../assets/AeroTrip_Animated_Intro_Video_Creation (1).mp4";

const Home = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const { id } = useParams();

  const searchFlights = () => {
    navigate(`airlines/${id}`, {
      state: { from, to, date, passengers },
    });
  };

  return (
    <div className="overflow-x-hidden bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Glass Card Container */}
        <div className="relative z-10 w-[92%] md:w-[80%] lg:w-[70%] 
                        bg-white/10 backdrop-blur-xl 
                        border border-white/20 
                        rounded-3xl shadow-2xl 
                        p-8 md:p-12 text-center text-white">

          {/* Text */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Fly Smarter
          </h1>

          <h2 className="text-blue-400 text-5xl md:text-7xl font-bold mt-3">
            Book Faster
          </h2>

          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-2xl mx-auto">
            Compare flights from 500+ airlines. Find the best prices with zero hidden fees.
          </p>

          {/* ================= SEARCH BOX ================= */}
          <div className="mt-10 bg-white rounded-2xl shadow-xl p-6 text-black">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

              <FlightSearchInput label="From" value={from} setValue={setFrom} />

              <div className="flex justify-center">
                <button className="bg-blue-100 p-4 rounded-full hover:scale-110 transition">
                  <IoSwapHorizontalSharp className="text-3xl text-blue-600" />
                </button>
              </div>

              <FlightSearchInput label="To" value={to} setValue={setTo} />

            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Departure Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border w-full px-4 py-3 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Passengers
                </label>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="border w-full px-4 py-3 rounded-xl"
                >
                  <option value="">Select</option>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5 Adults</option>
                  <option value="6">6 Adults</option>
                </select>
              </div>

            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={searchFlights}
                disabled={!from || !to}
                className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400"
              >
                Search Flights
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ================= AIRLINES ================= */}
      <section className="py-20 px-6 md:px-12">
        <Airline />
      </section>

      {/* ================= POPULAR ROUTES ================= */}
      <section className="py-20 bg-gray-50 px-6 md:px-12">

        <div className="text-center mb-14">
          <h1 className="font-bold text-4xl md:text-5xl">
            Popular <span className="text-blue-500">Routes</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mt-4">
            Top destinations our travelers love
          </p>
        </div>

        <Popular />
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 md:px-12">
        <About />
      </section>

    </div>
  );
};

export default Home;
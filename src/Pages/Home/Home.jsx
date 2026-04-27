import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Airline from "../../Components/Airlines/Airline";
import Popular from "../../Components/Popular/Popular";
import About from "../../Components/About/About";

import FlightSearchInput from "../../Components/UI/Input";

import { IoSwapHorizontalSharp } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState("");

  const swap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };
  const { id } = useParams();

  const searchFlights = () => {
    navigate(`airlines/${id}`, {
      state: {
        from,
        to,
        date,
        passengers,
      },
    });
  };

  return (
    <div className="overflow-x-hidden bg-white">
      <section className="relative bg-[url('/image.png')] bg-cover bg-center min-h-screen">
        <div className="text-center pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Fly Smarter
          </h1>

          <h2 className="text-blue-500 text-5xl md:text-8xl font-bold mt-3">
            Book Faster
          </h2>

          <p className="text-lg md:text-2xl text-gray-300 mt-6 max-w-4xl mx-auto">
            Compare flights from 500+ airlines. Find the best prices with zero
            hidden fees.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-14 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <FlightSearchInput label="From" value={from} setValue={setFrom} />

            <div className="flex justify-center">
              <button
                onClick={swap}
                className="bg-blue-100 p-4 rounded-full hover:scale-110 transition"
              >
                <IoSwapHorizontalSharp className="text-3xl text-blue-600" />
              </button>
            </div>

            <FlightSearchInput label="To" value={to} setValue={setTo} />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold mb-2">
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
              <label className="block text-lg font-semibold mb-2">
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

          <div className="flex justify-center mt-10">
            <button
              onClick={searchFlights}
              disabled={!from || !to}
              className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:bg-gray-400"
            >
              Search Flights
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-14 max-w-5xl mx-auto">
          <div className="bg-white/10 rounded-2xl py-6">
            <h1 className="text-3xl font-bold text-white">500+</h1>
            <p className="text-gray-300 mt-2">Airlines</p>
          </div>

          <div className="bg-white/10 rounded-2xl py-6">
            <h1 className="text-3xl font-bold text-white">10M+</h1>
            <p className="text-gray-300 mt-2">Happy Travelers</p>
          </div>

          <div className="bg-white/10 rounded-2xl py-6">
            <h1 className="text-3xl font-bold text-white">200+</h1>
            <p className="text-gray-300 mt-2">Destinations</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <Airline />
      </section>

      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <section className="py-20 bg-gray-50 px-6 md:px-12">
          <div className="text-center mb-14">
            <h1 className="font-bold text-4xl md:text-5xl">
              Popular <span className="text-blue-500">Routes</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl mt-4">
              Top destinations our travelers love
            </p>
          </div>
        </section>
        <Popular />
      </section>

      <section className="py-20 px-6 md:px-12">
        <About />
      </section>
    </div>
  );
};

export default Home;

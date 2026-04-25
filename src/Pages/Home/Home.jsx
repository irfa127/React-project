import React from "react";
import Airline from "../../Components/Airlines/Airline";
import Popuor from "../../Components/Populor/Popuor";
import About from "../../Components/About/About";
import Input from "../../Components/UI/Input";
import Date from "../../Components/UI/Date";
import { IoSwapHorizontalSharp } from "react-icons/io5";
import { FaSearch, FaPlaneDeparture } from "react-icons/fa";

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      <section className="bg-[url('/image.png')] bg-cover bg-center bg-no-repeat min-h-screen relative">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6 md:px-12 pt-16">
          <div className="text-center flex flex-col items-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold">
              Fly Smarter
            </h1>

            <h2 className="text-blue-500 text-5xl md:text-8xl font-bold mt-3">
              Book Faster
            </h2>

            <p className="text-lg md:text-2xl text-gray-300 mt-6 max-w-4xl leading-relaxed">
              Compare flights from 500+ airlines. Find the best prices with zero
              hidden fees.
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl mt-14 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <Input type="From" />

              <div className="flex justify-center">
                <button className="bg-blue-100 hover:bg-blue-200 transition p-4 rounded-full">
                  <IoSwapHorizontalSharp className="text-3xl text-blue-600" />
                </button>
              </div>

              <Input type="To" />
            </div>

            <div className="mt-8">
              <Date />
            </div>

            <div className="flex justify-center mt-8">
              <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 transition rounded-full text-white font-semibold text-lg shadow-lg flex items-center gap-3">
                <FaSearch />
                Search Flights
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-14 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-6">
              <h1 className="text-3xl font-bold text-white">500+</h1>
              <p className="text-gray-300 mt-2">Airlines</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-6">
              <h1 className="text-3xl font-bold text-white">10M+</h1>
              <p className="text-gray-300 mt-2">Happy Travelers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl py-6">
              <h1 className="text-3xl font-bold text-white">200+</h1>
              <p className="text-gray-300 mt-2">Destinations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <Airline />
      </section>

      <section className="py-20 bg-gray-50 px-6 md:px-12">
        <div className="text-center mb-14">
          <h1 className="font-bold text-4xl md:text-5xl">
            Popular <span className="text-blue-500">Routes</span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl mt-4">
            Top destinations our travelers love
          </p>
        </div>

        <Popuor />
      </section>

      <section className="py-20 px-6 md:px-12">
        <About />
      </section>
    </div>
  );
};

export default Home;

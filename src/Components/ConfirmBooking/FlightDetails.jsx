import {
  FaPlane,
  FaSuitcaseRolling,
  FaClock,
  FaUtensils,
  FaShieldAlt,
  FaInfoCircle,
  FaStar,
  FaCheckCircle
} from "react-icons/fa";

import { useParams, NavLink } from "react-router-dom";
import { flightDetailsData } from "../../data/data.js";

const FlightDetails = () => {
  const { id } = useParams();

  const flight =
    flightDetailsData.find((f) => f.id === Number(id)) || flightDetailsData[0];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <p className="text-gray-400 text-sm mb-4 font-semibold">
              FLIGHT ROUTE
            </p>

            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div>
                <h1 className="text-4xl font-bold">{flight.departTime}</h1>

                <p className="font-bold text-lg">{flight.from}</p>

                <p className="text-gray-500 text-sm max-w-xs">
                  {flight.fromFull}
                </p>

                <p className="bg-gray-100 px-3 py-1 rounded-full text-sm mt-3 inline-block">
                  {flight.terminal}
                </p>
              </div>

              <div className="flex flex-col items-center w-full lg:w-1/3">
                <p className="text-gray-500 text-sm">{flight.duration}</p>

                <div className="flex items-center w-full">
                  <div className="flex-1 border-t border-dashed border-gray-300"></div>

                  <FaPlane className="mx-2 text-blue-500 rotate-90" />

                  <div className="flex-1 border-t border-dashed border-gray-300"></div>
                </div>
                <p className="text-green-600 text-sm font-medium flex items-center gap-2">
                  <FaCheckCircle />
                  Non-stop
                </p>
              </div>

              <div className="text-right">
                <h1 className="text-4xl font-bold">{flight.arriveTime}</h1>

                <p className="font-bold text-lg">{flight.to}</p>

                <p className="text-gray-500 text-sm max-w-xs">
                  {flight.toFull}
                </p>
              </div>
            </div>
          </div>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaSuitcaseRolling className="text-blue-500" />
              <span>{flight.baggage}</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaUtensils className="text-blue-500" />
              <span>{flight.meal}</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaClock className="text-blue-500" />
              <span>{flight.duration}</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaShieldAlt className="text-blue-500" />
              <span>Free before 24h</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaInfoCircle className="text-blue-500" />
              <span>{flight.aircraft}</span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-3">
              <FaStar className="text-yellow-500" />
              <span>{flight.rating}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow h-fit sticky top-5">
          <h2 className="text-xl font-bold mb-5">Price Summary</h2>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-gray-500">Ticket Price</p>
              <p>{flight.price}</p>
            </div>

            <div className="flex justify-between">
              <p className="text-gray-500">Taxes</p>
              <p>{flight.taxes}</p>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>{flight.price}</p>
          </div>

          <NavLink to={`/passenger/${id}`}>
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
              <FaPlane />
              Book Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;

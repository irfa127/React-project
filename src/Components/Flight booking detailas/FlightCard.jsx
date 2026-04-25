import { FaPlane, FaSuitcaseRolling, FaClock, FaChair } from "react-icons/fa";
import { useParams, NavLink } from "react-router-dom";
import { flightDetailsData } from "../../data/data";

const FlightCard = () => {
  const { id } = useParams();

  const flight =
    flightDetailsData.find((item) => item.id === Number(id)) ||
    flightDetailsData[0];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
        <div className="flex items-center gap-4 w-full lg:w-auto">
          <div className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-xl font-bold text-lg">
            {flight.from}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{flight.departTime}</h2>
            <p className="font-semibold">{flight.from}</p>
            <p className="text-gray-500 text-sm max-w-xs">{flight.fromFull}</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-1/3">
          <p className="text-gray-500 text-sm">{flight.duration}</p>

          <div className="flex items-center w-full">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <FaPlane className="mx-2 text-blue-500 rotate-90" />
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <p className="text-green-500 text-sm font-medium">Non-stop</p>
        </div>

        <div className="text-right w-full lg:w-auto">
          <h2 className="text-2xl font-bold">{flight.arriveTime}</h2>
          <p className="font-semibold">{flight.to}</p>
          <p className="text-gray-500 text-sm max-w-xs">{flight.toFull}</p>
        </div>

        <div className="text-right w-full lg:w-auto">
          <p className="text-gray-400 text-sm">Starting from</p>

          <h2 className="text-2xl font-bold text-blue-600">{flight.price}</h2>

          <p className="text-gray-400 text-xs">+ {flight.taxes}</p>

          <NavLink to={`/mybookings/${id}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg mt-3 transition w-full lg:w-auto">
              Select
            </button>
          </NavLink>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 text-gray-600 text-sm border-t pt-4">
        <p className="flex items-center gap-2">
          <FaSuitcaseRolling className="text-blue-500" />
          {flight.baggage}
        </p>

        <p className="flex items-center gap-2">
          <FaClock className="text-blue-500" />
          {flight.duration}
        </p>

        <p className="flex items-center gap-2">
          <FaChair className="text-blue-500" />
          {flight.meal}
        </p>

        <p className="font-medium text-right">{flight.aircraft}</p>
      </div>
    </div>
  );
};

export default FlightCard;

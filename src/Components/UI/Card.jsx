import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Card = () => {

  const airlines = [
    { id: 5, code: "6E", name: "IndiGo", type: "Budget Carrier", rating: 4.2, color: "bg-blue-600" },
    { id: 2, code: "AI", name: "Air India", type: "National Carrier", rating: 3.9, color: "bg-red-600" },
    { id: 3, code: "SG", name: "SpiceJet", type: "Budget Carrier", rating: 3.7, color: "bg-red-500" },
    { id: 1, code: "EK", name: "Emirates", type: "Luxury International", rating: 4.8, color: "bg-red-600" },
    { id: 4, code: "QR", name: "Qatar Airways", type: "5-Star Airline", rating: 4.9, color: "bg-purple-900" }
  ];

  return (
    <div className="flex gap-6 flex-wrap justify-center my-20">

      {airlines.map((e) => (
        <NavLink key={e.id} to={`/airlines/${e.id}`}>
          
          <div className="w-60 p-6 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.2)] text-center hover:scale-105 transition duration-300">
            
            <div className={`${e.color} text-white w-16 h-16 flex items-center justify-center rounded-xl mx-auto`}>
              {e.code}
            </div>

            <h1 className="mt-3 font-bold text-lg">{e.name}</h1>
            <p className="text-sm text-gray-500">{e.type}</p>

            <div className="flex items-center justify-center gap-1 mt-4 text-yellow-500">
              <CiStar className="size-5" />
              <span>{e.rating}</span>
            </div>

          </div>

        </NavLink>
      ))}

    </div>
  );
};

export default Card;
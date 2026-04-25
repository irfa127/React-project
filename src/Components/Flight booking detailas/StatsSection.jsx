import { FaPlane, FaClock, FaStar, FaShieldAlt } from "react-icons/fa";

const StatsSection = ({ title, value }) => {
  return (
    <div className="grid grid-cols-4 gap-6 p-10 bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 w-100">
        <div className="bg-blue-600 text-white p-3 rounded-xl">
          <FaPlane />
        </div>
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h2 className="font-bold text-lg">{value}</h2>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;


import React from "react";
import { FiSearch } from "react-icons/fi";

const BookingFilter = ({
  bookings = [],
  activeFilter,
  setActiveFilter,
  searchQuery,
  setSearchQuery,
}) => {
  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;
  const pending = bookings.filter((b) => b.status === "Pending").length;

  const filters = [
    { label: "All", value: "All", count: total },
    { label: "Confirmed", value: "Confirmed", count: confirmed },
    { label: "Pending", value: "Pending", count: pending },
    { label: "Cancelled", value: "Cancelled", count: cancelled },
  ];

  return (
    <div className="bg-white p-4 rounded-2xl shadow flex flex-col md:flex-row gap-4 items-center">
      {/* Search */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-full md:w-1/2">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search by ID or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeFilter === filter.value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {filter.label}
            {filter.count > 0 ? ` (${filter.count})` : ""}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookingFilter;
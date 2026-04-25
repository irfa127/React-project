
import React from "react";

const BookingStats = ({ bookings = [] }) => {
  const total = bookings.length;
  const confirmed = bookings.filter((b) => b.status === "Confirmed").length;
  const cancelled = bookings.filter((b) => b.status === "Cancelled").length;
  const pending = bookings.filter((b) => b.status === "Pending").length;

  return (
    <div className="flex gap-4 mt-6">
      <div className="bg-[#3a4b7a] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">{total}</h2>
        <p className="text-sm text-gray-300">Total</p>
      </div>

      <div className="bg-[#1f6f78] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">{confirmed}</h2>
        <p className="text-sm text-gray-300">Confirmed</p>
      </div>

      {pending > 0 && (
        <div className="bg-[#8a6d3b] px-6 py-4 rounded-xl text-center">
          <h2 className="text-2xl font-bold">{pending}</h2>
          <p className="text-sm text-gray-300">Pending</p>
        </div>
      )}

      <div className="bg-[#6b3a5f] px-6 py-4 rounded-xl text-center">
        <h2 className="text-2xl font-bold">{cancelled}</h2>
        <p className="text-sm text-gray-300">Cancelled</p>
      </div>
    </div>
  );
};

export default BookingStats;
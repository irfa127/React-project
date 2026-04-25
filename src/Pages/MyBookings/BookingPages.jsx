import React, { useEffect, useState } from "react";
import BookingStats from "../../Components/MyBookings/BookingStatus";
import BookingFilter from "../../Components/MyBookings/BookingFillter";
import BookingCard from "../../Components/UI/BookingCard";
import Footer from "../../Components/Footer/Footer";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const storedBookings =
      JSON.parse(localStorage.getItem("myBookings")) || [];

    setBookings(storedBookings);
  }, []);

  // Handle Cancel Booking
  const handleCancel = (bookingId) => {
    const updatedBookings = bookings.map((b) =>
      b.id === bookingId ? { ...b, status: "Cancelled" } : b
    );
    setBookings(updatedBookings);
    localStorage.setItem("myBookings", JSON.stringify(updatedBookings));
  };


  const filteredByStatus =
    activeFilter === "All"
      ? bookings
      : bookings.filter((b) => b.status === activeFilter);

  const filteredBookings = filteredByStatus.filter((b) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      (b.id && b.id.toLowerCase().includes(query)) ||
      (b.airline && b.airline.toLowerCase().includes(query)) ||
      (b.code && b.code.toLowerCase().includes(query)) ||
      (b.fromCode && b.fromCode.toLowerCase().includes(query)) ||
      (b.toCode && b.toCode.toLowerCase().includes(query))
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen">
    
      <div className="bg-[#1f2f5a] text-white px-6 md:px-16 py-10">
        <h1 className="text-3xl font-bold">My Bookings</h1>

        <p className="text-gray-300 mt-2">
          All your flight bookings in one place
        </p>

  
        <BookingStats bookings={bookings} />
      </div>

    
      <div className="px-6 md:px-16 -mt-8">
        <BookingFilter
          bookings={bookings}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

   
      <div className="px-6 md:px-16 mt-6 space-y-6 pb-10">
        {filteredBookings.length > 0 ? (
          filteredBookings.map((item, index) => (
            <BookingCard key={index} data={item} onCancel={handleCancel} />
          ))
        ) : (
          <div className="bg-white rounded-2xl shadow p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              {bookings.length === 0
                ? "No Bookings Yet ✈️"
                : "No matching bookings found"}
            </h2>

            <p className="text-gray-500 mt-2">
              {bookings.length === 0
                ? "Once you book flights, they will appear here automatically."
                : "Try a different search or filter."}
            </p>
          </div>
        )}
      </div>

  
    </div>
  );
};

export default BookingsPage;
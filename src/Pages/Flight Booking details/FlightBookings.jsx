import React from "react";
import { useParams } from "react-router-dom";
import AirlineHeader from "../../Components/Flight booking detailas/AirlineHeader";
import StatsSection from "../../Components/Flight booking detailas/StatsSection";
import FlightCard from "../../Components/Flight booking detailas/FlightCard";
import Card from "../../Components/UI/Card";
import { flights, stats } from "../../data/data";

const FlightBookings_Detail = () => {
  const { id } = useParams();

  const selectedFlight =
    flights.find((item) => item.id === Number(id)) || flights[0];

  const selectedStats =
    stats.find((item) => item.id === Number(id)) || stats[0];

  return (
    <div className="bg-gray-50 min-h-screen">
      <AirlineHeader id={id} />

      <section className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedStats?.data?.map((item) => (
            <StatsSection key={item.id} title={item.title} value={item.value} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-14">
        <div className="space-y-6">
          {selectedFlight?.data?.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16">
        <Card />
      </section>
    </div>
  );
};

export default FlightBookings_Detail;

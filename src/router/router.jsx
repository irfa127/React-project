import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import MyBookings from '../Pages/MyBookings/MyBookings';
import FlightBookings_Detail from '../Pages/Flight Booking details/FlightBookings';
import ConfirmBookings from '../Pages/ConfirmBooking/ConfirmBooking';
import Passenger from '../Pages/Payment/Passenger'
import Payment from '../Pages/ConfirmPayment'
import BookingSuccess from '../Pages/BookingSucces';



const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {index:true , Component:Home},
        {path:"airlines/:id" , Component:FlightBookings_Detail},
        {path:"passenger/:id" , Component:Passenger},
        {path:"mybookings/:id" , Component:ConfirmBookings},
        {path:"mybookings/" , Component:MyBookings},
         { path: "payment/:id", Component: Payment },

      { path: "booking-success/:id", Component: BookingSuccess },
    ]
  },
]);



export default router
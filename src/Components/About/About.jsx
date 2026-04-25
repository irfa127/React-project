import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";

const About = () => {
  const features = [
    {
      id: 1,
      title: "Best Price Guarantee",
      desc: "We compare thousands of routes to find you the lowest fares. Price drop? We'll refund the difference.",
      icon: <FaChartLine/>,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Secure & Trusted",
      desc: "256-bit SSL encryption, PCI DSS compliant payments. Your data is always safe with us.",
      icon: <FaShieldAlt/>,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Instant Booking",
      desc: "Book your flight in under 3 minutes. Instant confirmation with e-ticket sent to your inbox.",
      icon: <FaBolt/>,
      color: "bg-orange-500",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold ml-200">
          Why <span className="text-blue-500">AeroTrip</span>

        </h1>
        <p className="text-3xl  ml-140 font-mono p-5">Everything you need for a perfect journey</p>
        <div className="grid grid-cols-3 gap-8 px-10 py-16">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-blue-300 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
             
              <div
                className={`${item.color} text-white w-14 h-14 flex items-center justify-center rounded-xl shadow-md`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>

             
              <h1 className="mt-5 text-xl font-bold">{item.title}</h1>

          
              <p className="mt-3 text-black leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

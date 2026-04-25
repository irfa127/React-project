
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPlaneDeparture,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#1f2f5a] text-gray-300 px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaPlaneDeparture className="text-cyan-400 text-2xl" />
            <h2 className="text-xl font-bold text-white">
              Sky<span className="text-cyan-400">Book</span>
            </h2>
          </div>

          <p className="text-sm leading-6 mb-5">
            Your trusted flight booking partner.
            <br />
            Find the best deals across 500+ airlines worldwide.
          </p>

          <div className="flex gap-3">
            {[FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="bg-[#2c3e6b] p-3 rounded-lg hover:bg-cyan-400 hover:text-black cursor-pointer transition"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">
              Search Flights
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              My Bookings
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Browse Airlines
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Popular Routes
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Deals & Offers
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-cyan-400 cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Cancellation Policy
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Baggage Policy
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Check-in Info
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Travel Insurance
            </li>
            <li className="hover:text-cyan-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 mb-3 text-sm">
            <MdEmail className="text-cyan-400 text-lg" />
            <span>support@skybook.com</span>
          </div>

          <div className="flex items-center gap-3 mb-3 text-sm">
            <FiPhone className="text-cyan-400 text-lg" />
            <span>1800-SKY-BOOK (Toll Free)</span>
          </div>

          <div className="flex items-start gap-3 text-sm">
            <MdLocationOn className="text-cyan-400 text-lg mt-1" />
            <span>
              SkyBook Tower, Cyber City,
              <br />
              Gurugram 122002, India
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2026 SkyBook. All rights reserved.</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <span>256-bit SSL</span>
          <span>• PCI DSS Compliant</span>
          <span>• Secure Payments</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { ServicesMenu } from "../mocData/ServicesMenu.js";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="w-full mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* ---  Services --- */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5 uppercase">
            Our Services
          </h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            {ServicesMenu.map((item) => (
            <li key={item.id}>
              <Link to={item.link} className="hover:text-blue-500">
                • {item.title}
              </Link>
            </li>
            ))}
            
          </ul>
        </div>

        {/* --- Column 2: Newsletter --- */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5 uppercase">
            Newsletter
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get our latest updates, tips, and weekly inspiration
            for your business.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full p-3 rounded-md bg-[#2a2a2a] text-gray-300 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* --- Column 3: Visit Us --- */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5 uppercase">
            Visit Us Today!
          </h2>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span>Casablanca, Morocco</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" />
              <span>+212 693 953 838</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <span>contact@youthtech.com</span>
            </li>
          </ul>
        </div>

        {/* ---   About --- */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-5 uppercase">
            About YouthTech
          </h2>
          <p className="text-gray-400 text-sm mb-5">
            YouthTech is a creative web agency specialized in designing and
            developing custom websites, e-commerce platforms, and digital
            marketing strategies to help your business grow online.
          </p>

          {/* Contact icons beside socials */}
          <div className="flex flex-col gap-3 mb-5 text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-500" /> +212 693 953 838
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" /> contact@youthtech.com
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              Casablanca, Morocco
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 text-lg">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white transition"
            >
              <FaInstagram />
            </Link>
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* --- Bottom bar --- */}
      <div className="bg-[#111] border-t border-gray-800 py-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-500 font-medium">YouthTech</span>. All Rights
        Reserved.
      </div>
    </footer>
  );
};

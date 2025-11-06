import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../mocData/NavbarMenu.js";
import { ServicesMenu } from "../mocData/ServicesMenu.js";

export const Navbar = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // dropdown
  const [scrolled, setScrolled] = useState(false); // scroll effect
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle scroll for fixed nav shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.svg"
            alt="YouthTech Logo"
            className=" w-20 h-20 object-contain"
          />
          <span className="text-2xl font-bold text-gray-800">YouthTech</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
          {NavbarMenu.map((item) => (
            <li
              key={item.id}
              className="relative"
              ref={item.title === "Services" ? dropdownRef : null}
            >
              {item.title === "Services" ? (
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-lg font-medium text-gray-700 hover:text-blue-600 flex items-center gap-1"
                  >
                    {item.title}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded shadow-lg border border-gray-100 py-2 text-center">
                      {ServicesMenu.map((service) => (
                        <a
                          key={service.id}
                          href={service.link}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.title}
                        </a>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                        <a
                          href="/service"
                          className="block text-blue-600 font-semibold hover:text-blue-700 py-2"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All Services →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.link}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden lg:flex">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-gray-100 p-2"
        >
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-6 py-4">
          <ul className="space-y-1">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


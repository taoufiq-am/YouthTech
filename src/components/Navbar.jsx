import React from "react";
import { Link } from "react-router-dom";
import { NavbarMenu } from "../mocData/NavbarMenu.js";

export const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 mb-6">
      <div className="mx-auto flex justify-between items-center px-10 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="YouthTech Logo" className="w-10 h-11" />
          <h1 className="text-3xl font-extrabold uppercase mr-6 tracking-wide">
            <span className="text-gray-900">Youth</span>
            <span className="text-blue-600">Tech</span>
          </h1>
        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center mr-2 gap-12">
          {NavbarMenu.map((item) => (
            <li key={item.id}>
              <Link
                to={item.link}
                className="text-2xl font-mono text-gray-900 hover:text-blue-600 transition-all duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mr-4 ml-2  sm:flex hidden">
            <Link to="/contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl px-5 py-3 rounded-full shadow-lg transition-all duration-300">
                <span className="">Contact</span>
                <span className="">Us</span>
              </button>
            </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <div
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <i className="ri-menu-line"></i>
        </div>
      </div>
    </nav>
  );
};

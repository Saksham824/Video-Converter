// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={'/'} className="text-white font-bold text-xl tracking-tight">
              🎬 VideoConvertX
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-6">
            <Link to="/" className="text-white hover:text-yellow-300 transition font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-300 transition font-medium">
              About
            </Link>
            <Link to="/converter" className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition font-semibold">Convert Now</Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white hover:text-yellow-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700">
          <div className="px-2 text-center pt-2 pb-3 space-y-4">
            <Link
              to="/"
              className="block text-white hover:bg-indigo-500 rounded px-3 py-2 font-medium transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white hover:bg-indigo-500 rounded px-3 py-2 font-medium transition"
            >
              About
            </Link>
           <Link to="/converter" className="bg-purple-600 text-white px-3 py-2 rounded-lg shadow hover:bg-purple-700 transition font-semibold">Convert Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
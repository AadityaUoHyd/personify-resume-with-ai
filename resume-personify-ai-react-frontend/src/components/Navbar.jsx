import React, {useContext} from "react";
import { Link } from "react-router-dom";

const Navbar=() => {
  return (
    <div className="navbar shadow bg-[#16232E] text-gray-200 px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Resume Personify
        </Link>
      </div>

      {/* Navbar Center (Added spacing using gap-x-6) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-x-6 px-4">
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>

          <div className="navbar-end flex gap-4">
            <Link to="/login" className="btn bg-transparent hover:bg-black-700 text-gray-200 border-black-500">
              Login
            </Link>
            <Link to="/register" className="btn bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Link>
          </div>

    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-2 px-10 shadow bg-[#16232E] text-gray-200 text-base-content w-full flex items-center justify-center">
      <div className="container mx-auto flex flex-col">

        {/* Flex container for three sections */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full">

          {/* Left Section (Logo & Social Links) */}
          <div className="flex flex-col items-start text-left">
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient footer-title mb-2">
                          Quick Links
                        </span>
                        <div className="flex flex-col">
                          <Link to="/about" className="link link-hover">About Us</Link>
                          <Link to="/services" className="link link-hover">Services</Link>
                          <Link to="/contact" className="link link-hover">Contact</Link>
                        </div>
          </div>

          {/* Center Section (Copyright) */}
          <div className="flex flex-col items-center text-center">
              <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient footer-title">
                            Resume Personify
                          </span>
                          <div className="flex gap-4 mt-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
                              <FaInstagram />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
                              <FaTwitter />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
                              <FaFacebook />
                            </a>
                            <a href="https://www.linkedin.com/in/your-profile-name/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-500">
                              <FaLinkedin />
                            </a>
                          </div>
            <div className="text-sm mt-1">© {new Date().getFullYear()} Resume Personify.</div>
            <div className="text-sm mt-1">All rights reserved.</div>
          </div>

          {/* Right Section (Quick Links & Legal) */}
          <div className="flex flex-col items-end text-right">
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient footer-title mt-4 mb-2">
              Legal
            </span>
            <div className="flex flex-col">
              <Link to="#" className="link link-hover">Privacy Policy</Link>
              <Link to="#" className="link link-hover">Terms of Service</Link>
              <Link to="#" className="link link-hover">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

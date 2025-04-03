import React from 'react';
import { Link } from "react-router";

const About = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-6">
      <div className="card w-full max-w-4xl bg-base-100 shadow-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <img
              src="/resume-personify.png"
              alt="Profile"
              className="rounded-full w-40 h-40 border-4 border-primary"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-4xl mb-3 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-white bg-clip-text text-transparent animate-gradient">About Resume Personify</h2>
            <p className="text-base-content opacity-90 mb-6">
              Resume Personify is an AI-powered platform designed to help professionals 
              create standout resumes effortlessly. Our mission is to simplify the resume-building 
              process using cutting-edge AI technologies, ensuring your profile gets the attention it deserves.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-pink-500 mb-3">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-base-content">
                <li>AI-driven resume suggestions</li>
                <li>Customizable templates</li>
                <li>Industry-specific recommendations</li>
                <li>Instant PDF & Word export</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Link to="/generate-resume" className="btn btn-outline text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient">
                Get Started
              </Link>
              <Link to="/services" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
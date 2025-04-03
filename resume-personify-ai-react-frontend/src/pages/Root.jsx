import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "./footer";

function Root() {
  return (
    <div data-theme="business" className="flex flex-col min-h-screen">
      {/* navbar */}
      <Navbar />

      {/* main content */} 
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Root;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); // Add navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); 
        throw new Error(errorText); 
      }
  
      const data = await response.json(); // Parse JSON only if request succeeds
      console.log("Registration success:", data);
      alert(data.message); // Show success message
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Registration error:", error.message);
      alert(error.message); // Show error message
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2031] to-[#203a43] text-gray-200">
      <div className="w-full max-w-md bg-[#16232E] p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gold">Sign Up</h2>
        <p className="text-gray-400 text-center mt-2">
          Create your account to start building your resume.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300">First Name</label>
            <input
              type="text"
              placeholder="Enter your name here.."
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              value={formData.firstName} onChange={handleChange}
              name="firstName" 
              required
            />
          </div>

          {/* Email Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email.."
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              value={formData.email} onChange={handleChange}
              name="email" 
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              placeholder="Enter your password.."
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              value={formData.password} onChange={handleChange}
              name="password" 
              required
            />
          </div>

          {/* Sign Up Button */}
          <button type="submit" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 w-full mt-4">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="w-full border-t border-gray-600"></div>
            <span className="px-3 text-gray-400">OR</span>
            <div className="w-full border-t border-gray-600"></div>
          </div>

          {/* Google Sign Up */}
          <button className="btn btn-outline w-full flex gap-2 items-center">
            <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* Already have an account? */}
          <p className="text-gray-400 text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-gold hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

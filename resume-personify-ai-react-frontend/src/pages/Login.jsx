import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate(); // Add navigation
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions
    setIsSubmitting(true);
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Server error");
      }
  
      const data = await response.json();
  
      if (!data.token) {
        throw new Error("Token missing in response");
      }
  
      localStorage.setItem("token", data.token);
      console.log("Login success:", data);
      alert("Login successful!");
      navigate("/");

    } catch (error) {
      if (error.name === "TypeError") {
        alert("Network error. Check your connection.");
      } else {
        alert(error.message);
      }
    } finally {
      setIsSubmitting(false); // Reset state
    }
  };

  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:8080/oauth2/authorization/google"; // Redirect instead of fetching
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed!");
    }
  };
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2031] to-[#203a43] text-gray-200">
      <div className="w-full max-w-md bg-[#16232E] p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gold">Login</h2>
        <p className="text-gray-400 text-center mt-2">
          Welcome back! Please enter your details.
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="mt-2 text-right">
            <Link to="/forgot-password" className="text-sm text-gold hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-800 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 w-full">
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="w-full border-t border-gray-600"></div>
            <span className="px-3 text-gray-400">OR</span>
            <div className="w-full border-t border-gray-600"></div>
          </div>

          {/* Google Login */}
          <button className="btn btn-outline w-full flex gap-2 items-center" onClick={handleGoogleLogin}>
          <img src="/google-icon.png" alt="Google" className="w-5 h-5" />
          Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-400 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-gold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

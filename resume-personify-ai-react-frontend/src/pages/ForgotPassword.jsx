import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    alert("Password reset link sent to email if account exists");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] to-[#203a43] text-gray-200">
      <div className="w-full max-w-md bg-[#16232E] p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gold">Reset Password</h2>
        <p className="text-gray-400 text-center mt-2">
          Enter your email address to receive a password reset link
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-[#1E2A36] text-gray-200 mt-1"
              required
            />
          </div>

          <button type="submit" className="btn btn-md text-white font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-white animate-gradient transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-125 w-full mt-6">
            Send Reset Link
          </button>

          <p className="text-center text-gray-400 mt-4">
            Remember your password?{" "}
            <Link to="/login" className="text-gold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

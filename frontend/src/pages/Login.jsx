import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
  // Form data states
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Focus states
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      console.log('Login Successful:', response.data);
      alert("Login Successful!");
    } catch (error) {
      console.error('Error:', error);
      alert("Login Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-700 tracking-wide animate-pulse">
          Employee Management System
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                emailFocused ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your email"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              required
            />
            <div
              className={`absolute right-3 top-9 transition-transform duration-300 ${
                emailFocused ? "scale-150" : "scale-100"
              }`}
            >
              📧
            </div>
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                passwordFocused ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your password"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              required
            />
            <div
              className={`absolute right-3 top-9 transition-transform duration-300 ${
                passwordFocused ? "rotate-180" : ""
              }`}
            >
              🔒
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Login 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Login from "./Login";
const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee' // Default role
  });

  // Focus states
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    password: false,
    role: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/add/register", formData);
      console.log('Registration Successful:', response.data);
      alert("Registration Successful!");
      // if(useNavigate('/login')){
      //   alert("Done")
      // }
    } catch (error) {
      console.error('Error:', error);
      alert("Registration Failed! User Already Exist");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-green-700 tracking-wide animate-pulse">
          Employee Registration
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.name ? "border-green-500 ring-2 ring-green-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.email ? "border-green-500 ring-2 ring-green-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.password ? "border-green-500 ring-2 ring-green-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Role Field */}
          <div className="relative">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              onFocus={() => handleFocus('role')}
              onBlur={() => handleBlur('role')}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.role ? "border-green-500 ring-2 ring-green-400" : "border-gray-300"
              } focus:outline-none`}
              required
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Register ✅
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

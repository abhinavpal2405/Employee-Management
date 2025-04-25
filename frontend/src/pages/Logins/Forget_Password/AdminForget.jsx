import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const AdminForget =() => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        email:'',
        password:'',
        newpassword:'',
        confirmpassword:''
    });

    const [emailFocused,setEmailFocused] =useState(false);
    const [passwordFocused,setPasswordFocused] =useState(false);
    const [newpasswordFocused,setNewpasswordFocued]=useState(false);
    const [confirmpasswordFocused,setConfirmpasswordFocused]=useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };
      const path_login = async () =>{
        navigate('/login');
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          if(formData.newpassword===formData.confirmpassword){
          const response = await axios.post("https://employee-management-eyf8.onrender.com/api/forget-password/admin", formData);
          console.log('Password Changed:', response.data);
          alert("Password Changed!");
          path_login();
          }
          else{
            console.log("Password MisMatched");
            alert("Password Mismatched")
          }
        } catch (error) {
          console.error('Error:', error);
          alert("Invalid Crudential!");
        }
      };


      return(
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
            <label className="block text-gray-700">Current Password</label>
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

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="newpassword"
              value={formData.newpassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                newpasswordFocused ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your password"
              onFocus={() => setNewpasswordFocued(true)}
              onBlur={() => setNewpasswordFocued(false)}
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

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                confirmpasswordFocused ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your password"
              onFocus={() => setConfirmpasswordFocused(true)}
              onBlur={() => setConfirmpasswordFocused(false)}
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
          Forget 🚀
          </button>
        </form>
      </div>
      </div>
      );
};

export default AdminForget;

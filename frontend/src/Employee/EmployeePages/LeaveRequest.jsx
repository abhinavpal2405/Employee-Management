import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ClipboardEdit, User } from "lucide-react";
import axios from 'axios';
const LeaveRequest = ({EmployeeDetails}) => {
  const [leaveDetails, setLeaveDetails] = useState({
    Employee_ID: EmployeeDetails.EmployeeId,
    FromDate: '',
    ToDate: '',
    Description: ''
  });

  const [focused, setFocused] = useState({
    // Employee_ID: false,
    FromDate: false,
    ToDate: false,
    Description: false
  });

  const handleChange = (e) => {
    setLeaveDetails({ ...leaveDetails, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Leave Request");
    try{
      console.log(leaveDetails);
    const response = await axios.post("http://localhost:3000/api/leave-request/employees",leaveDetails);
    console.log(response);
    console.log("Leave Request Submitted:", leaveDetails);
    alert("Leave Request Sent!");
    }
    catch(error){
      console.error(error);
      alert("Failed to send Request");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl border border-gray-200 shadow-lg p-6"
    >
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 transition-transform transform hover:scale-105 duration-300">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-blue-700 tracking-wide animate-pulse">
          Leave Request 📝
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Employee ID */}
          {/* <div className="relative">
            <label className="flex items-center gap-2 text-gray-700">
              <User size={16} /> Employee ID
            </label>
            <input
              type="text"
              name="Employee_ID"
              value={leaveDetails.Employee_ID}
              onChange={handleChange}
              onFocus={() => handleFocus("Employee_ID")}
              onBlur={() => handleBlur("Employee_ID")}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.Employee_ID ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Enter your ID"
              required
            />
          </div> */}

          {/* From Date */}
          <div className="relative">
            <label className="flex items-center gap-2 text-gray-700">
              <Calendar size={16} /> From Date
            </label>
            <input
              type="date"
              name="FromDate"
              value={leaveDetails.FromDate}
              onChange={handleChange}
              onFocus={() => handleFocus("FromDate")}
              onBlur={() => handleBlur("FromDate")}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.FromDate ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              required
            />
          </div>

          {/* To Date */}
          <div className="relative">
            <label className="flex items-center gap-2 text-gray-700">
              <Calendar size={16} /> To Date
            </label>
            <input
              type="date"
              name="ToDate"
              value={leaveDetails.ToDate}
              onChange={handleChange}
              onFocus={() => handleFocus("ToDate")}
              onBlur={() => handleBlur("ToDate")}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.ToDate ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              required
            />
          </div>

          {/* Description */}
          <div className="relative">
            <label className="flex items-center gap-2 text-gray-700">
              <ClipboardEdit size={16} /> Description
            </label>
            <textarea
              name="Description"
              rows="3"
              value={leaveDetails.Description}
              onChange={handleChange}
              onFocus={() => handleFocus("Description")}
              onBlur={() => handleBlur("Description")}
              className={`w-full px-4 py-2 border rounded-lg transition-all duration-300 ${
                focused.Description ? "border-blue-500 ring-2 ring-blue-400" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Reason for leave..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            Submit Leave ✅
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default LeaveRequest;

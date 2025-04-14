import React, { useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiUser, FiCalendar, FiLoader } from "react-icons/fi";

const COLORS = {
  Present: "#22c55e", // green
  Absent: "#ef4444", // red
  Leave: "#eab308", // yellow
};

const EmployeeAttendanceChart = () => {
  const [formData, setFormData] = useState({
    employeeId: "",
    fromDate: "",
    toDate: "",
  });

  const [attendanceData, setAttendanceData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAttendance = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/attendance-record/employee",
        {
          ID: formData.employeeId,
          FromDate: formData.fromDate,
          ToDate: formData.toDate,
        }
      );

      if (response.data.success) {
        setAttendanceData(response.data.AttendanceRecord);
        setError("");
      } else {
        setError("⚠️ Failed to fetch attendance data.");
        setAttendanceData(null);
      }
    } catch (err) {
      setError("❌ Something went wrong while fetching attendance.");
      setAttendanceData(null);
      console.error(err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const chartData = attendanceData
    ? [
        { name: "Present", value: attendanceData.Present },
        { name: "Absent", value: attendanceData.Absent },
        { name: "Leave", value: attendanceData.Leave },
      ]
    : [];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 shadow-2xl rounded-2xl mt-10 transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-indigo-700 mb-10 tracking-wide">
        📊 Employee Attendance Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-2">
          <FiUser className="text-indigo-600 text-xl" />
          <input
            type="text"
            name="employeeId"
            placeholder="Employee ID"
            className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.employeeId}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar className="text-indigo-600 text-xl" />
          <input
            type="date"
            name="fromDate"
            className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.fromDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center gap-2">
          <FiCalendar className="text-indigo-600 text-xl" />
          <input
            type="date"
            name="toDate"
            className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={formData.toDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={fetchAttendance}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200 disabled:opacity-50"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" /> Loading...
            </>
          ) : (
            "Get Attendance"
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-600 text-center mb-4 font-medium animate-pulse">
          {error}
        </p>
      )}

      {attendanceData && (
        <div className="w-full h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                label
              >
                {chartData.map((entry) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[entry.name]}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  boxShadow: "0 0 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default EmployeeAttendanceChart;

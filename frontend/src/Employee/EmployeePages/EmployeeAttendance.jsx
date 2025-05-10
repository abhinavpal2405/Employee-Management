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

const EmployeeAttendanceChart = ({ EmployeeDetails }) => {
  const [formData, setFormData] = useState({
    employeeId: EmployeeDetails.EmployeeId,
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
        "https://employee-management-eyf8.onrender.com/api/attendance-record/employee",
        {
          ID: EmployeeDetails.EmployeeId,
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
    <div className="max-w-5xl mx-auto px-6 py-10 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-200 bg-gradient-to-br from-blue-100 to-blue-300">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-12">
        📈 Employee Attendance Overview
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
            <FiCalendar className="text-indigo-500" />
            From Date
          </label>
          <input
            type="date"
            name="fromDate"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={formData.fromDate}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
            <FiCalendar className="text-indigo-500" />
            To Date
          </label>
          <input
            type="date"
            name="toDate"
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            value={formData.toDate}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={fetchAttendance}
          disabled={loading}
          className="flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition disabled:opacity-60 shadow-md hover:shadow-lg"
        >
          {loading ? (
            <>
              <FiLoader className="animate-spin" /> Loading...
            </>
          ) : (
            "Generate Chart"
          )}
        </button>
      </div>

      {error && (
        <p className="text-red-600 text-center mb-6 font-semibold animate-pulse">
          {error}
        </p>
      )}

      {attendanceData && (
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={70}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {chartData.map((entry) => (
                  <Cell
                    key={`cell-${entry.name}`}
                    fill={COLORS[entry.name]}
                    stroke="#f1f5f9"
                    strokeWidth={3}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
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

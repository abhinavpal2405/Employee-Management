import React, { useEffect, useState } from "react";
import axios from "axios";

const MarkEmployeeAttendance = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [statusMap, setStatusMap] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://employee-management-eyf8.onrender.com/api/get-details/employees");
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let result = employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.Employee_ID.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (departmentFilter !== "All") {
      result = result.filter((emp) => emp.Department === departmentFilter);
    }
    setFilteredEmployees(result);
  }, [searchTerm, departmentFilter, employees]);

  const departments = ["All", ...new Set(employees.map(emp => emp.Department))];

  const handleStatusChange = (id, value) => {
    setStatusMap((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitAll = async () => {
    const attendanceData = filteredEmployees.map(emp => ({
      employeeId: emp.Employee_ID,
      status: statusMap[emp._id] || ""
    }));

    const incomplete = attendanceData.some((entry) => entry.status === "");
    if (incomplete) {
      alert("Please select status for all employees before submitting.");
      return;
    }

    try {
      await axios.post("https://employee-management-eyf8.onrender.com/api/mark-attendance/employees", {
        attendance: attendanceData
      });
      alert("Attendance submitted successfully!");
    } catch (error) {
      console.error("Error submitting attendance:", error);
      alert("Failed to submit attendance.");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Mark Attendance</h1>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name, ID, or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {departments.map((dept, i) => (
            <option key={i} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center text-lg text-blue-600">Loading employees...</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="text-center text-red-600 font-medium">No matching employees found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-white shadow-lg rounded-lg">
            <thead className="bg-blue-200 text-blue-900">
              <tr>
                <th className="px-4 py-3 text-left">Employee ID</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">DOB</th>
                <th className="px-4 py-3 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map((emp) => (
                <tr key={emp._id} className="border-t border-gray-200">
                  <td className="px-4 py-3">{emp.Employee_ID}</td>
                  <td className="px-4 py-3">{emp.name}</td>
                  <td className="px-4 py-3">{emp.email}</td>
                  <td className="px-4 py-3">{new Date(emp.DOB).toDateString()}</td>
                  <td className="px-4 py-3">
                    <select
                      value={statusMap[emp._id] || ""}
                      onChange={(e) => handleStatusChange(emp._id, e.target.value)}
                      className="px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                      <option value="Leave">Leave</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Submit Button */}
          <div className="mt-6 text-right">
            <button
              onClick={handleSubmitAll}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition"
            >
              Submit Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MarkEmployeeAttendance;

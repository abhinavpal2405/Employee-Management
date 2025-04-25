import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeData = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  console.log("Fetching Employees details");
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

  return (
    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Employees</h1>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
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

      {/* Status */}
      {loading ? (
        <div className="text-center text-lg text-blue-600">Loading employees...</div>
      ) : filteredEmployees.length === 0 ? (
        <div className="text-center text-red-600 font-medium">No matching employees found.</div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEmployees.map((emp) => (
            <div
              key={emp._id}
              className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-blue-800">{emp.name}</h2>
              <p className="text-gray-600"><span className="font-semibold">ID:</span> {emp.Employee_ID}</p>
              <p className="text-gray-600"><span className="font-semibold">Email:</span> {emp.email}</p>
              <p className="text-gray-600"><span className="font-semibold">Mobile:</span> {emp.Mobile}</p>
              <p className="text-gray-600"><span className="font-semibold">DOB:</span> {new Date(emp.DOB).toDateString()}</p>
              <p className="text-gray-600"><span className="font-semibold">Department:</span> {emp.Department}</p>
              <p className="text-gray-600"><span className="font-semibold">Role:</span> {emp.role}</p>
              <p className="text-gray-600"><span className="font-semibold">Joining At:</span> {new Date(emp.JoiningAt).toDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeData;

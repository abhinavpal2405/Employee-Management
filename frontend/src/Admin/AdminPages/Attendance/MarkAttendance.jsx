import React, { useEffect, useState } from "react";

const MarkAttendance = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/employees") // API call to backend
            .then((response) => response.json())
            .then((data) => setEmployees(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
            <div className="p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Employee Attendance List</h2>

                <table className="border-collapse border border-gray-400 w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border p-2">Emp ID</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Mark Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.empId} className="text-center">
                                <td className="border p-2">{employee.empId}</td>
                                <td className="border p-2">{employee.name}</td>
                                <td className="border p-2">
                                    <select className="p-1 border rounded">
                                        <option value="present">Present</option>
                                        <option value="absent">Absent</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MarkAttendance;

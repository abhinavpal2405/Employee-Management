import React from 'react';
import EmployeeAttendanceChart from './EmployeePages/EmployeeAttendance';
import LeaveRequest from './EmployeePages/LeaveRequest';

const EmployeeDashboard = () => {
    const EmployeeDetails = {
        EmployeeId: "EA088-28"
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Employee Dashboard</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Attendance Overview</h2>
                    <EmployeeAttendanceChart EmployeeDetails={EmployeeDetails} />
                </div>

                <div className="bg-white p-4 rounded-2xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Leave Request</h2>
                    <LeaveRequest EmployeeDetails={EmployeeDetails} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeDashboard;


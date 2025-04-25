import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
// import AdminDashBoard from "./src/Admin/AdminDashBoard"
import Register from "./pages/Register"
import AdminForget from "./pages/Logins/Forget_Password/AdminForget"
import EmployeeForget from "./pages/Logins/Forget_Password/EmployeeForget"
import EmployeeData from "./InfoRetrival/EmployeeData"
import AdminData from "./InfoRetrival/AdminData"
import MarkEmployeesAttendance from "./Admin/AdminPages/Attendance/MarkAttendance"
import LeaveRequest from "./Employee/EmployeePages/LeaveRequest"
import EmployeeAttendanceChart from "./Employee/EmployeePages/EmployeeAttendance"
import EmployeeDashboard from "./Employee/EmployeeDashboard"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="https://employee-management-eyf8.onrender.com/" element={<Navigate to="/register"/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/login" element={<Login/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/register" element={<Register/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/admin-forget" element={<AdminForget/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/employee-forget" element={<EmployeeForget/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/get-details/employees" element={<EmployeeData/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/get-details/admins" element={<AdminData/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/mark-attendance/employees" element={<MarkEmployeesAttendance/>}></Route>
    <Route path="https://employee-management-eyf8.onrender.com/dashboard/employee" element={<EmployeeDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App

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
    <Route path="/" element={<Navigate to="/register"/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/admin-forget" element={<AdminForget/>}></Route>
    <Route path="/employee-forget" element={<EmployeeForget/>}></Route>
    <Route path="/get-details/employees" element={<EmployeeData/>}></Route>
    <Route path="/get-details/admins" element={<AdminData/>}></Route>
    <Route path="/mark-attendance/employees" element={<MarkEmployeesAttendance/>}></Route>
    <Route path="/dashboard/employee" element={<EmployeeDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App

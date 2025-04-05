import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
// import AdminDashBoard from "./src/Admin/AdminDashBoard"
import Register from "./pages/Register"
import MarkAttendance from "./Admin/AdminPages/Attendance/MarkAttendance"

import AdminForget from "./pages/Logins/Forget_Password/AdminForget"
import EmployeeForget from "./pages/Logins/Forget_Password/EmployeeForget"

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route> */}
    <Route path="/login" element={<Login />}></Route>
    {/* <Route path="/admin-dashboard" element={<AdminDashBoard/>}></Route> */}
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/mark-attendance" element={<MarkAttendance/>}></Route>
    <Route path="/admin-forget" element={<AdminForget/>}></Route>
    <Route path="/employee-forget" element={<EmployeeForget/>}></Route>

    </Routes>
    </BrowserRouter>
    )
}

export default App

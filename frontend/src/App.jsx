import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
// import AdminDashBoard from "./src/Admin/AdminDashBoard"
import Register from "./pages/Register"
function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navigate to="/admin-dashboard"/>}></Route> */}
    <Route path="/login" element={<Login />}></Route>
    {/* <Route path="/admin-dashboard" element={<AdminDashBoard/>}></Route> */}
    <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}

export default App

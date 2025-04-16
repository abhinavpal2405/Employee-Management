import React, { useState } from "react";
import axios from 'axios';
import AdminLogin from "./Logins/AdminLogin";
import EmployeeLogin from "./Logins/EmployeeLogin";
const Login = () => {
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <AdminLogin/>
      <EmployeeLogin/>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import axios from 'axios';
import AdminLogin from "./Logins/AdminLogin";
import EmployeeLogin from "./Logins/EmployeeLogin";
const Login = () => {
  // Form data states
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Focus states
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      console.log('Login Successful:', response.data);
      alert("Login Successful!");
    } catch (error) {
      console.error('Error:', error);
      alert("Login Failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <AdminLogin/>
      <EmployeeLogin/>
    </div>
  );
};

export default Login;

import express from 'express'
// import login from '../controllers/authController.js'
import AdminLogin from '../controllers/Login/AdminLogin.js';
import EmployeeLogin from '../controllers/Login/EmployeeLogin.js';
const loginRouter= express.Router()
loginRouter.post('/admin',AdminLogin);
loginRouter.post('/employee',EmployeeLogin);
export default loginRouter;
import express from 'express'

import AdminLogin from './Login/AdminLogin.js';

import EmployeeLogin from './Login/EmployeeLogin.js';

const login= express.Router()
login.post('/admin',AdminLogin);
login.post('/employee',EmployeeLogin);
export default login;

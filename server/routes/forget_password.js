import express from 'express';
import ForgetAdmin from '../controllers/Forget-Password/ForgetAdmin.js';

import ForgetEmployee from '../controllers/Forget-Password/ForgetEmployee.js';
const forgetPassword= express.Router();

forgetPassword.post('/admin',ForgetAdmin);
forgetPassword.post('/employee',ForgetEmployee);
export default forgetPassword;
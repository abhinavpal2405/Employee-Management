import express from 'express'
import EmployeeData from '../controllers/DataRetrival/EmployeeData.js';
import AdminData from '../controllers/DataRetrival/AdminData.js';
const GetDetails= express.Router()
GetDetails.get('/admins',AdminData);
GetDetails.get('/employees',EmployeeData);
export default GetDetails;
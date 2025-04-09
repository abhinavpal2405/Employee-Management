import express from 'express'
import EmployeeLeaveRequest from '../controllers/Leave/EmployeeLeaveRequest.js';
const LeaveRequest= express.Router()

LeaveRequest.post('/employees',EmployeeLeaveRequest);
export default LeaveRequest;
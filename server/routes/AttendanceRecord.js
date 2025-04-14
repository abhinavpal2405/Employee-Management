import express from 'express'
import EmployeeAttendance from '../controllers/Attendance/EmployeeAttendance.js';
const AttendanceRecord= express.Router()
AttendanceRecord.post('/employee',EmployeeAttendance);
export default AttendanceRecord;
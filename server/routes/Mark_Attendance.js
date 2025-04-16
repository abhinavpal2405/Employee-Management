import express from 'express'
import MarkAttendance from '../controllers/Attendance/MarkAttendance.js';
const AttendanceMark= express.Router()
AttendanceMark.post('/employees',MarkAttendance)
export default AttendanceMark;

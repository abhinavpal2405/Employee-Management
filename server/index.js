import express from 'express';  // Import express properly
import cors from 'cors';        // Import CORS middleware
// import user from './models/User.js';
import loginRouter from './routes/auth.js';
import connectToDatabase from './db/db.js'
import registerRouter from './routes/register.js'; 
import forgetPassword from './routes/forget_password.js'; 
// import AttendanceMark from './routes/Mark_Attendance.js';
import GetDetails from './routes/GetDetails.js';
import AttendanceMark from './routes/Mark_Attendance.js'
import LeaveRequest from './routes/LeaveRequest.js';
import AttendanceRecord from './routes/AttendanceRecord.js';
const app = express();          // Create an instance of express
app.use(cors());                // Use CORS middleware
app.use(express.json());        // Use middleware to parse JSON requests
connectToDatabase();
app.use('/api/auth',loginRouter)
app.use('/api/add',registerRouter)
app.use('/api/forget-password',forgetPassword);
app.use('/api/mark-attendance',AttendanceMark);
app.use('/api/get-details',GetDetails);
app.use('/api/leave-request',LeaveRequest);
app.use('/api/attendance-record',AttendanceRecord);
const PORT = 3000;              

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

import Attendance from "../../models/Attendance.js";
import Employee from "../../models/Employee.js";

const EmployeeAttendance = async (req, res) => {
    console.log("Fetching Employees Data");
    try {
        const { ID, FromDate, ToDate } = req.body;

        // Fetch employee joining date if FromDate is not provided
        let StartDate;
    if (!FromDate || FromDate.trim() === "") {
        const employee = await Employee.findOne({ Employee_id: ID });
        if (!employee) {
            return res.status(404).json({ success: false, error: "Employee not found" });
        }
        StartDate = new Date(employee.JoiningAt);
    } else {
        StartDate = new Date(FromDate);
    }

    // Set EndDate as current date if ToDate is not provided or empty
    let EndDate;
    if (!ToDate || ToDate.trim() === "") {
        EndDate = new Date(); // current date
    } else {
        EndDate = new Date(ToDate);
    }


        // Fetch attendance stats
        const Total = await Attendance.countDocuments({
            ID: ID,
            Date: {
                $gte: StartDate,
                $lte: EndDate
            }
        });

        const Present = await Attendance.countDocuments({
            ID: ID,
            Date: {
                $gte: StartDate,
                $lte: EndDate
            },
            Status: "Present"
        });

        const Absent = await Attendance.countDocuments({
            ID: ID,
            Date: {
                $gte: StartDate,
                $lte: EndDate
            },
            Status: "Absent"
        });

        const Leave = await Attendance.countDocuments({
            ID: ID,
            Date: {
                $gte: StartDate,
                $lte: EndDate
            },
            Status: "Leave"
        });

        console.log("Attendance Data of Employee Fetched");
        return res.status(200).json({
            success: true,
            AttendanceRecord: { ID, Total, Present, Absent, Leave }
        });
    } catch (error) {
        console.error("Error fetching employee attendance:", error);
        return res.status(500).json({ success: false, error: "Failed to fetch attendance data" });
    }
};

export default EmployeeAttendance;

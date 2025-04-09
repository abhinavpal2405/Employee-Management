import Employee from "../../models/Employee.js";
import EmployeeLeave from "../../models/EmployeeLeave.js";

const EmployeeLeaveRequest = async (req,res) => {
    console.log("Creating Leave Request");
    try{
        const {Employee_ID,FromDate,ToDate,Description}=req.body;
        console.log(Employee_ID);
        console.log(FromDate);
        console.log(ToDate);
        console.log(Description);

        const LeaveDetails = new EmployeeLeave({
            Employee_ID:Employee_ID,
            FromDate:FromDate,
            ToDate:ToDate,
            Description:Description
        });
        LeaveDetails.save();
        console.log("Leave Requested");
        return res.status(201).json({
            success: true,
            user: { _id: LeaveDetails._id,Employee_ID:LeaveDetails.Employee_ID},
        });
    }
    catch(e){
        console.error(e);
        return res.status(404).json({
            success:false,
            user: {error:"Unable to Process your Request.Contact your Admin"},
        })
    }
}
export default EmployeeLeaveRequest;
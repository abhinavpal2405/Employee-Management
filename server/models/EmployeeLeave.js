import mongoose from "mongoose";
const LeaveSchema=new mongoose.Schema({
    Employee_ID:{type:String,required:true},
    FromDate:{type:Date,required:true},
    ToDate:{type:Date,required:true},
    Description:{type:String,required:true}
});
const EmployeeLeave=mongoose.model("Leave",LeaveSchema);
export default EmployeeLeave;
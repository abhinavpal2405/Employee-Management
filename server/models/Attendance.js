import mongoose from "mongoose";

const AttendanceSchema=new mongoose.Schema({
    ID:{type:String,required:true},
    Date:{type:Date,default:Date.now},
    Status:{type:String,enum:["Present","Absent","Late","Leave"],required:true}
})

const Attendance=mongoose.model("Attendance",AttendanceSchema);
export default Attendance;
import { request } from "express";
import mongoose from "mongoose";


const EmployeeSchema=new mongoose.Schema({
    Employee_ID:{type:Number,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    DOB:{type:Date,required:true},
    Mobile:{type:String,required:true},
    Department:{type:String,required:true},
    role:{type:String,required:true},
    profileImage:{type:String},
    JoiningAt:{type:Date,default:Date.now},
    createAt:{type:Date,default:Date.now},
    updateAt:{type:Date,default:Date.now}
})
const Employee=mongoose.model("Employee",EmployeeSchema);

export default Employee;
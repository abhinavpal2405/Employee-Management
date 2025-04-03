import { request } from "express";
import mongoose from "mongoose";


const AdminSchema=new mongoose.Schema({
    Admin_ID:{type:String,required:true},
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
const Admin=mongoose.model("Admin",AdminSchema);

export default Admin;
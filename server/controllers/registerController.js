import Employee from '../models/Employee.js';
import Admin from '../models/Admin.js';
import User from '../models/User.js';

import RegisterEmail from './Email-Generator/RegisterEmail.js';
// const bcrypt = require('bcrypt');

const sendEmail = async (email_details) => {
    try {
        const email_info = await RegisterEmail({
            body: {
                email: email_details.email,
                password: email_details.password, // Fixed incorrect reference
            }
        }, {
            status: (code) => ({
                json: (message) => console.log(`Response: ${code}, Message:`, message)
            })
        });

        console.log("Email Sent Response:", email_info);
    } catch (error) {
        console.error("Error in sendEmail:", error);
    }
};


const register = async (req, res) => {
    // const hashPassword = async (password) => {
    //     const saltRounds = 10;  
    //     const hashed = await bcrypt.hash(password, saltRounds);
    //     console.log(`Hashed Password: ${hashed}`);
    //   };
    
    try {
        const { name, email, DOB, Mobile, Department, role } = req.body;
        // console.log(name);
        // console.log(email);
        // console.log(DOB);
        // console.log(Mobile);
        // console.log(Department);
        // console.log(role);
        // Use `await` with `User.findOne` to properly await the result
        if(role==='Employee'){
            const existingUser = await Employee.findOne({ email });
            if (existingUser) {
                console.log("Employee Already Exists");
                return res.status(409).json({ success: false, error: "Employee Already Exists" });
            }
            console.log("Registering Employee..")
            const Employee_ID='E'+name.charAt(0).toUpperCase()+Mobile.substr(0,2)+DOB.substr(6,4);
            const password='E'+DOB.substr(0,2)+DOB.substr(3,2)+DOB.substr(6,4);
            // const result = await Student.aggregate([
            //     { $group: { _id: null, maxMarks: { $max: "$marks" } } }
            //   ]);
            const newEmployee = new Employee({
                Employee_ID,
                name,
                email,
                password,
                DOB,
                Mobile,
                Department,
                role
            });

            await newEmployee.save();
            await sendEmail({ email, password });
            return res.status(201).json({
                success: true,
                user: { _id: newEmployee._id,Employee_ID:newEmployee.Employee_ID ,name: newEmployee.name, role: newEmployee.role,password:newEmployee.password},
            });
        }
        else{
            const existingUser = await Admin.findOne({ email });
            if (existingUser) {
                console.log("Admin Already Exists");
                return res.status(409).json({ success: false, error: "Admin Already Exists" });
            }
            const Admin_ID='A'+name.charAt(0).toUpperCase()+Mobile.substr(0,2)+DOB.substr(6,4);
            const password='A'+DOB.substr(0,2)+DOB.substr(3,2)+DOB.substr(6,4);
            // const result = await Student.aggregate([
            //     { $group: { _id: null, maxMarks: { $max: "$marks" } } }
            //   ]);
            const newAdmin = new Admin({
                Admin_ID,
                name,
                email,
                password,
                DOB,
                Mobile,
                Department,
                role
            });

            await newAdmin.save();
            await sendEmail({ email, password });
            return res.status(201).json({
                success: true,
                user: { _id: newAdmin._id,Admin_ID:newAdmin.Admin_ID ,name: newAdmin.name, role: newAdmin.role,password:newAdmin.password},
            });
        }
    }
    catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ success: false, error: "Server Error" });
    }
};

export { register };

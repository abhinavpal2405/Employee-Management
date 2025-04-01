import User from './models/User.js'
// import bcrypt from 'bcrypt'
import connectToDatabase from './db/db.js';
const userRegister= async () => {
    try{
        connectToDatabase()
    }
    catch(error){
        console.log(error)
    }
    try{
        // const hashPassword=await bcrypt.hash("xyz");
        const newUser=new User({
            name:"abhinav",
            email:"abc@gmail.com",
            password:"abhinav",
            role:"employee"
        })
        await newUser.save()
    }
    catch(error){
        console.log(error);
    }
}

userRegister();
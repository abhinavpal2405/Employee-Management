import Employee from  '../../models/Employee.js';



const ForgetEmployee = async (req,res) =>{
    console.log("Forgetting--- Employee Password")
    const {email,password,newpassword,confirmpassword}=req.body;
    console.log(email)
    console.log(password)
    console.log(newpassword)
    console.log(confirmpassword)

    try{
        const user=await Employee.findOne({email});
        if (!user) {
            console.log("Employee not found");
            return res.status(404).json({ success: false, error: "Admin not found" });
        }
        console.log(`User found`)

        if(!(user.password===password)){
            console.log("Invalid Current Password");
            return res.status(400).json({sucess:false,error:"Password Mismatch"});
        }

        if(!(newpassword===confirmpassword)){
            console.log("Password Mismatched");
            return res.status(402).json({success: false,error:" Password Mismatched"});
        }
        user.password=newpassword;
        user.save();
        return res.status(200).json({ success: true, message: "Password updated successfully" });
    }
    catch(error){
        return res.status(402).json({success: false,error:" Something went wrong"});
    }
};
export default ForgetEmployee;
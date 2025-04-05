import Admin from  '../../models/Admin.js';



const ForgetAdmin = async (req,res) =>{
    console.log("Forgetting--- Admin Password")
    const {email,password,newpassword,confirmpassword}=req.body;
    console.log(email)
    console.log(password)
    console.log(newpassword)
    console.log(confirmpassword)

    try{
        const user=await Admin.findOne({email});
        if (!user) {
            console.log("Admin not found");
            return res.status(404).json({ success: false, error: "Admin not found" });
        }
        console.log(`User found`)
        console.log(user.password);
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
export default ForgetAdmin;
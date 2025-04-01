import User from '../models/User.js';
// const bcrypt = require('bcrypt');
const register = async (req, res) => {
    // const hashPassword = async (password) => {
    //     const saltRounds = 10;  
    //     const hashed = await bcrypt.hash(password, saltRounds);
    //     console.log(`Hashed Password: ${hashed}`);
    //   };
      
    try {
        const { name, email, password, role } = req.body;

        // Use `await` with `User.findOne` to properly await the result
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User Already Exists");
            return res.status(409).json({ success: false, error: "User Already Exists" });
        }
        const hashpass=password;
        const newUser = new User({
            name,
            email,
            password,
            role
        });

        await newUser.save();
        return res.status(201).json({
            success: true,
            user: { _id: newUser._id, name: newUser.name, role: newUser.role },
        });

    } catch (error) {
        console.error("Registration Error:", error);
        return res.status(500).json({ success: false, error: "Server Error" });
    }
};

export { register };

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "alphabitcoder@gmail.com", // Your email
        pass: "gbms bvwn enxj vpsu" // Your email password or App Password
    }
});

const RegisterEmail = async (req, res) => {
    const { Employee_ID, name, email, password, DOB, Mobile, Department, role } = req.body;
    console.log("Sending Email...");
    console.log(name);
        console.log(email);
        console.log(DOB);
        console.log(Mobile);
        console.log(Department);
        console.log(role);
    try {
        const mailOptions = {
            from: "alphabitcoder@gmail.com", // Make sure this is the authenticated sender
            to: email,
            subject: "Registration Successful - Welcome Aboard!",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
                    <h2 style="color: #2ecc71; text-align: center;">✅ Registration Successful!</h2>
                    <p><strong>Welcome aboard!</strong></p>
                    <p>Your account has been successfully created. You can now log in and start exploring.</p>

                    <table style="border-collapse: collapse; width: 100%; margin-top: 20px;">
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Employee ID</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${Employee_ID}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Name</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${name}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Email ID</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${email}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Password</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${password}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">DOB</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${DOB}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Contact Number</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${Mobile}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Department</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${Department}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 10px;">Role</th>
                            <td style="border: 1px solid #ddd; padding: 10px;">${role}</td>
                        </tr>
                    </table>
                </div>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);

        return res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ success: false, message: "Failed to send email" });
    }
};

export default RegisterEmail;

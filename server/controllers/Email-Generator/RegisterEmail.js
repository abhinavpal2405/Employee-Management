import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "alphabitcoder@gmail.com", // Your email
        pass: "gbms bvwn enxj vpsu" // Your email password or App Password
    }
});

const RegisterEmail = async (req, res) => {
    const { email, password } = req.body;
    console.log("Sending Email..")
    try {
        const mailOptions = {
            from: "alphabitcoder@gmail.com", // Should match the authenticated email
            to: email,
            subject: "Registration Information",
            text: "Congratulations " + password,
            html: `<p>Congratulations! Your password is: <strong>${password}</strong></p>`
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

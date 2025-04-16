import Attendance from '../../models/Attendance.js';

const MarkAttendance = async (req, res) => {
  try {
    const { attendance } = req.body; 

    const currentDate = new Date();
    const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(currentDate.setHours(23, 59, 59, 999));

    for (let i = 0; i < attendance.length; i++) {
      const { employeeId, status } = attendance[i];

      const existing = await Attendance.findOne({
        ID: employeeId,
        Date: { $gte: startOfDay, $lte: endOfDay }
      });

      if (!existing) {
        const record = new Attendance({
          ID: employeeId,
          Date: new Date(), 
          Status: status || "Present" 
        });
        await record.save();
      } else {
        console.log(`${employeeId} already marked for today`);
      }
    }

    return res.status(200).json({ success: true, message: "Attendance marked successfully" });
  } catch (error) {
    console.error("Attendance Error:", error);
    return res.status(500).json({ success: false, error: "Unable to mark attendance" });
  }
};

export default MarkAttendance;

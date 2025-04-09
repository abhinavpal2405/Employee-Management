import Admin from '../../models/Admin.js';

const AdminData = async (req, res) => {
    console.log("Data Retrieving")
    try {
        const admins = await Admin.find();
        console.log(admins);
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Admin data', error });
    }
};

export default AdminData;

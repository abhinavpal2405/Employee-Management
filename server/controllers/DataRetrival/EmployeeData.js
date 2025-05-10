import Employee from '../../models/Employee.js';

const EmployeeData = async (req, res) => {
    console.log("Data Retrieving")
    try {
        const employees = await Employee.find();
        console.log(employees);
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching employee data', error });
    }
};

export default EmployeeData;

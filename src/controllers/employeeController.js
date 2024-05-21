const  Employee  = require('../models/employees');

// Function to fetch all employees
const getAllEmployees = async (req, res) => {
    console.log("getAll Called")
  try {
    const employees = await Employee.findAll();
    // console.log('employees',employees)
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to fetch an employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByPk(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};

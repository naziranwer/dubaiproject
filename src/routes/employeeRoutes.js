const express = require('express');
const { getAllEmployees, getEmployeeById } = require('../controllers/employeeController');

const router = express.Router();

// Route to fetch all employees
router.get('/employees', getAllEmployees);

// Route to fetch an employee by ID
router.get('/employees/:id', getEmployeeById);

module.exports = router;

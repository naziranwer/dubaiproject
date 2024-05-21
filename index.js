const express = require("express");
const app = express();
const cors = require("cors");
const { sequelize, testConnection } = require("./src/config/database");
const employeesRoutes = require("./src/routes/employeeRoutes");

const jwt = require("jsonwebtoken");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

testConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
  });



app.get("/", (req, res) => {
  res.send("Welcome to my application");
});
app.use('/api', employeesRoutes);

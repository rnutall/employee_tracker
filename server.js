const inquirer = require("inquirer");
// Import and require mysql2
const mysql = require("mysql2");
const prompts = require("./config.js");
// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3001,
    user: "root",
    password: "",
    database: "employee_db",
  });

  db.connect((error) => {
    if (error) throw error;
  
  console.log('Connected to the employee_db database!');
  return;
  });

function init() {
  inquirer
    .prompt(
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "add employee",
          "add department",
          "add role",
          "view employees",
          "view departments",
          "view roles",
          "update employee information",
        ],
      },
    ).then((answers) => {
      // Handle user input based on their selected action

      switch (answers.action) {
        case "add department":
          // addDepartment();
          break;
        case "update department":
          // updateDepartment();
          break;

        case "add role":
          // addRole();
          break;
        case "update role":
          // updateRole();
          break;
          
        case "add employee":
          // addEmployee("firstName", "lastName", "role", "manager");
          break;
          case "update employee":
          // updateEmployee();
          break;
        }
    });
  }

  function addEmployee() {
  // Get input from user using Inquirer prompts
  inquirer
    .prompt([
      {
        type: "Input",
        employee_id: "",
        message: "Enter the employee's ID:",
      },
      {
        type: "input",
        name: "firstName",
        message: "Enter the employee's first name:",
      },
      {
        type: "input",
        name: "lastName",
        message: "Enter the employee's last name:",
      },
      {
        type: "input",
        name: "role",
        message: "Enter the employee's role:",
      },
      {
        type: "input",
        name: "department",
        message: "Enter the employee's department:",
      },
      {
        type: "input",
        name: "salary",
        message: "Enter the employee's salary:",
      },
      {
        type: "input",
        name: "manager",
        message: "Enter the employee's manager:",
      },
      // Add more prompts for other employee information
    ])
    .then((answers) => {
      // Execute SQL query to insert employee into database
      // const depart = `INSERT INTO department (first_name, last_name, role, manager) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.role}', '${answers.manager}')`;
      // connection.query(sql, (err, result) => {
      //   if (err) throw err;
      //   console.log(`${result.affectedRows} employee added`);
      // });
    });
  }

  init();
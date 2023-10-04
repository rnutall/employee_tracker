const inquirer = require("inquirer");
const mysql = require("mysql2");
const prompt = require("./assets/prompt");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3001,
  user: "root",
  password: "",
  database: "employee_db"  
});
//connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
  // start the application
  start();
});
// Function to start database
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a employee",
        "Add a manager",
        "Add a department",
        "Add a role",
        "update an employees information",
        "View employees by manager",
        "View employees by departments",
        "Delete Departments | Roles | Employees",
        "View budget of a department",
        "Exit",
      ],
    })
    .then((answers) => {
       //Handle user input based on their selected action
     switch (answers.action) {
      case "View all departments":
        viewAllDepartments();
        break;
        case "View all roles":
          ViewAllRoles();
          break;
          case "View all employees":
            ViewAllEmployees();
            break;
        case "Add a department":
           addDepartment();
          break;
          case "Add a role":
           AddRole();
          break;
          case "Add an employee":
           AddEmployee();
          break;
          case "Add a manager":
           AddManager();
          break;
        case "update employee":
           updateEmployee();
          break;
        case "View Employees by Manager":
           viewEmployeeByManager();
          break;
        case "View Employees by Department":
          viewEmployeesByDepartment();
          break;        
        case "Delete Departments | Roles | Employees":
           deleteDepartmentsRolesEmployees();
          break;
          case "View budget of a department":
            viewBudgetOfDepartment();
            break;
            case "Exit":
            connection.end();
            console.log("Goodbye!");
            break;  
      }
    });
}

// Function to view all departments
function viewAllDepartments() {
const query = "SELECT * FROM departments";
connection.query(query, (err, res) => {
  if (err) throw err;
  console.table(res);
  // restart the application
  start();
});
}

// Function to view all roles
function ViewAllRoles() {
  const query = "SELECT roles.title, roles.id, departments.department_name, roles.salary from roles join departments on roles.department_id = departments.id"; 
  connection.query(query, (err,res) => {
    if (err) throw err;
    console.table(res);
    // restart the application
    start();
  });
}

// Function to view all employees
function ViewAllEmployees() {
  const query = `SELECT employee_id, employee_first_name, e.last_name, r.title, d.department_name, r.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager_name
  FROM employee 
  LEFT JOIN roles r ON e.role_id = r.id 
  LEFT JOIN departments on d ON r.department_id = d.id
  LEFT JOIN employee m ON e.manager_id = m.id; `;
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    // restart the application
    start();
  })
}

   // function to add a department using Inquirer prompts
   function addDepartment() {
  inquirer
    .prompt(
      {
        type: "Input",
        name: "name",
        message: "Enter the new department name:",
      })
      .then((answer) => {
        console.log(answer.name);
        const query = `INSERT INTO department (department_name) VALUES ("${answer.name}")`;
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.log(`Added department ${answer.name} to the database!`)
          // restart the application
          start();
        });
      });

      // function to add new role
      const query = "SELECT * FROM departments";
      connection.query(query, (err, res) => {
        if (err) throw err;
        inquirer
        .prompt([
          {
          type: "input",
          name: "title",
          message: "Enter the new role name:",
          },
        {
          
          type: "input",
          name: "salary",
          message: "Enter the salary of new role:",
        },
        {
          type: "list",
          name: "department",
          message: "Select the department for the new role:",
          choices: res.map((department) => department.department_name),
        },
        ])
      })
      .then((answers) => {
        const department = res.find(
          (department) => department.name === answers.department);
          const query = "INSERT INTO roles SET ?";
          connection.query(
            query,
            {
              title: answers.title,
              salary: answers.salary,
              department_id: department,
            },
            (err, res) => {
              if (err) throw err;
              console.log 
              (`Added role ${answers.title} with salary ${answers.salary} to the ${answers.department} department to the database!`);
              //restart the application
              start();
            }
          );
      });
    }
  
      
//       // {
//         type: "input",
//         name: "department",
//         message: "Enter the employee's department:",
//       },
//       {
//         type: "input",
//         name: "salary",
//         message: "Enter the employee's salary:",
//       },
//       {
//         type: "input",
//         name: "manager",
//         message: "Enter the employee's manager:",
//       },
//        //Add more prompts for other employee information
//     ])
//     .then((answers) => {
//        //Execute SQL query to insert employee into database
//        const depart = `INSERT INTO department (first_name, last_name, role, manager) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.role}', '${answers.manager}')`;
//        connection.query(sql, (err, result) => {
//          if (err) throw err;
//          console.log(`${result.affectedRows} employee Added`);
//        });
//     });
// }

//init();

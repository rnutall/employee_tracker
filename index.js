const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'list',
    name: 'action',
    message: 'What would you like to do?',
    choices: [
      'Add employee',
      'Add department',
      'Add role',
      'View employees',
      'View departments',
      'View roles',
      'Update employee information'
    ]
  },
  // Add more prompts here for each action

]).then((answers) => {
  // Handle user input based on their selected action
});

function addEmployee() {
    // Get input from user using Inquirer prompts
    inquirer.prompt([
        {
            type: 'Input',
            employee_id: '',
            message: 'Enter the employee\'s ID:'
        }
      {
        type: 'input',
        name: 'firstName', 
        message: 'Enter the employee\'s first name:'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the employee\'s last name:'
      },
      {
        type: 'input',
        name: 'role',
        message: 'Enter the employee\'s role:'
      },
      {
        type: 'input',
        name: 'department',
        message: 'Enter the employee\'s department:'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the employee\'s salary:'
      },
      {
        type: 'input',
        name: 'manager',
        message: 'Enter the employee\'s manager:'
      },
      // Add more prompts for other employee information
    ]).then((answers) => {
      // Execute SQL query to insert employee into database
      const sql = `INSERT INTO employees (first_name, last_name, role, manager) VALUES ('${answers.firstName}', '${answers.lastName}', '${answers.role}', '${answers.manager}')`;
      connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(`${result.affectedRows} employee added`);
      });
    });
  }
  
  switch (answers.action) {
    case 'Add department':
      addDepartment();
        break;
      
        case 'Add role':
            addRole();
            break;

            case 'add employee':
                addEmployee(
                    rName, '',
                    lName,'',
                )
  };
Employee Tracker
Description
This is a simple employee tracker program written in Node.js. It allows you to keep track of your company's employees, including their names, roles, salaries, and departments. You can also view and update existing employee records, add new employees, and delete employees from the database.

Table of Contents
Title
Description
Table of Contents
Installation
Usage
Credits
License
Tests
Questions
Installation
To use this program, you'll need to have Node.js and MySQL installed on your computer. Once you've done that, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory and run npm install to install the necessary dependencies.
Set up your MySQL database by running the SQL schema file in the db folder.
Create a .env file in the root directory and add your MySQL credentials in the following format:
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=yourpassword
DB_NAME=employee_db
Replace the values with your own MySQL credentials.

Usage
Demonstration video

To start the program, navigate to the project directory and run npm start. This will launch the application in the command line interface.

Once the program is running, you can use the arrow keys to navigate the menu and perform various actions. Here are the available options:

View All Employees: displays a table of all employees, including their names, roles, salaries, and departments.
View All Employees by Department: allows you to view a table of employees by department.
View All Employees by Manager: allows you to view a table of employees by manager.
Add Employee: allows you to add a new employee to the database.
Remove Employee: allows you to remove an employee from the database.
Update Employee Role: allows you to update an employee's role in the database.
Update Employee Manager: allows you to update an employee's manager in the database.
Credits
This program was written by Rodney Nutall as part of a coding bootcamp project. It was built using Node.js, MySQL, and the following NPM packages:

inquirer
mysql2
console.table
License
This project is licensed under the MIT License. Feel free to use it for personal or commercial projects.

Tests
There are no tests for this repo at this time.
-- Drops the inventory_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the employee_db database --
CREATE DATABASE employee_db;

-- use employee_db database --
USE employee_db;

-- Creates the table within inventory_db --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255),
salary DECIMAL(10,2),
department_id INT, 
FOREIGN KEY (department_id)
REFERENCES department(id)
);

CREATE TABLE employee(
id int not null AUTO_INCREMENT primary key,
first_name varchar(30),
last_name varchar(30),
role_id int not null,
foreign key (role_id) REFERENCES role(id), 
manager_id int,
FOREIGN key (manager_id)
REFERENCES employee(id)
);

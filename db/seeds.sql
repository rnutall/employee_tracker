-- use employee_db database --
USE emplyoee_db;

INSERT INTO department (name) VALUES ('produce'),
('houseWares'), ('auto');

INSERT INTO role (title, salary, department_id),
values ('produce_manager', 80000, 1), ('produce_stocker', 45000, 1),
('houseWares_manager', 80000, 2), ('houseWares_stocker', 45000, 2),
('auto_manager', 80000, 3), ('auto_stocker' 45000. 3);

INSERT INTO employee (employee_id, firstName, lastName, title, salary, department_id, department, manager)
values (1, Florance, Price, produce_manager, 80000, department_id, ), (2, James, Madison, produce_manager, 45000, department_id), (2, James, Brown, houseWares_manager, 80000, department_id), (2, Cloud, Stratus, houseWares_stocker, 45000, department_id), (3, James, Garnett, auto_manager, 80000, department_id), (3, Cloud, Cumullous, produce_manager, 45000, department_id);

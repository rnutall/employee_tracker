-- use employee_db database --
USE emplyoee_db;

INSERT INTO department (name) 
VALUES ('produce'),
       ('houseWares'), 
       ('auto');

INSERT INTO role (title, salary, department_id),
values ('produce_manager', 80000, 1),
 ('produce_stocker', 45000, 1),
('houseWares_manager', 80000, 2), 
('houseWares_stocker', 45000, 2),
('auto_manager', 80000, 3), 
('auto_stocker' 45000. 3);

INSERT INTO employee (employee_id, firstName, lastName, manager)
values (1, "Florance", "Price", 1, ),
 (2, James, Madison, 1, 45000, null), 
 (2, James, Brown, 1, 80000, 2),
  (2, Cloud, Stratus, 2, 45000, null),
   (3, James, Garnett, 3, 80000, 3),
    (3, Cloud, Cumullous, 3, 45000, null);

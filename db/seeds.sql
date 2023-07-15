-- use employee_db database --
USE employee_db;

INSERT INTO department (name) 
VALUES ('produce'),
       ('houseWares'), 
       ('auto');

INSERT INTO role (title, salary, department_id)
values ('produce_manager', 80000, 1),
 ('produce_stocker', 45000, 1),
('houseWares_manager', 80000, 2), 
('houseWares_stocker', 45000, 2),
('auto_manager', 80000, 3), 
('auto_stocker', 45000, 3);

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
values ("Florance", "Price", 1, null),
 ('James', 'Madison', 2,  1), 
 ( 'James', 'Brown', 3, null),
  ('Cloud', 'Stratus', 4,  3),
   ('James', 'Garnett', 5,  null),
    ('Cloud', 'Cumullous', 6,  5);

DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price DECIMAL (10,2) NULL,
stock_quantity INT NULL,
primary key (id)
);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("waffle maker", "kitchen", 35.00, 24);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("vitamin B12", "health", 12.00, 30);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("heart locket", "jewelry", 59.00, 40);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("thermal mug", "kitchen", 20.00, 32);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("backpack", "sports", 49.00, 12);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("beacon", "security", 15.00, 20);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("glasses repair kit", "optical", 5.00, 22);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("juicer", "kitchen", 65.00, 12);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("cozy blanket", "home goods", 35.00, 12);

INSERT INTO	products (product_name, department_name, price, stock_quantity)
VALUES ("conditioner", "beauty products", 15.00, 12);


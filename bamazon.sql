
DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

SELECT * FROM bamazonDB.products;

CREATE TABLE products (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waffle maker     ", "Kitchen   ", 23.50, 30),
       ("Vitamin B12      ", "Health    ", 12.10, 50),
       ("Heart Locket     ", "Jewelry   ", 65.25, 20),
       ("Photo Frame      ", "Home Goods", 14.05, 60),
       ("Hiking Backpack  ", "Sporting  ", 89.10, 40),
       ("Spectacles       ", "Optical   ", 30.15, 20),
       ("Electric Juicer  ", "Kitchen   ", 89.25, 40),
       ("GPS Beacon       ", "Security  ", 19.50, 80),
       ("Cozy Blanket     ", "Homegoods ", 29.50, 80),
       ("Hair Conditioner", "Beauty    ", 12.50, 80);

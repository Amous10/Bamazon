DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

SELECT * FROM bamazonDB.products;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INTEGER(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Waffle maker    ", "Kitchen   ", 23.50, 30),
       ("Vitamin B12     ", "Health    ", 12.10, 50),
       ("Heart Locket    ", "Jewelry   ", 65.25, 20),
       ("Photo Frame     ", "Home Goods", 14.00, 60),
       ("Hiking Backpack ", "Sporting  ", 89.10, 40),
       ("Spectacles      ", "Optical   ", 30.15, 20),
       ("Electric Juicer ", "Kitchen   ", 89.25, 40),
       ("GPS Beacon      ", "Security  ", 19.50, 80),
       ("Cozy Blanket    ", "Homegoods ", 29.00, 80),
       ("Hair Conditioner", "Beauty    ", 12.50, 80);

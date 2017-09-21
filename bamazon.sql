DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;
CREATE TABLE products (
	item_id INT NOT NULL auto_increment,
	product_name VARCHAR(50) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(14, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cooler Master HAF 932", "PC Cases", 159.99, 42), 
("Intel Core i9-7920X Skylake-X 2.9GHz", "Processors", 1199.99, 1337), 
("MSI X299 XPOWER GAMING AC", "Motherboards", 449.99, 8675309),
("G.SKILL TridentZ RGB Series 16GB DDR4 3000", "Memory", 172.99, 11051605),
("ASUS ROG GeForce GTX 1080 Ti 11GB", "Video Cards", 759.99, 767),
("EVGA SuperNOVA 850W 80+ GOLD Modular", "Power Supply Units", 159.99, 186000),
("Noctua NF-F12 120mm Case Fan", "Cooling", 25.35, 4),
("Corsair Hydro Series H115i Extreme 280mm", "Cooling", 139.99, 1),
("Samsung 850 EVO 2.5in 500GB SATA III", "Storage", 159.99, 1),
("WD Black 2TB HDD 7200RPM 3.5in", "Storage", 119.99, 500);

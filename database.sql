CREATE DATABASE store;

CREATE TABLE `store`.`products` (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NULL,
    department_name VARCHAR(45) NULL,
    price VARCHAR(45) NOT NULL,
    stock_quantity VARCHAR(45) NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('1', 'Monitor', 'Computers', '120.00', '50');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('2', 'Mouse', 'Computers', '1000.00', '2');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('3', 'Mouse Pad', 'Computers', '00.01', '100');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('4', 'Web Cam', 'Computers', '20.00', '20');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('5', 'SLiced Apples', 'Food', '99.00', '50');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('6', 'Sliced Bread', 'Food', '9.00', '30');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('7', 'Pineaple', 'Food', '2.00', '35');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('8', 'Frozen Pizza', 'Food', '9.00', '50');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('9', 'Ice Cream', 'Food', '130.00', '15');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('10', 'Salsa', 'Food', '10.00', '20');

INSERT INTO `store`.`products` (`item_id`, `product_name`, `department_name`, `price`, `stock_quantity`) VALUES ('11', 'Cool', 'Fashion Yo', '9.81', '9');


CREATE DATABASE  IF NOT EXISTS `farm-mgmt`
USE `farm-mgmt`;

DROP TABLE IF EXISTS `customer`;
CREATE TABLE `customer` (
  `customer_id` int unsigned NOT NULL AUTO_INCREMENT,
  `cust_name` varchar(45) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_id_UNIQUE` (`customer_id`)
);

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `register_customer`(
	p_name VARCHAR(45),
	p_email_id VARCHAR(255),
	p_password VARCHAR(100)
)
BEGIN
	DECLARE p_customer_id INT;
	SELECT customer_id INTO p_customer_id FROM customer WHERE email_id = _email_id;

	IF p_customer_id IS NULL THEN
		INSERT INTO customer (cust_name, email_id, password)
		VALUES (p_name, p_email_id, p_password);
        
        SELECT 'CUSTOMER_ADDED' as status;
    ELSE
		SELECT customer_id, 'CUSTOMER_EXISTS' AS status FROM customer WHERE email_id = _email_id;
    END IF;
END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user`(
	p_email_id VARCHAR(100)
)
BEGIN
	IF EXISTS(SELECT customer_id FROM customer WHERE email_id = p_email_id) THEN
		SELECT customer_id, email_id, password, cust_name, phone_number, 1 AS status FROM customer WHERE email_id = p_email_id;
	ELSE
		SELECT 0 AS status;
	END IF;        
END ;;
DELIMITER ;


CREATE DATABASE  IF NOT EXISTS `farm-mgmt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `farm-mgmt`;
-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: farm-mgmt
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crop`
--

DROP TABLE IF EXISTS `crop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop` (
  `crop_id` int unsigned NOT NULL AUTO_INCREMENT,
  `crop_name` varchar(255) NOT NULL,
  `quantity` int NOT NULL,
  `cost_price` decimal(2,0) NOT NULL,
  `crop_status` varchar(45) NOT NULL,
  `selling_price` decimal(2,0) NOT NULL,
  `harvest_status` varchar(45) DEFAULT NULL,
  `discount` decimal(2,0) DEFAULT NULL,
  `item_purchased_qty` int DEFAULT NULL,
  PRIMARY KEY (`crop_id`),
  UNIQUE KEY `op_id_UNIQUE` (`crop_id`),
  KEY `idx_crop_crop_name` (`crop_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop`
--

LOCK TABLES `crop` WRITE;
/*!40000 ALTER TABLE `crop` DISABLE KEYS */;
/*!40000 ALTER TABLE `crop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crop_raw_material`
--

DROP TABLE IF EXISTS `crop_raw_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop_raw_material` (
  `crop_raw_material_id` int unsigned NOT NULL AUTO_INCREMENT,
  `raw_material_id` int unsigned NOT NULL,
  `crop_id` int unsigned NOT NULL,
  PRIMARY KEY (`crop_raw_material_id`),
  UNIQUE KEY `crop_raw_material_id_UNIQUE` (`crop_raw_material_id`),
  KEY `crm_crop_id_idx` (`crop_id`),
  KEY `crm_rawmaterial_id_idx` (`raw_material_id`),
  CONSTRAINT `crm_crop_id` FOREIGN KEY (`crop_id`) REFERENCES `crop` (`crop_id`),
  CONSTRAINT `crm_rawmaterial_id` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_material` (`raw_material_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_raw_material`
--

LOCK TABLES `crop_raw_material` WRITE;
/*!40000 ALTER TABLE `crop_raw_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `crop_raw_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crop_tend`
--

DROP TABLE IF EXISTS `crop_tend`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `crop_tend` (
  `crop_tend_id` int unsigned NOT NULL AUTO_INCREMENT,
  `crop_id` int unsigned NOT NULL,
  `employee_id` int unsigned NOT NULL,
  PRIMARY KEY (`crop_tend_id`),
  UNIQUE KEY `crop_tending_id_UNIQUE` (`crop_tend_id`),
  KEY `tender_employee_id_idx` (`employee_id`),
  KEY `tender_crop_id_idx` (`crop_id`),
  CONSTRAINT `tend_crop_id` FOREIGN KEY (`crop_id`) REFERENCES `crop` (`crop_id`),
  CONSTRAINT `tend_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crop_tend`
--

LOCK TABLES `crop_tend` WRITE;
/*!40000 ALTER TABLE `crop_tend` DISABLE KEYS */;
/*!40000 ALTER TABLE `crop_tend` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `customer_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `customer_id_UNIQUE` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (3,'abc xyz','a@b.com','$2b$12$t/k8iBOfAvRtTXNLMC0gfuoj46QyOIfFPoTnY/6x6WjoYcvJ62wqe',NULL);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_id` int unsigned NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(255) NOT NULL,
  `emp_designation` varchar(45) NOT NULL,
  `owner` tinyint DEFAULT NULL,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `employee_id_UNIQUE` (`employee_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `event_id` int unsigned NOT NULL,
  `event_name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(2,0) NOT NULL,
  `date` datetime DEFAULT NULL,
  `total_count` int DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `event_id_UNIQUE` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_attendance`
--

DROP TABLE IF EXISTS `event_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_attendance` (
  `event_attendance_id` int unsigned NOT NULL AUTO_INCREMENT,
  `customer_id` int unsigned NOT NULL,
  `event_id` int unsigned NOT NULL,
  PRIMARY KEY (`event_attendance_id`),
  UNIQUE KEY `event_attendance_id_UNIQUE` (`event_attendance_id`),
  KEY `customer_id_idx` (`customer_id`),
  KEY `event_id_idx` (`event_id`),
  CONSTRAINT `customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`),
  CONSTRAINT `event_id` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_attendance`
--

LOCK TABLES `event_attendance` WRITE;
/*!40000 ALTER TABLE `event_attendance` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_organization`
--

DROP TABLE IF EXISTS `event_organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event_organization` (
  `event_organization_id` int unsigned NOT NULL AUTO_INCREMENT,
  `event_id` int unsigned NOT NULL,
  `employee_id` int unsigned NOT NULL,
  PRIMARY KEY (`event_organization_id`),
  UNIQUE KEY `event_organization_id_UNIQUE` (`event_organization_id`),
  KEY `event_id_idx` (`event_id`),
  KEY `employee_id_idx` (`employee_id`),
  CONSTRAINT `org_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `org_event_id` FOREIGN KEY (`event_id`) REFERENCES `event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_organization`
--

LOCK TABLES `event_organization` WRITE;
/*!40000 ALTER TABLE `event_organization` DISABLE KEYS */;
/*!40000 ALTER TABLE `event_organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int unsigned NOT NULL AUTO_INCREMENT,
  `order_status` varchar(45) NOT NULL,
  `order_date` datetime NOT NULL,
  `total_price` decimal(2,0) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `order_id_UNIQUE` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_detail`
--

DROP TABLE IF EXISTS `order_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_detail` (
  `order_detail_id` int unsigned NOT NULL AUTO_INCREMENT,
  `item_price` decimal(2,0) NOT NULL,
  `item_quantity` int NOT NULL,
  `crop_id` int unsigned NOT NULL,
  `order_id` int unsigned NOT NULL,
  PRIMARY KEY (`order_detail_id`),
  UNIQUE KEY `order_detail_id_UNIQUE` (`order_detail_id`),
  KEY `crop_id_idx` (`crop_id`),
  KEY `order_id_idx` (`order_id`),
  CONSTRAINT `crop_id` FOREIGN KEY (`crop_id`) REFERENCES `crop` (`crop_id`),
  CONSTRAINT `order_id` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_detail`
--

LOCK TABLES `order_detail` WRITE;
/*!40000 ALTER TABLE `order_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_material`
--

DROP TABLE IF EXISTS `raw_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_material` (
  `raw_material_id` int unsigned NOT NULL AUTO_INCREMENT,
  `raw_material_name` varchar(255) NOT NULL,
  `raw_material_quantity` int NOT NULL,
  `qty_threshold` int DEFAULT NULL,
  `price` decimal(2,0) DEFAULT NULL,
  `raw_material_provider_id` int unsigned NOT NULL,
  PRIMARY KEY (`raw_material_id`),
  UNIQUE KEY `raw_material_id_UNIQUE` (`raw_material_id`),
  KEY `raw_material_provider_id_idx` (`raw_material_provider_id`),
  CONSTRAINT `raw_material_provider_id` FOREIGN KEY (`raw_material_provider_id`) REFERENCES `raw_material_provider` (`raw_material_provider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_material`
--

LOCK TABLES `raw_material` WRITE;
/*!40000 ALTER TABLE `raw_material` DISABLE KEYS */;
/*!40000 ALTER TABLE `raw_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_material_provider`
--

DROP TABLE IF EXISTS `raw_material_provider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_material_provider` (
  `raw_material_provider_id` int unsigned NOT NULL AUTO_INCREMENT,
  `rmp_name` varchar(255) NOT NULL,
  PRIMARY KEY (`raw_material_provider_id`),
  UNIQUE KEY `raw_material_provider_id_UNIQUE` (`raw_material_provider_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_material_provider`
--

LOCK TABLES `raw_material_provider` WRITE;
/*!40000 ALTER TABLE `raw_material_provider` DISABLE KEYS */;
/*!40000 ALTER TABLE `raw_material_provider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raw_material_purchase`
--

DROP TABLE IF EXISTS `raw_material_purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raw_material_purchase` (
  `raw_material_purchase_id` int unsigned NOT NULL AUTO_INCREMENT,
  `purchase_date` datetime NOT NULL,
  `total_price` decimal(2,0) DEFAULT NULL,
  `purchase_qty` int unsigned NOT NULL,
  `employee_id` int unsigned NOT NULL,
  `raw_material_id` int unsigned NOT NULL,
  PRIMARY KEY (`raw_material_purchase_id`),
  UNIQUE KEY `raw_material_purchase_id_UNIQUE` (`raw_material_purchase_id`),
  KEY `purchase_employee_id_idx` (`employee_id`),
  KEY `purchase_raw_material_id_idx` (`raw_material_id`),
  CONSTRAINT `purchase_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `purchase_raw_material_id` FOREIGN KEY (`raw_material_id`) REFERENCES `raw_material` (`raw_material_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raw_material_purchase`
--

LOCK TABLES `raw_material_purchase` WRITE;
/*!40000 ALTER TABLE `raw_material_purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `raw_material_purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'farm-mgmt'
--
/*!50003 DROP PROCEDURE IF EXISTS `get_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `get_user`(
	p_email_id VARCHAR(255)
)
BEGIN
	IF EXISTS(SELECT customer_id FROM customer WHERE email_id = p_email_id) THEN
		SELECT customer_id, email_id, password, customer_name, 1 AS status FROM customer WHERE email_id = p_email_id;
	ELSE
		SELECT 0 AS status;
	END IF;        
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `register_customer` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `register_customer`(
	p_name VARCHAR(45),
	p_email_id VARCHAR(255),
	p_password VARCHAR(100)
)
BEGIN
	DECLARE p_customer_id INT;
	SELECT customer_id INTO p_customer_id FROM customer WHERE email_id = p_email_id;

	IF p_customer_id IS NULL THEN
		INSERT INTO customer (customer_name, email_id, password)
		VALUES (p_name, p_email_id, p_password);
        
        SELECT 'CUSTOMER_ADDED' as status;
    ELSE
		SELECT customer_id, 'CUSTOMER_EXISTS' AS status FROM customer WHERE email_id = _email_id;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-24 17:44:15

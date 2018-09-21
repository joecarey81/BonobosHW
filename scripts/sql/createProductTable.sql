CREATE TABLE IF NOT EXISTS `bonobos`.`products` (
  `product_id` INT(11) NOT NULL,
  `product_name` VARCHAR(255) NOT NULL,
  `product_image` VARCHAR(255) NOT NULL,
  `product_description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`product_id`),
  INDEX `idx_product_name` (`product_name` ASC));

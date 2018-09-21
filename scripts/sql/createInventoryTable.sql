CREATE TABLE IF NOT EXISTS `bonobos`.`inventory` (
  `product_id` INT(11) NOT NULL,
  `waist` INT(11) NOT NULL,
  `length` INT(11) NOT NULL,
  `style` VARCHAR(45) NOT NULL,
  `count` INT(11) NOT NULL,
  UNIQUE INDEX `idx_id_waist_length_style` (`product_id` ASC, `waist` ASC, `length` ASC, `style` ASC),
  CONSTRAINT `product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `bonobos`.`products` (`product_id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);

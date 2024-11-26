-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


-- -----------------------------------------------------
-- Schema bank_project
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bank_project
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bank_project` ;
USE `bank_project` ;

-- -----------------------------------------------------
-- Table `bank_project`.`advisor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_project`.`advisor` (
  `advisor_id` INT NOT NULL AUTO_INCREMENT,
  `advisor_gender` INT NULL,
  `advisor_firstname` VARCHAR(45) NULL,
  `advisor_lastname` VARCHAR(45) NULL,
  `advisor_email` VARCHAR(45) NULL,
  `advisor_phone` VARCHAR(45) NULL,
  `advisor_address` VARCHAR(45) NULL,
  `advisor_birthday` VARCHAR(45) NULL,
  PRIMARY KEY (`advisor_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bank_project`.`client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_project`.`client` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `client_gender` INT NULL,
  `client_firstname` VARCHAR(45) NULL,
  `client_lastname` VARCHAR(45) NULL,
  `client_email` VARCHAR(45) NULL,
  `client_password` VARCHAR(45) NULL,
  `client_phone` VARCHAR(45) NULL,
  `client_birthday` DATE,
  `client_address` VARCHAR(45) NULL,
  `client_advisor_id` INT NOT NULL,
  PRIMARY KEY (`client_id`),
  INDEX `fk_client_advisor1_idx` (`client_advisor_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_advisor1`
    FOREIGN KEY (`client_advisor_id`)
    REFERENCES `bank_project`.`advisor` (`advisor_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bank_project`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_project`.`account` (
  `account_id` INT NOT NULL AUTO_INCREMENT,
  `account_label` VARCHAR(45) NULL,
  `account_iban` VARCHAR(45) NULL,
  `account_balance` FLOAT NULL,
  `account_interest` FLOAT NULL,
  `account_creation_date` DATE NULL,
  `account_max_amount` FLOAT NULL,
  `account_client_id` INT NOT NULL,
  PRIMARY KEY (`account_id`),
  INDEX `fk_Account_Client1_idx` (`account_client_id` ASC) VISIBLE,
  CONSTRAINT `fk_Account_Client1`
    FOREIGN KEY (`account_client_id`)
    REFERENCES `bank_project`.`client` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bank_project`.`loan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_project`.`loan` (
  `loan_id` INT NOT NULL AUTO_INCREMENT,
  `loan_status` INT,
  `loan_amount` INT NULL,
  `loan_label` VARCHAR(45) NULL,
  `loan_to_refund` INT NULL,
  `loan_interest` FLOAT NULL,
  `loan_start_date` DATE NULL,
  `loan_end_date` DATE NULL,
  `loan_client_id` INT NOT NULL,
  PRIMARY KEY (`loan_id`),
  INDEX `fk_loan_client1_idx` (`loan_client_id` ASC) VISIBLE,
  CONSTRAINT `fk_loan_client1`
    FOREIGN KEY (`loan_client_id`)
    REFERENCES `bank_project`.`client` (`client_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bank_project`.`payement`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bank_project`.`payement` (
  `payement_id` INT NOT NULL AUTO_INCREMENT,
  `payement_amount` FLOAT NULL,
  `payement_label` VARCHAR(45) NULL,
  `payement_currency` VARCHAR(45) NULL,
  `payement_date` DATE NOT NULL,
  `payement_account_sender_id` INT NOT NULL,
  `payement_account_reciever_id` INT NOT NULL,
  PRIMARY KEY (`payement_id`),
  INDEX `fk_payement_account1_idx` (`payement_account_sender_id` ASC) VISIBLE,
  INDEX `fk_payement_account2_idx` (`payement_account_reciever_id` ASC) VISIBLE,
  CONSTRAINT `fk_payement_account1`
    FOREIGN KEY (`payement_account_sender_id`)
    REFERENCES `bank_project`.`account` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_payement_account2`
    FOREIGN KEY (`payement_account_reciever_id`)
    REFERENCES `bank_project`.`account` (`account_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

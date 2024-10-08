USE bank_project;


-- -----------------------------------------------------
-- To view table contents 
-- -----------------------------------------------------

-- SELECT * FROM account;
-- SELECT * FROM advisor;
-- SELECT * FROM client;
-- SELECT * FROM loan;
-- SELECT * FROM payement;
-- SELECT * FROM payement;

/*
SELECT c.client_firstname
FROM bank_project.client c
LEFT JOIN bank_project.account a ON c.client_id = a.account_client_id
WHERE a.account_id IS NULL;


SELECT * FROM client
WHERE client_firstname = 'Helen';

SELECT * FROM account
ORDER BY account_balance DESC;


*/

/*
SELECT c.`client_firstname`, c.`client_lastname`, a.`advisor_firstname`, a.`advisor_lastname`
FROM `bank_project`.`client` c
JOIN `bank_project`.`advisor` a ON c.`client_advisor_id` = a.`advisor_id`;

SELECT `client`.`client_firstname`, `client`.`client_lastname`, `advisor`.`advisor_firstname`, `advisor`.`advisor_lastname`
FROM `bank_project`.`client`
JOIN `bank_project`.`advisor`
ON `client`.`client_advisor_id` = `advisor`.`advisor_id`;



SELECT `client`.`client_firstname`, `client`.`client_lastname`, SUM(`account`.`account_balance`) AS `total_balance`
FROM `bank_project`.`client`
JOIN `bank_project`.`account`
ON `client`.`client_id` = `account`.`account_client_id`
GROUP BY `client`.`client_id`
ORDER BY `total_balance` DESC;


*/



/*
SELECT `client_id`, `client_firstname`, `client_lastname`
FROM `bank_project`.`client`
WHERE `client_id` IN (
    SELECT `account_client_id`
    FROM `bank_project`.`account`
    GROUP BY `account_client_id`
    HAVING COUNT(*) > 1
);
*/



/*
SELECT `payement`.`payement_id`, `payement`.`payement_amount`, `payement`.`payement_account_sender_id`,`payement`.`payement_account_reciever_id` 
FROM payement
WHERE `payement`.`payement_amount` 
> ( SELECT AVG(payement_amount) FROM payement) ;
*/


/*
SELECT `loan`.`loan_amount`, `loan`.`loan_to_refund`, `loan`.`loan_interest`, `client`.`client_firstname`, `client`.`client_lastname`,`account`.`account_balance`
FROM LOAN
JOIN client 
ON `loan`.`loan_id` = `client`.`client_id`
JOIN account
ON `client`.`client_id` = `account`.`account_client_id`
WHERE `account_balance`> 5000
ORDER BY (`account`.`account_balance`);
*/






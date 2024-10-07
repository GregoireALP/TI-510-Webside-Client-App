USE bank_project;

SELECT c.client_firstname
FROM bank_project.client c
LEFT JOIN bank_project.account a ON c.client_id = a.account_client_id
WHERE a.account_id IS NULL;


-- ADVISORS --
/*
INSERT INTO advisor (`advisor_gender`,`advisor_firstname`,`advisor_lastname`,`advisor_phone`,`advisor_email`,`advisor_address`,`advisor_birthday`)
VALUES
  (2,"Anastasia","Boyd","09 38 68 85 02","magnis.dis@yahoo.com","152-4982 Primis St.","2014-04-04 19:06:31"),
  (2,"Adrian","Pruitt","07 34 24 63 89","mi@aol.ca","3707 Amet Road","2022-04-23 01:46:35"),
  (1,"Rahim","Frost","02 45 25 91 42","tincidunt.aliquam@icloud.edu","Ap #414-9273 In, Street","1987-03-24 05:46:53"),
  (1,"Jolie","Mcdonald","08 22 87 24 33","eget@icloud.org","Ap #836-531 Sed Street","1977-01-25 00:03:11"),
  (1,"Bo","Glass","06 48 80 99 36","etiam.laoreet.libero@icloud.com","P.O. Box 457, 3983 Massa. Street","2014-05-01 08:42:13"),
  (1,"Martena","Meyers","07 63 15 85 05","eu.odio@outlook.edu","3712 Ullamcorper Ave","1992-04-28 09:16:51"),
  (2,"Preston","Reyes","08 41 86 17 43","phasellus.in.felis@protonmail.com","Ap #847-5098 Aenean Ave","2020-01-07 03:44:20"),
  (1,"Asher","Fleming","01 03 87 41 73","ac.eleifend@yahoo.couk","7902 Pede. Ave","1988-10-13 08:13:53"),
  (2,"Moses","Morales","05 31 30 37 11","malesuada.integer@outlook.couk","Ap #555-5861 Luctus, St.","1997-11-08 03:42:10"),
  (2,"Jin","Jensen","08 88 61 73 83","mauris.ut@google.net","3803 Erat Rd.","1976-06-10 14:32:36");
*/

-- CLIENTS --

/*
INSERT INTO client (`client_gender`,`client_firstname`,`client_lastname`,`client_email`,`client_phone`,`client_birthday`,`client_address`,`client_advisor_id`)
VALUES
  (1,"Yetta","Workman","purus.sapien@yahoo.ca","01 41 76 81 46","1990-08-27 23:56:32","5826 Commodo St.",5),
  (1,"Ryder","Ayers","ipsum.sodales.purus@outlook.net","07 58 21 37 24","2008-12-12 08:02:26","Ap #114-7423 At, Rd.",3),
  (1,"Iona","Higgins","lacinia@icloud.ca","03 42 34 70 22","1997-06-11 14:28:58","Ap #586-661 Imperdiet St.",7),
  (2,"Eaton","Horton","morbi.quis@yahoo.net","08 26 26 35 57","2006-02-24 04:33:05","241-3601 Leo St.",6),
  (1,"Denton","Pratt","non.lobortis@yahoo.org","05 31 68 51 68","2018-07-08 19:16:13","Ap #235-6316 Ornare Road",3),
  (2,"Helen","Gutierrez","urna.ut@google.org","05 84 13 78 69","2000-02-25 22:42:35","561-8580 Eget, Street",2),
  (2,"Leo","Howell","eros.nam@google.com","07 16 94 44 23","2008-12-10 03:20:16","Ap #301-6393 Est. Ave",10),
  (1,"Shellie","Johns","egestas@aol.edu","02 16 15 17 24","1989-06-04 16:59:44","8104 Vestibulum, Ave",6),
  (2,"Garrett","Snow","eu.euismod.ac@aol.net","03 45 96 69 20","1979-04-30 12:37:21","950-9063 Nibh. Road",5),
  (1,"Ayanna","Roberts","amet.risus@aol.org","01 45 54 46 85","2017-05-20 23:15:21","P.O. Box 657, 7091 Nibh St.",8);
  */
  
  -- ACCOUNTS --
  /*
  INSERT INTO account (`account_label`,`account_balance`,`account_interest`,`account_creation_date`,`account_max_amount`,`account_client_id`,`account_iban`)
VALUES
  ("Current",3694,1,"2025-06-24 20:41:33",15000,6,"PK2783590808654194798377"),
  ("Current",4538,1,"2023-12-17 23:14:58",15000,6,"LV17EELY1143612334434"),
  ("Current",4422,1,"2024-08-09 08:02:12",15000,7,"MD9088730499456250422577"),
  ("Current",6194,1,"2025-03-11 20:54:56",15000,4,"TR951762311774351810433946"),
  ("Current",7156,1,"2025-06-15 19:34:52",15000,7,"PL80824281187224283107244114"),
  ("Current",5052,1,"2023-12-09 20:24:08",15000,10,"CH9850368631476840887"),
  ("Current",3047,1,"2025-08-16 22:49:12",15000,4,"GB59PNNG24235554823441"),
  ("Current",9933,1,"2025-06-22 10:13:52",15000,1,"BH76726084925344281122"),
  ("Current",3615,1,"2023-09-22 13:05:23",15000,4,"NO9073425268576"),
  ("Current",3914,1,"2025-07-29 16:24:23",15000,1,"CY64013998348885483137472754");
  */
  
  -- PAYEMENTS --
  /*
  INSERT INTO payement (`payement_amount`, `payement_label`, `payement_start_date`, `payement_end_date`, `payement_currency`, `payement_account_sender_id`, `payement_account_reciever_id`)
  VALUES
  (109, "Rent", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Euro", 1, 5),
  (1003, "Refund", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Dollar", 4, 8),
  (583, "Shopping", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Forint", 3, 9),
  (234, "Spotify", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Euro", 2, 1),
  (948, "School", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Dollar", 4, 7),
  (934, "Card fee", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Dollar", 6, 3),
  (23, "Train", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Forint", 9, 1),
  (108, "Plane", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Euro", 7, 3),
  (68, "Museum", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Euro", 4, 8),
  (98, "Concert", "2025-07-29 16:24:23", "2025-07-29 16:24:23", "Dollar", 9, 3);
  */
  
  -- LOAN --
/*
INSERT INTO loan (`loan_amount`, `loan_label`, `loan_interest`, `loan_start_date`, `loan_to_refund`, `loan_end_date`, `loan_client_id`)
VALUES 
(10000, "School loan", 0.15, "2025-07-29 16:24:23", 7600, "2025-09-29 16:24:23", 1),
(25000, "Consumption loan", 0.2, "2025-07-29 16:24:23", 1000, "2025-02-26 16:24:23", 6),
(3000, "Flat loan", 0.35, "2025-07-29 16:24:23", 500, "2025-03-29 16:24:23", 6),
(6500, "House loan", 0.45, "2025-07-29 16:24:23", 3200, "2025-09-29 16:24:23", 9),
(3000, "Rental loan", 0.24, "2025-07-29 16:24:23", 250, "2025-03-29 16:24:23", 3);
*/

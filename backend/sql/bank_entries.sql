
-- ADVISORS --

INSERT INTO advisor (`advisor_id`,`advisor_gender`,`advisor_firstname`,`advisor_lastname`,`advisor_phone`,`advisor_email`,`advisor_address`,`advisor_birthday`)
VALUES
  (1, 2, "Anastasia", "Boyd", "09 38 68 85 02", "magnis.dis@yahoo.com", "152-4982 Primis St.", "2014-04-04"),
  (2, 2, "Adrian", "Pruitt", "07 34 24 63 89", "mi@aol.ca", "3707 Amet Road", "2022-04-23"),
  (3, 1, "Rahim", "Frost", "02 45 25 91 42", "tincidunt.aliquam@icloud.edu", "Ap #414-9273 In, Street", "1987-03-24"),
  (4, 1, "Jolie", "Mcdonald", "08 22 87 24 33", "eget@icloud.org", "Ap #836-531 Sed Street", "1977-01-25"),
  (5, 1, "Bo", "Glass", "06 48 80 99 36", "etiam.laoreet.libero@icloud.com", "P.O. Box 457, 3983 Massa. Street", "2014-05-01"),
  (6, 1, "Martena", "Meyers", "07 63 15 85 05", "eu.odio@outlook.edu", "3712 Ullamcorper Ave", "1992-04-28"),
  (7, 2, "Preston", "Reyes", "08 41 86 17 43", "phasellus.in.felis@protonmail.com", "Ap #847-5098 Aenean Ave", "2020-01-07"),
  (8, 1, "Asher", "Fleming", "01 03 87 41 73", "ac.eleifend@yahoo.couk", "7902 Pede. Ave", "1988-10-13"),
  (9, 2, "Moses", "Morales", "05 31 30 37 11", "malesuada.integer@outlook.couk", "Ap #555-5861 Luctus, St.", "1997-11-08"),
  (10, 2, "Jin", "Jensen", "08 88 61 73 83", "mauris.ut@google.net", "3803 Erat Rd.", "1976-06-10");



  


-- CLIENTS --


INSERT INTO client (`client_id`,`client_gender`,`client_firstname`,`client_lastname`,`client_email`,`client_password`,`client_phone`,`client_birthday`,`client_address`,`client_advisor_id`)
VALUES
  (1, 1, "Yetta", "Workman", "purus.sapien@yahoo.ca", "YetWork90", "01 41 76 81 46", "1990-08-27", "5826 Commodo St.", 5),
  (2, 1, "Ryder", "Ayers", "ipsum.sodales.purus@outlook.net", "RydAy08", "07 58 21 37 24", "2008-12-12", "Ap #114-7423 At, Rd.", 3),
  (3, 1, "Iona", "Higgins", "lacinia@icloud.ca","IoHig97", "03 42 34 70 22", "1997-06-11", "Ap #586-661 Imperdiet St.", 7),
  (4, 2, "Eaton", "Horton", "morbi.quis@yahoo.net", "EatHor06", "08 26 26 35 57", "2006-02-24", "241-3601 Leo St.", 6),
  (5, 1, "Denton", "Pratt", "non.lobortis@yahoo.org", "DentPrat08", "05 31 68 51 68", "2008-07-08", "Ap #235-6316 Ornare Road", 3),
  (6, 2, "Helen", "Gutierrez", "urna.ut@google.org", "HelGut00", "05 84 13 78 69", "2000-02-25", "561-8580 Eget, Street", 2),
  (7, 2, "Leo", "Howell", "eros.nam@google.com", "LeoHow08", "07 16 94 44 23", "2008-12-10", "Ap #301-6393 Est. Ave", 10),
  (8, 1, "Shellie", "Johns", "egestas@aol.edu", "SheJo89", "02 16 15 17 24", "1989-06-04", "8104 Vestibulum, Ave", 6),
  (9, 2, "Garrett", "Snow", "eu.euismod.ac@aol.net", "GarSno79", "03 45 96 69 20", "1979-04-30", "950-9063 Nibh. Road", 5),
  (10, 1, "Ayanna", "Roberts", "amet.risus@aol.org", "AyaRob", "01 45 54 46 85", "2017-05-20", "P.O. Box 657, 7091 Nibh St.", 8);


  


  
  
  -- ACCOUNTS --

  INSERT INTO account (`account_id`, `account_label`, `account_balance`, `account_interest`, `account_creation_date`, `account_max_amount`, `account_client_id`, `account_iban`)
VALUES
  (1, "Current", 3694, 1, "2025-06-24", 15000, 6, "PK2783590808654194798377"),
  (2, "Current", 4538, 1, "2023-12-17", 15000, 6, "LV17EELY1143612334434"),
  (3, "Current", 4422, 1, "2024-08-09", 15000, 7, "MD9088730499456250422577"),
  (4, "Current", 6194, 1, "2025-03-11", 15000, 4, "TR951762311774351810433946"),
  (5, "Current", 7156, 1, "2025-06-15", 15000, 7, "PL80824281187224283107244114"),
  (6, "Current", 5052, 1, "2023-12-09", 15000, 10, "CH9850368631476840887"),
  (7, "Current", 3047, 1, "2025-08-16", 15000, 4, "GB59PNNG24235554823441"),
  (8, "Current", 9933, 1, "2025-06-22", 15000, 1, "BH76726084925344281122"),
  (9, "Current", 3615, 1, "2023-09-22", 15000, 4, "NO9073425268576"),
  (10, "Current", 3914, 1, "2025-07-29", 15000, 1, "CY64013998348885483137472754");

  


  
  
  -- PAYEMENTS --

  INSERT INTO payement (`payement_id`,`payement_amount`, `payement_label`, `payement_date`, `payement_currency`, `payement_account_sender_id`, `payement_account_reciever_id`)
  VALUES
  (1, 109, "Rent", "2024-02-12", "Euro", 1, 5),
  (2, 1003, "Refund", "2020-03-13", "Dollar", 4, 8),
  (3, 583, "Shopping", "2022-08-30", "Forint", 3, 9),
  (4, 234, "Spotify", "2021-01-02", "Euro", 2, 1),
  (5, 948, "School", "2024-06-03", "Dollar", 4, 7),
  (6, 934, "Card fee", "2023-06-04", "Dollar", 6, 3),
  (7, 23, "Train", "2019-11-28", "Forint", 9, 1),
  (8, 108, "Plane", "2018-07-15", "Euro", 7, 3),
  (9, 68, "Museum", "2022-09-04", "Euro", 4, 8),
  (10, 98, "Concert", "2024-09-20", "Dollar", 9, 3);

  
  
 
  
  -- LOAN --
INSERT INTO loan (`loan_id`, `loan_status`,`loan_amount`, `loan_label`, `loan_interest`, `loan_start_date`, `loan_to_refund`, `loan_end_date`, `loan_client_id`)
VALUES 
  (1, 0, 10000, "School loan", 0.15, "2025-07-29", 7600, "2025-09-29", 1),
  (2, 1, 25000, "Consumption loan", 0.2, "2025-07-29", 1000, "2025-02-26", 6),
  (3, 2, 3000, "Flat loan", 0.35, "2025-07-29", 0, "2025-03-29", 6),
  (4, 2, 6500, "House loan", 0.45, "2025-07-29", 0, "2025-09-29", 9),
  (5, 3, 3000, "Rental loan", 0.24, "2025-07-29", 0, "2025-03-29", 3);


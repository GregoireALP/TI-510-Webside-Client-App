
![App Screenshot](https://github.com/GregoireALP/TI-510-Webside-Client-App/blob/main/frontend/src/assets/logo.png?raw=true)


# Baba Bank

Vue.Js and Express.Js project for TI-501 EFREI.





## Authors

- [@Grégoire Alperovitch](https://github.com/GregoireALP)
- [@Maxime Chamont](https://github.com/Maxiiime78)
- [@Nicolas Flandin](https://github.com/Nico9417)




## Deployment

To run this project you must install Vue.js dependancies

```bash
  npm install
  npm run dev
```


## Features

- Connect as a bank user
- Connect as a bank advisor
- Connect as a bank administrator

As a **client** you can : Apply for a loan, open an account, contact your advisor, execute a payement

As a **advisor** you can : accept a loan, check clients payements, check clients loans, contact your clients, close client account. Each advisor is link to a limited client amount

As a **bank admin** you can: change a client advisor, change interest on an account, add balance on an account. 


## Tech Stack

**Client:** Vue.JS

**Server:** Node, Express

**DB:** MySQL
#### Tables
 - Client 
 - Advisor
 - Account
 - Loans
 - Payements


# Njuskalo task intro

This repo contains a solution to Njuskalo technical task, with the tests written in Cypress.

To run it on your machine, follow [these instructions](https://docs.cypress.io/guides/getting-started/installing-cypress) to install Cypress.

Make sure that you have already have node_modules. In case not, run ```npm init``` in terminal. 

## Tasks 
1. Create account at njuškalo.hr. Write an automated test in Cypress that will check that Login and Logout works with created account. - LoginLogout.cy.js

2. Login with previously created account. Automate search of the term „Audi A4“ using maximum price filter of
15000€. - SearchFilter.cy.js

3. Njuškalo supports search using ad ID. Automate search with ad ID
1349039 - SearchID.cy.js

## Note
Sometimes when running tests, Captcha can appear, in that case solve it in a browser ran by Cypress to prove that you are human and run the spec files again. 

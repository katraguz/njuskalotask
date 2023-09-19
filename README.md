# Njuskalo task intro

This repo contains a solution to Njuskalo technical task, with the tests written in Cypress.

To run it on your machine, follow [these instructions](https://docs.cypress.io/guides/getting-started/installing-cypress) to install Cypress.

Make sure that you have already have node_modules. In case not, run ```npm init``` in terminal. 

## Tasks 
1. Potrebno je napraviti račun kao kupac na njuškalo.hr. Napraviti automatski test koji će
provjeriti radi li login i logout sa kreiranim računom. - LoginLogout.cy.js

2. Ulogirati se kao korisnik iz točke 1. Automatizirati test pretrage „Audi A4“ sa filterom do
15000€. - SearchFilter.cy.js

3. Njuškalo podržava pretraživanje oglasa po njegovom ID-u. Automatizirati pretragu za oglas ID
1349039 - SearchID.cy.js

## Note
Sometimes when running tests, Captcha can appear, in that case solve it in a browser ran by Cypress to prove that you are human and run the spec files again. 

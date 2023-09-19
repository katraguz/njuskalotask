// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import LoginPage from "../e2e/pageObjects/LoginPage"

// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (username, password) => {
    const login = new LoginPage ()
    cy.visit('/prijava/')
    cy.get('#didomi-notice-agree-button').click()

    login.getUsername().type(username)
    login.getPassword().type(password)
    login.getLoginbutton().click()
  })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

describe('UC-ManageSurveys-Edit Survey', () => {
  Cypress.on('uncaught:exception', () => false);

  it('opens the edit-survey login flow', () => {
    cy.visit('https://student.michaelkentburns.com/wp-login.php');
    cy.get('form#loginform').should('be.visible');
    cy.get('input[name="log"]').type('eva_mukasa');
    cy.get('input[name="pwd"]').type('zesrA8-nuwfuw-xutfur');
    cy.get('input[name="wp-submit"]').click({ force: true });
    cy.location('pathname', { timeout: 10000 }).should('include', 'wp-admin');
  });
});

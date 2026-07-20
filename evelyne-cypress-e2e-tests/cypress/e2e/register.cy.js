/// <reference types="cypress" />

describe('Test spec for user registration', () => {
  const registerUrl = 'https://student.michaelkentburns.com/wp-login.php?action=register';

  it('starts on the registration page and validates the form', () => {
    cy.visit(registerUrl);

    cy.contains('Registration Form').should('be.visible');

    cy.get('input[name="user_login"]').clear().type(`student${Date.now()}`);
    cy.get('input[name="user_email"]').clear().type(`student${Date.now()}@mail.com`);

    cy.get('input[name="wp-submit"]').click();

    // assert there is no error message (registration likely succeeded)
    cy.contains('Error:').should('not.exist');
  });

  it('shows an error when the email is invalid', () => {
    cy.visit(registerUrl);

    cy.get('input[name="user_login"]').clear().type(`student${Date.now()}`);
    cy.get('input[name="user_email"]').clear().type('invalid-email');

    cy.get('input[name="wp-submit"]').click();

    // any error message should be visible for invalid/empty email
    cy.contains('Error:').should('be.visible');
  });

  it('shows an error when the email field is empty', () => {
    cy.visit(registerUrl);

    cy.get('input[name="user_login"]').clear().type(`student${Date.now()}`);
    cy.get('input[name="user_email"]').clear();

    cy.get('input[name="wp-submit"]').click();

    cy.contains('Error:').should('be.visible');
  });
});

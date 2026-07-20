/// <reference types="cypress" />

describe('Login use case', () => {

    const loginUrl = 'https://student.michaelkentburns.com/wp-login.php';
  
  const registerUrl = 'https://student.michaelkentburns.com/wp-login.php?action=register';

  const fillLoginForm = (username, password) => {

    cy.visit(loginUrl);
    cy.get('form#loginform', { timeout: 10000 }).should('be.visible');

    cy.get('input[name="log"]').clear({ force: true }).type(username, { force: true, delay: 50 });
    cy.get('input[name="pwd"]').clear({ force: true }).type(password, { force: true, delay: 50 });
  }; 


   it('renders the login interface for users', () => {
    cy.visit(loginUrl);

    cy.contains('Log In').should('be.visible');
    cy.get('form#loginform').should('be.visible');
    
    cy.get('input[name="log"]').should('be.visible');
    cy.get('input[name="pwd"]').should('be.visible');
    cy.get('input[name="wp-submit"]').should('be.visible');
    cy.contains('Lost your password?').should('be.visible');
  });

    it('logs in successfully with valid credentials', () => {
    fillLoginForm('eva_mukasa', 'zesrA8-nuwfuw-xutfur');
    cy.get('input[name="wp-submit"]').click({ force: true });

    cy.location('pathname', { timeout: 20000 }).should('match', /wp-admin|wp-login/);
  });
it('shows an error for invalid credentials', () => {
    fillLoginForm('wrong-user', 'wrong-password');
    cy.get('input[name="wp-submit"]').click({ force: true });

    cy.get('#login_error', { timeout: 10000 }).should('be.visible');
  });

  it('guides the user to register when no account exists', () => {
    cy.visit(registerUrl);
    cy.contains('Registration Form').should('be.visible');
    cy.get('input[name="user_login"]').should('be.visible');
    cy.get('input[name="user_email"]').should('be.visible');
  });

  it('allows the user to recover a forgotten password', () => {
    cy.visit(loginUrl);
    cy.contains('Lost your password?').click();
    
    
    cy.url().should('include', 'wp-login.php?action=lostpassword');
    cy.contains('Lost Password').should('be.visible');
  });

  it('handles repeated failed login attempts gracefully', () => {
    for (let i = 0; i < 3; i++) {
      fillLoginForm('wrong-user', 'wrong-password');
      cy.get('input[name="wp-submit"]').click({ force: true });
    }
    cy.get('#login_error', { timeout: 10000 }).should('be.visible');
  });
});

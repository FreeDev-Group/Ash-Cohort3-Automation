describe('User Registration', () => {

  it('should register a new user successfully', () => {

    const random = Date.now();
    const username = `dieudonne${random}`;
    const email = `dieudonne${random}@gmail.com`;

    cy.visit('https://student.michaelkentburns.com/wp-login.php?action=register');

    cy.get('#user_login').type(username);
    cy.get('#user_email').type(email);

    cy.get('#wp-submit').click();

    cy.contains('Registration complete. Please check your email').should('be.visible');

  });

});
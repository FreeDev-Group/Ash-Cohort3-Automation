describe('Create Survey', () => {

  it('should create a new survey', () => {

    cy.visit('/wp-login.php')

    cy.get('#user_login').type('mulongeshadieudonne17@gmail.com')
    cy.get('#user_pass').type('Dieudosuv26@@')
    cy.get('#wp-submit').click()

    cy.contains('Survey').click()
    cy.contains('Add New Survey').click()

    
    cy.get('#title').type('Survey Cypress Test')

    
    cy.get('textarea').first().type('Cypress.')

    
    cy.get('input[placeholder="mm/dd/yyyy"]').first().type('08/04/2026')

    
    cy.get('input[placeholder="mm/dd/yyyy"]').eq(1).type('08/10/2026')

  
    cy.contains('Publish').click()

  })

})
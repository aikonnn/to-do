describe('Authentication', () => {
  it('login fail', () => {
    cy.visit('localhost:3000/')
    cy.url().should('include', '/login')

    cy.get('#email-input').type('fake@email.com')
    cy.get('#email-input').should('have.value', 'fake@email.com')

    cy.get('#pass-input').type('fakepass')
    cy.get('#pass-input').should('have.value', 'fakepass')

    cy.get('#login-btn').click();

    cy.contains('Unable to signin, please try again!')
  })

  it('register', () => {
    cy.visit('localhost:3000/')
    cy.url().should('include', '/login')

    cy.contains('Not registered?').click()

    cy.url().should('include', '/register')

    cy.get('#email-input').type('new@email.com')
    cy.get('#email-input').should('have.value', 'new@email.com')

    cy.get('#pass-input').type('newpass')
    cy.get('#pass-input').should('have.value', 'newpass')
  })
})
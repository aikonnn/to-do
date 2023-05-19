describe('Authentication Pages', () => {
    it('login', () => {
      cy.visit('localhost:3000/')
      cy.url().should('include', '/login')
  
      cy.get('#email-input').type('new@email.com')
      cy.get('#email-input').should('have.value', 'new@email.com')
  
      cy.get('#pass-input').type('newpass')
      cy.get('#pass-input').should('have.value', 'newpass')
  
      cy.get('#login-btn').click();

      cy.url().should('include', '/')
    })

    it('new task', () => {
        cy.visit('localhost:3000/')
        cy.url().should('include', '/login')
    
        cy.get('#email-input').type('new@email.com')
        cy.get('#email-input').should('have.value', 'new@email.com')
    
        cy.get('#pass-input').type('newpass')
        cy.get('#pass-input').should('have.value', 'newpass')
    
        cy.get('#login-btn').click();

        cy.contains('add new tasks').click()
        cy.get('#task-box').should('have.value', 'write your task here');

        cy.get('#delete-btn').click()
      })
  })
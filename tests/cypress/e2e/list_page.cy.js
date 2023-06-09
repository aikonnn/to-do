describe('View Tasks', () => {
    it('login', () => {
      cy.visit('http://web:3000/')
      cy.url().should('include', '/login')
  
      cy.get('#email-input').type('new@email.com')
      cy.get('#email-input').should('have.value', 'new@email.com')
  
      cy.get('#pass-input').type('newpass')
      cy.get('#pass-input').should('have.value', 'newpass')
  
      cy.get('#login-btn').click();

      cy.url().should('include', '/')
    })

    it('new task', () => {
        cy.visit('http://web:3000/')
        cy.url().should('include', '/login')
    
        cy.get('#email-input').type('new@email.com')
        cy.get('#email-input').should('have.value', 'new@email.com')
    
        cy.get('#pass-input').type('newpass')
        cy.get('#pass-input').should('have.value', 'newpass')
    
        cy.get('#login-btn').click();

        cy.contains('add new tasks').click()
        cy.get('#task-box').should('have.value', 'write your task here');

        cy.contains('add new tasks').click()
        cy.get('li').should('have.length', 2)

        cy.get('#delete-btn').click()
        cy.get('#delete-btn').click()
      })
      it('new task with edit', () => {
        cy.visit('http://web:3000/')
        cy.url().should('include', '/login')
    
        cy.get('#email-input').type('new@email.com')
        cy.get('#email-input').should('have.value', 'new@email.com')
    
        cy.get('#pass-input').type('newpass')
        cy.get('#pass-input').should('have.value', 'newpass')
    
        cy.get('#login-btn').click();

        cy.contains('add new tasks').click()
        cy.get('#task-box').should('have.value', 'write your task here');
        cy.get('#task-box').type('this is my task{enter}');
        cy.get('#task-box').should('have.value', 'this is my task');

        cy.get('#delete-btn').click()
      })

      it('new task with edit status', () => {
        cy.visit('http://web:3000/')
        cy.url().should('include', '/login')
    
        cy.get('#email-input').type('new@email.com')
        cy.get('#email-input').should('have.value', 'new@email.com')
    
        cy.get('#pass-input').type('newpass')
        cy.get('#pass-input').should('have.value', 'newpass')
    
        cy.get('#login-btn').click();

        cy.contains('add new tasks').click()
        cy.get('#task-box').should('have.value', 'write your task here');

        cy.get('#stat-btn').click();
        cy.contains('Urgent').click();

        cy.get('#stat-btn').click();
        cy.contains('Slow').click();

        cy.get('#stat-btn').click();
        cy.contains('Done').click();

        cy.get('#stat-btn').click();
        cy.contains('Regular').click();

        cy.get('#stat-btn').click();
        cy.contains('Emergency').click();

        cy.get('#delete-btn').click()
      })
  })
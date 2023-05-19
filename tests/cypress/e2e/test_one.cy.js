describe('Connection to site', () => {
  it('connect to addr', () => {
    cy.visit('http://web:3000/')
    cy.url().should('include', '/login')
  })
})
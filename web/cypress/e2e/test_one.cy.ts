describe('Connection to site', () => {
  it('connect to addr', () => {
    cy.visit('localhost:3000/')
    cy.url().should('include', '/login')
  })
})
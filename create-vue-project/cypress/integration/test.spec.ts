describe('My First Test', () => {
  it('button click', () => {
    cy.visit('/')
    cy.contains('#current', 'current: 0')
    cy.contains('#next', 'next: 1')
    cy.get('#button').click()
    cy.contains('#current', 'current: 1')
    cy.contains('#next', 'next: 2')
  })
})

describe('End-to-end Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('interacts with counter', () => {
    // Test Counter
    cy.get('#counter-value').should('have.text', '0');
    cy.get('#btn-incr').click();
    cy.get('#counter-value').should('have.text', '1'); 
    cy.get('#btn-decr').click();
    cy.get('#counter-value').should('have.text', '0');
  });
});

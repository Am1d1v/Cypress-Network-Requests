/// <reference types="Cypress" />

describe('Takeaways', () => {

  it('should display a list of fetched takeaways', () => {
    cy.visit('/');

    // Check that first 2 takeaway-items rendered
    cy.get('[data-cy="takeaway-item"]').should('have.length.above', 2);
  });

});
/// <reference types="Cypress" />

describe('Takeaways', () => {

  it('should display a list of fetched takeaways', () => {
    cy.visit('/');

    // Check that first 2 takeaway-items rendered
    cy.get('[data-cy="takeaway-item"]').should('have.length.above', 2);
  });

  it.only('should add a new takeaway', () => {
    // To create a new takeaway user must be logged in
    // Logging in
    cy.login();

    // Add a new takeaway
    cy.contains('+ Add a new takeaway').click();

    // Select "Title" input field and add title
    cy.get('[data-cy="title"]').click();
    cy.get('[data-cy="title"]').type('Test Takeaway Title');

    // Select "Body" input field and add description
    cy.get('[data-cy="body"]').click();
    cy.get('[data-cy="body"]').type('Test Takeaway Description');

    // Select "Create" button and click it
    cy.get('[data-cy="create-takeaway"]').click();

    // Check that new takeaway aws added
    cy.get('[data-cy="takeaway-item"]').should('have.length.above', 3);
  });

});
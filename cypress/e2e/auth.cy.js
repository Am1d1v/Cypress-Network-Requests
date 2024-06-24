/// <reference types="Cypress" />

describe('Authentication', () => {

    beforeEach(() => {
        cy.task('seedDatabase');
    });

    it('should sign up', () => {
        cy.visit('/signup');

        // Select email input field and type email
        cy.get('[data-cy="auth-email"]').click();
        cy.get('[data-cy="auth-email"]').type('test2@example.com');

        // Select password input field and type password
        cy.get('[data-cy="auth-password"]').click();
        cy.get('[data-cy="auth-password"]').type('testpassword123');

        // Select "Create Account" button and click it
        cy.get('[data-cy="auth-submit"]').click();

        // After successed sign up user redirected to /takeaways
        cy.location('pathname').should('eq', '/takeaways');

        cy.getCookie('__session').its('value').should('not.be.empty');
    });

    it.only('should login', () => {
        cy.visit('//login');

        // Select email input field and type email
        cy.get('[data-cy="auth-email"]').click();
        cy.get('[data-cy="auth-email"]').type('test@example.com');

        // Select password input field and type password
        cy.get('[data-cy="auth-password"]').click();
        cy.get('[data-cy="auth-password"]').type('testpassword');

        // Select "Login" button and click it
        cy.get('[data-cy="auth-submit"]').click();
    });

});
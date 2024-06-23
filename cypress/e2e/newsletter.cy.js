/// <reference types="Cypress" />

describe('News Letter', () => {

    it('should display a success message', () => {
        cy.visit('/');

        // Select email input field then insert dummy email data
        cy.get('[data-cy="newsletter-email"]').click().type('testemail@gmail.com');

        // Click on "Sign Up" button
        cy.get('[data-cy="newsletter-submit"]').click()     
        
        // Signing Up successfully message appears
        cy.get('div > p').contains('Thanks for signing up!');
    });

});
/// <reference types="Cypress" />

describe('News Letter', () => {

    // Reseed database before every test
    beforeEach(() => {
        cy.task('seedDatabase');
    });

    it('should display a success message', () => {
        // Intercept any http request 
        cy.intercept('POST', '/newsletter*', {status: 201, }).as('subscribe');
        cy.visit('/');

        // Select email input field then insert dummy email data
        cy.get('[data-cy="newsletter-email"]').type('testemail@gmail.com');

        // Click on "Sign Up" button
        cy.get('[data-cy="newsletter-submit"]').click()     
        
        cy.wait('@subscribe');

        // Signing Up successfully message appears
        cy.get('div > p').contains('Thanks for signing up!');
    });

    it('should display validation errors', () => {

        // Intercept any http request 
        cy.intercept('POST', '/newsletter*', {message: 'Email exists already'}).as('subscribe');
        cy.visit('/');

        // Select email input field then insert dummy email data
        cy.get('[data-cy="newsletter-email"]').should('not.have.attr', 'disabled')
        cy.get('[data-cy="newsletter-email"]').click().type('testemail@gmail.com');

        // Click on "Sign Up" button
        cy.get('[data-cy="newsletter-submit"]').click()     
        
        cy.wait('@subscribe');

        // Error message appears
        cy.contains('Email exists already');
    });

    it.only('should successfully create a new contact', () => {

        cy.request({
            method: 'POST',
            url: '/newsletter',
            body: {email: 'test1@example.com'},
            form: true
        }).then(res => {
            expect(res.status).to.eq(201);
        });

    });

});
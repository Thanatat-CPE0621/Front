/// <reference types="Cypress" />
context('Login Page', () => {
    
    beforeEach(() => {
        cy.visit('https://docs.cypress.io')
    })

    it('get first page login', () => {
        cy.get('.article-title')
        cy.get('.sidebar-title.current > .sidebar-links > :nth-child(2) > .sidebar-link').click()
        cy.url().should('eq', 'https://docs.cypress.io/guides/overview/key-differences.html#Architecture');

    })
   
})

/// <reference types="Cypress" />
context('Login Page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/login')
    })

    it('get first page login', () => {
        cy.get('.img')
        cy.get('.img-footer')
        cy.contains('Forget')
        cy.get('.gap-top > .input')
            .type('namename')
            .should('have.value', 'namename')
        // .type('knownamenow', { delay: 100 })
        cy.get(':nth-child(4) > .input')
            .type('namename')
            .should('have.value', 'namename')
        // .type('knownamenow', { delay: 100 })
        cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/admin');
    })

    it('check responsive', () => {
        cy.viewport('ipad-mini')
        cy.wait(500)
        cy.viewport('ipad-2')
        cy.wait(500)
        cy.viewport('macbook-11')
        cy.wait(500)
        cy.viewport('macbook-13')
        cy.wait(500)
        cy.viewport('macbook-15')
    })


})

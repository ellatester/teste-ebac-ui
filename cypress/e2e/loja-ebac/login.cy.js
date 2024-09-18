/// <reference types="cypress" />



describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        
        cy.get('#username').type('annli.cytest@teste.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, annli.cytest')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('annli.testadora@teste.com')
        cy.get('#password').type('algo@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('annli.cytest@teste.com')
        cy.get('#password').type('algg@123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });
})
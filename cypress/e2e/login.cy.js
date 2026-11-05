describe('Login', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })
    it('entrar com usuario e senha válidos', () => {
        cy.visit('https://www.saucedemo.com/') 
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')
    
    })

    it('mostrar erro para usuario inválido', () => {
        cy.visit('https://www.saucedemo.com/') 
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('senha_invalida')
        cy.get('[data-test="login-button]').click()
        cy.contains('Epic sadface: Username and password do not match any user in this service')
         .should('be.visible')
    })


})
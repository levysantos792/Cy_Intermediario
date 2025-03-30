Cypress.Commands.add('login', (
    user= Cypress.env('user_name'),
    password= Cypress.env('user_password')
) => {
    const login = () => {
        cy.visit('/user/sing_in')
        cy.get()
        cy.get()
        cy.get()
        cy.get()
    }
})
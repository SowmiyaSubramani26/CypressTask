

describe('Keyboardpress Simulation',()=>{
    it('should submit the searchbutton',()=>{
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('Cypress {enter}')
    })
})
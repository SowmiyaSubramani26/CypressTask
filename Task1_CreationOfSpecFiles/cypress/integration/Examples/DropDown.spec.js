

describe('Select Drop Down Box',()=>{
    it('DropDown',()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value','Both')
        cy.wait(5000)
        cy.get('#preferred-interface').select('JavaScript API')
        
    })
})
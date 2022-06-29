describe('Customise from CommanIn Support',()=>{
    it('login',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username','password')
    })
})